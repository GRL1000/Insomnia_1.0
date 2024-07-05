import React from "react";
import * as S from "../Styled-Home";
import MiliToMinutesSeconds from "../../../utils/MiliToMinutesSeconds";
import ShuffleIcon from "../../../assets/icons/ShuffleIcon";
import PreviousIcon from "../../../assets/icons/PreviousIcon";
import PlayIcon from "../../../assets/icons/PlayIcon";
import PauseIcon from "../../../assets/icons/PauseIcon";
import NextIcon from "../../../assets/icons/NextIcon";
import RepeatIcon from "../../../assets/icons/RepeatIcon";
import ControlButton from "./ControlButton";
import BadgeButton from "./BadgeButton";
import Album from "./Album";
import LabIcon from "../../../assets/icons/lab.png";

const PlayerSection = ({
  player: {
    track,
    progressMs,
    repeat,
    isPlaying,
    isShuffle,
  },
  toggleExpandHandler,
  playHandler,
  pauseHandler,
  nextHandler,
  previousHandler,
  progressChangeHandler,
  seekHandler,
  toggleShuffleHandler,
  setRepeatHandler,
  //sidebarExpanded,
  bgColor,
  toggleLyricLabVisibility
}) => (
  <S.Card style={{background: bgColor}}>
    <S.TrackInfo>
      <Album img={track.image} toggleExpandHandler={toggleExpandHandler} />
      <S.TextInfo>
        <S.TrackName>{track.name}</S.TrackName>
        <S.ArtistName size="sm">
          {track.artists.map((artist) => artist.name).join(", ")}
        </S.ArtistName>
      </S.TextInfo>
    </S.TrackInfo>
    <S.ControlWrapper>
      <S.SmallButtonWrapper>
        <BadgeButton isActive={isShuffle} onClick={toggleShuffleHandler}>
          <ShuffleIcon />
        </BadgeButton>
      </S.SmallButtonWrapper>
      <S.SmallButtonWrapper>
        <ControlButton onClick={previousHandler}>
          <PreviousIcon />
        </ControlButton>
      </S.SmallButtonWrapper>
      <S.SmallButtonWrapper>
        {isPlaying ? (
          <ControlButton variant="outlined" size="sm" onClick={pauseHandler}>
            <PauseIcon />
          </ControlButton>
        ) : (
          <ControlButton variant="outlined" size="sm" onClick={playHandler}>
            <PlayIcon />
          </ControlButton>
        )}
      </S.SmallButtonWrapper>
      <S.SmallButtonWrapper>
        <ControlButton onClick={nextHandler}>
          <NextIcon />
        </ControlButton>
      </S.SmallButtonWrapper>
      <S.SmallButtonWrapper>
        <BadgeButton
          isActive={repeat}
          badge={repeat === 2 && "1"}
          onClick={setRepeatHandler}
        >
          <RepeatIcon />
        </BadgeButton>
      </S.SmallButtonWrapper>
    </S.ControlWrapper>
    <S.TimeWrapper>
      <p size="xs">{MiliToMinutesSeconds(progressMs)}</p>
      <p size="xs">{MiliToMinutesSeconds(track.durationMs)}</p>
    </S.TimeWrapper>
    <S.Progress
      value={(progressMs / track.durationMs) * 100 || 0}
      onChange={progressChangeHandler}
      onMouseUp={seekHandler}
    />
    <S.LabWrapper onClick={toggleLyricLabVisibility}>
      <S.LabIcon src={LabIcon} alt="Lyric Lab Icon" />
    </S.LabWrapper>
  </S.Card>
);

export default PlayerSection;
