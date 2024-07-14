import React from 'react';
import { useState } from 'react';
import * as S from '../Styled-Home';
import Home from "../../../assets/icons/home.png";
import Playlists from "../../../assets/icons/playlist.png";
import Credits from "../../../assets/icons/credits.png";

const SidebarMobile = ({ onClose, onHomeClick, playlists, onShowCredits }) => {
  const [showPlaylists, setShowPlaylists] = useState(false);

  const togglePlaylists = () => setShowPlaylists(!showPlaylists);

  return (
    <S.SidebarMobileWrapper>
      <S.MobileMenuItem onClick={() => { onHomeClick(); onClose(); }}>
        <S.IconMB src={Home} alt="Home" />
        <S.Span>Inicio</S.Span>
      </S.MobileMenuItem>
      <S.MobileMenuItem onClick={togglePlaylists}>
        <S.IconMB src={Playlists} alt="Playlists" />
        <S.Span>Mis listas</S.Span>
      </S.MobileMenuItem>
      {showPlaylists && (
        <S.PlaylistContainerM>
          {playlists.map((playlist) => (
            <S.PlaylistItemM key={playlist.id}>
              {playlist.name}
            </S.PlaylistItemM>
          ))}
        </S.PlaylistContainerM>
      )}
      <S.MobileMenuItem onClick={() => { onShowCredits(); onClose(); }}>
        <S.IconMB src={Credits} alt="Credits" />
        <S.Span>Créditos</S.Span>
      </S.MobileMenuItem>
    </S.SidebarMobileWrapper>
  );
};

export default SidebarMobile;
