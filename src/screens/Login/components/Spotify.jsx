import React from "react";
import SpotifyIcon from "../../../assets/icons/spotify_c.png";
import * as S from "../Styled-Login";

function Spotify({ onClick }) {
  return (
    <S.SpotifyButton onClick={onClick}>
      <S.SpotifyIcon src={SpotifyIcon} alt="Spotify Icon" />
    </S.SpotifyButton>
  );
}

export default Spotify;
