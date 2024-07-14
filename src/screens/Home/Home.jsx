import React, { useState, useEffect } from 'react';
import * as S from './Styled-Home';
import { FiMenu } from 'react-icons/fi';
import ForYou from './components/ForYou';
import Sidebar from './components/Sidebar';
import Suggestions from './components/Suggestions';
import PlaybackBar from './components/PlaybackBar';
import LyricLab from '../LyricLab/LyricLab';
import Credits from '../Credits/Credits';
import { GetToken, fetchUserPlaylists } from '../../utils/InMemoryToken';
import SidebarMobile from './components/SidebarMobile';
import CircularMenu from '../LyricLab/components/CircularMenu';

export function Home() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [forYouBgColor, setForYouBgColor] = useState('');
  const [PlayBackColor, setPlayBackColor] = useState('');
  const [isLyricLabVisible, setIsLyricLabVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [playlists, setPlaylists] = useState([]);
  const [showCredits, setShowCredits] = useState(false);
  const [showSidebarMobile, setShowSidebarMobile] = useState(false);
  const [showCircularMenu, setShowCircularMenu] = useState(false);
  const { user } = GetToken();

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const tokenData = GetToken();
        const data = await fetchUserPlaylists(tokenData.token);
        setPlaylists(data);
      } catch (error) {
        console.error('Error fetching playlists:', error);
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
    if (window.innerWidth <= 768) {
      setShowCircularMenu(true);
    }
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

  const handleToggleSidebarMobile = () => {
    setShowSidebarMobile(!showSidebarMobile);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowCircularMenu(false);
      } else if (isLyricLabVisible) {
        setShowCircularMenu(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isLyricLabVisible]);

  return (
    <div className="container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <S.SidebarToggle onClick={handleToggleSidebarMobile}>
        <FiMenu size={24} />
      </S.SidebarToggle>
      <S.SidebarMobileWrapper className={showSidebarMobile ? 'show' : ''}>
        <SidebarMobile onClose={handleToggleSidebarMobile}
        onHomeClick={handleHomeClick}
        playlists={playlists}
        onShowCredits={handleShowCredits} />
      </S.SidebarMobileWrapper>
      {showCredits ? (
        <Credits onHomeClick={handleHomeClick} />
      ) : (
        <>
          {isSidebarVisible && (
            <Sidebar
              expanded={sidebarExpanded}
              onToggle={handleSidebarToggle}
              user={user}
              onHomeClick={handleHomeClick}
              playlists={playlists}
              onShowCredits={handleShowCredits}
            />
          )}
          {isLyricLabVisible ? (
            <>
              <LyricLab
                sidebarExpanded={sidebarExpanded}
                onLyricLabToggle={toggleLyricLabVisibility}
              />
              {showCircularMenu && <CircularMenu isVisible={true} />}
            </>
          ) : (
            <>
              <Suggestions sidebarExpanded={sidebarExpanded} setBgColor={setForYouBgColor} />
              <ForYou sidebarExpanded={sidebarExpanded} bgColor={forYouBgColor} />
            </>
          )}
          <PlaybackBar
          bgColor={PlayBackColor}
          toggleLyricLabVisibility={toggleLyricLabVisibility}/>
        </>
      )}
    </div>
  );
}