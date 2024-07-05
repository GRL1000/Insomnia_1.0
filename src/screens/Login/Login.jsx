import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login, getNewToken, GetToken } from "../../utils/InMemoryToken";
import * as S from "./Styled-Login";
import logoI from "../../assets/icons/it-logo.png";
import Spotify from "./components/Spotify";
import BgVideo from "../../assets/video/video.mp4";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, expirationDate } = GetToken();
  const videoRef = useRef(null);
  const startTime = 55;
  const endTime = 327;

  const scopes = encodeURIComponent(
    "user-read-currently-playing user-read-recently-played streaming user-read-email user-read-private"
  );
  const redirectUri = encodeURIComponent(import.meta.env.VITE_URL);
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&scope=${scopes}&response_type=code&redirect_uri=${redirectUri}`;
  const code = new URLSearchParams(location.search).get("code");

  useEffect(() => {
    const handleAuth = async () => {
      if (code) {
        try {
          await login(code);
          navigate("/home");
        } catch (error) {
          console.error(error);
        }
      } else if (token && expirationDate) {
        if (new Date() < new Date(expirationDate)) {
          navigate("/home");
        } else {
          try {
            await getNewToken();
            navigate("/home");
          } catch (error) {
            console.error(error);
          }
        }
      }
    };

    handleAuth();
  }, [code, token, expirationDate, navigate]);

  const handleSpotifyLogin = () => {
    window.location.href = url;
  };

  useEffect(() => {
    let handleTimeUpdate;
  
    const setupVideo = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = startTime;
  
        handleTimeUpdate = () => {
          if (videoRef.current && videoRef.current.currentTime >= endTime) {
            videoRef.current.currentTime = startTime;
          }
        };
  
        videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
      }
    };

    const cleanupVideo = () => {
      if (videoRef.current && handleTimeUpdate) {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  
    setupVideo();
  
    return cleanupVideo;
  }, [startTime, endTime]);

  return (
    <>
      <S.Header>
        <S.TitleAnimation>
          <S.Name>INSOMNIA v1.0</S.Name>
        </S.TitleAnimation>
        <S.TitleAnimation>
          <S.Nav>EM. NEXT</S.Nav>
        </S.TitleAnimation>
      </S.Header>
      <S.Main>
        <S.MessageAnimation>
          APRENDE CON
          <br />
          TU MÚSICA FAVORITA
        </S.MessageAnimation>
        <S.SubTitleAnimation>
          Inicia sesión y disfruta de esta nueva experiencia
        </S.SubTitleAnimation>
        <S.ShowButtonS>
          <Spotify onClick={handleSpotifyLogin} />
        </S.ShowButtonS>
      </S.Main>
      <S.ItLogo>
        <S.ItLogoIcon src={logoI} />
      </S.ItLogo>
      <S.VideoOverlay />
      <S.VideoContainer>
        <S.BgVideo autoPlay loop muted ref={videoRef}>
          <source src={BgVideo} type="video/mp4" />
        </S.BgVideo>
      </S.VideoContainer>
    </>
  );
};

export default Login;
