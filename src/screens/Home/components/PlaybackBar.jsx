import React, { useState, useEffect } from "react";
import useSpotify from "../../../hooks/UseSpotify";
import { GetColorsImage } from "../../../utils/GetColorsImage";
import {
  transferUserPlayback,
  playTrack,
  pauseTrack,
  nextTrack,
  previousTrack,
  seekPositionTrack,
  toggleShuffle,
  setRepeatMode,
} from "../../../utils/api/Spotify";
import { GetToken } from "../../../utils/InMemoryToken";
import UseTimeOut from "../../../hooks/UseTimeOut";
import SearchBar from "../../Home/components/SearchBar";
import PlayerSection from "./PlayerSection";
import LyricLab from "../../LyricLab/LyricLab";

const PlaybackBar = ({ bgColor, toggleLyricLabVisibility }) => {
  const { token } = GetToken();

  const [lyrics, setLyrics] = useState("");
  const [lyricLabBgColor, setLyricLabBgColor] = useState("");
  const [playbackBar, setPlaybackBar] = useState({
    deviceId: "",
    track: {
      id: "",
      image: "./adhitia-sofyan-album.jpg",
      artists: [{ name: "Adhitia Sofyan" }],
      name: "Blue Sky Collapse",
      uri: "",
      durationMs: 290000,
    },
    progressMs: 0,
    nextTracks: [],
    prevTracks: [],
    repeat: 0,
    isPlaying: false,
    isShuffle: false,
    isExpand: true,
    isLoading: true,
    isNotActive: false,
  });

  const {
    deviceId,
    track,
    nextTracks,
    prevTracks,
    repeat,
    progressMs,
    isShuffle,
    isExpand,
    isLoading,
    isNotActive,
    isPlaying,
  } = playbackBar;

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const colors = await GetColorsImage(track.image);
        setLyricLabBgColor(colors[0]);
      } catch (error) {
        console.error('Error getting colors from image:', error);
      }
    };

    fetchColors();
  }, [track.image]);

  const onPlayerReady = ({ device_id }) => {
    transferUserPlayback(token, [device_id]).then(() => {
      setPlaybackBar({
        ...playbackBar,
        deviceId: device_id,
        isLoading: false,
      });
    });
  };

  const onPlayerChanged = (state) => {
    if (state) {
      const {
        track_window: { current_track, next_tracks, previous_tracks },
        repeat_mode,
        shuffle,
        position,
        duration,
        paused,
      } = state;

      setPlaybackBar((playbackBar) => ({
        ...playbackBar,
        track: {
          id: current_track.id,
          image: current_track.album.images[0].url,
          artists: current_track.artists,
          name: current_track.name,
          uri: current_track.uri,
          durationMs: duration,
        },
        nextTracks: next_tracks,
        previousTracks: previous_tracks,
        progressMs: position,
        repeat: repeat_mode,
        isPlaying: !paused,
        isShuffle: shuffle,
        isNotActive: false,
      }));

      fetchLyrics(current_track.artists[0].name, current_track.name);
    } else {
      setPlaybackBar((playbackBar) => ({
        ...playbackBar,
        isNotActive: true,
      }));
    }
  };

  useSpotify({ token, onPlayerReady, onPlayerChanged });

  const progressTimeout = () => {
    if (progressMs <= track.durationMs && isPlaying) {
      setPlaybackBar({ ...playbackBar, progressMs: progressMs + 1000 });
    }
  };

  UseTimeOut(1000, progressTimeout, [progressTimeout]);

  const toggleExpandHandler = () => {
    setPlaybackBar({ ...playbackBar, isExpand: !isExpand });
  };

  const playHandler = () => {
    playTrack(token, deviceId, track.uri, progressMs);
  };

  const pauseHandler = () => pauseTrack(token, deviceId);

  const nextHandler = () => {
    if (nextTracks.length) {
      nextTrack(token, deviceId);
    } else {
      seekPositionTrack(token, deviceId);
    }
  };

  const previousHandler = () => {
    if (prevTracks.length) {
      previousTrack(token, deviceId);
    } else {
      seekPositionTrack(token, deviceId);
    }
  };

  const seekHandler = () => {
    seekPositionTrack(token, deviceId, progressMs);
  };

  const toggleShuffleHandler = () => {
    toggleShuffle(token, deviceId, !isShuffle);
  };

  const setRepeatHandler = () => {
    const nextState = {
      0: "context",
      1: "track",
      2: "off",
    };

    setRepeatMode(token, deviceId, nextState[repeat]);
  };

  const progressChangeHandler = (e) => {
    const newProgress = Math.floor((track.durationMs * e.target.value) / 100);
    setPlaybackBar({ ...playbackBar, progressMs: newProgress });
  };

  const transferHandler = () => transferUserPlayback(token, [deviceId]);

  const onTrackSelect = (selectedTrack) => {
    setPlaybackBar({
      ...playbackBar,
      track: {
        id: selectedTrack.id,
        image: selectedTrack.album.images[0].url,
        artists: selectedTrack.artists,
        name: selectedTrack.name,
        uri: selectedTrack.uri,
        durationMs: selectedTrack.duration_ms,
      },
      progressMs: 0,
      isPlaying: true,
    });

    playTrack(token, deviceId, selectedTrack.uri);
    fetchLyrics(selectedTrack.artists[0].name, selectedTrack.name);
  };

  const fetchLyrics = async (artist, song) => {
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
      const data = await response.json();
      setLyrics(data.lyrics);
    } catch (error) {
      console.error("Error fetching lyrics:", error);
      setLyrics("Lyrics not found");
    }
  };

  return (
    <>
      <SearchBar onTrackSelect={onTrackSelect} />
      {isNotActive ? (
        <div>Please activate your player.</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <PlayerSection
            player={playbackBar}
            toggleExpandHandler={toggleExpandHandler}
            playHandler={playHandler}
            pauseHandler={pauseHandler}
            progressChangeHandler={progressChangeHandler}
            nextHandler={nextHandler}
            previousHandler={previousHandler}
            seekHandler={seekHandler}
            toggleShuffleHandler={toggleShuffleHandler}
            setRepeatHandler={setRepeatHandler}
            bgColor={bgColor}
            toggleLyricLabVisibility={toggleLyricLabVisibility}
          />
          <LyricLab 
            lyrics={lyrics} 
            songName={track.name} 
            artistName={track.artists[0].name} 
            backgroundColor={lyricLabBgColor}
          />
        </>
      )}
    </>
  );
};

export default PlaybackBar;
