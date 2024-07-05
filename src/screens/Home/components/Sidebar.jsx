import { useState } from "react";
import * as S from "../Styled-Home";
import Home from "../../../assets/icons/home.png";
import Playlists from "../../../assets/icons/playlist.png";
import Credits from "../../../assets/icons/credits.png";

function Sidebar({ expanded, onToggle, user, onHomeClick, playlists, onShowCredits }) {
  const [showPlaylists, setShowPlaylists] = useState(false);

  const handleMouseEnter = () => {
    onToggle(true);
  };

  const handleMouseLeave = () => {
    onToggle(false);
  };

  const togglePlaylists = () => setShowPlaylists(!showPlaylists);

  return (
    <S.SidebarWrapper
      style={{ width: expanded ? "250px" : "63px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {user && (
        <>
          <S.ProfileContainer>
            <S.Image src={user.images[0].url} alt="User Profile" />
            {expanded && <S.UserName>{user.display_name}</S.UserName>}
          </S.ProfileContainer>
        </>
      )}
      <S.ItemsContainer>
        <S.MenuItem onClick={onHomeClick}>
          <S.Icon src={Home} alt="Home" />
          {expanded && <span>Inicio</span>}
        </S.MenuItem>
        <S.MenuItem onClick={togglePlaylists}>
          <S.Icon src={Playlists} alt="Playlists" />
          {expanded && <span>Mis listas</span>}
        </S.MenuItem>
        {showPlaylists && expanded && (
          <S.PlaylistContainer>
            {playlists.map((playlist) => (
              <S.PlaylistItem key={playlist.id}>
                {playlist.name}
              </S.PlaylistItem>
            ))}
          </S.PlaylistContainer>
        )}
        <S.MenuItem onClick={onShowCredits}>
          <S.Icon src={Credits} alt="Credits" />
          {expanded && <span>Créditos</span>}
        </S.MenuItem>
      </S.ItemsContainer>
    </S.SidebarWrapper>
  );
}

export default Sidebar;
