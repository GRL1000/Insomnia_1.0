import React, { useState, useEffect } from "react";
import ForYou from "./components/ForYou";
import Sidebar from "./components/Sidebar";
import Suggestions from "./components/Suggestions";
import PlaybackBar from "./components/PlaybackBar";
import LyricLab from "../LyricLab/LyricLab";
import Credits from "../Credits/Credits";
import { GetToken, fetchUserPlaylists } from "../../utils/InMemoryToken";

export function Home() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [forYouBgColor, setForYouBgColor] = useState('');
  const [PlayBackColor, setPlayBackColor] = useState('');
  const [isLyricLabVisible, setIsLyricLabVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [playlists, setPlaylists] = useState([]);
  const [showCredits, setShowCredits] = useState(false);
  const { user } = GetToken();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const tokenData = GetToken();
        const data = await fetchUserPlaylists(tokenData.token);
        setPlaylists(data);
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    if (user) {
      fetchPlaylists();
    }
  }, [user]);

  const handleSidebarToggle = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const handleHomeClick = () => {
    window.location.reload();
    setIsLyricLabVisible(false);
    setIsSidebarVisible(true);
    setShowCredits(false);
  };

  const toggleLyricLabVisibility = () => {
    setIsLyricLabVisible(!isLyricLabVisible);
  };

  const handleMouseEnter = () => {
    if (isLyricLabVisible) {
      setIsSidebarVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (isLyricLabVisible) {
      setIsSidebarVisible(false);
    }
  };

  const handleShowCredits = () => {
    setShowCredits(true);
    setIsSidebarVisible(false);
    setSidebarExpanded(false);
  };

  return (
    <div className="container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showCredits ? (
        <Credits onHomeClick={handleHomeClick} />
      ) : (
        <>
          {isSidebarVisible && <Sidebar expanded={sidebarExpanded} onToggle={handleSidebarToggle} user={user} onHomeClick={handleHomeClick} playlists={playlists} onShowCredits={handleShowCredits} />}
          {isLyricLabVisible ? (
            <>
              <LyricLab sidebarExpanded={sidebarExpanded} />
            </>
          ) : (
            <>
              <Suggestions sidebarExpanded={sidebarExpanded} setBgColor={setForYouBgColor} setPlayBackColor={setPlayBackColor} />
              <ForYou sidebarExpanded={sidebarExpanded} bgColor={forYouBgColor} />
            </>
          )}
          <PlaybackBar
            bgColor={PlayBackColor}
            toggleLyricLabVisibility={toggleLyricLabVisibility}
          />
        </>
      )}
    </div>
  );
}
