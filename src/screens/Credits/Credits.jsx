import { useRef, useEffect } from "react";
import * as S from "./Styled-Credits";

import Back from "../../assets/icons/back.png";
import NameOverlay from "./components/NameOverlay";

const names = [
  { names: ["IMMA EM"], start: 1 },
  { names: ["CLAUDIA LÓPEZ"], start: 5 },
  { names: ["LUIS HERNÁNDEZ", "MELANIE RODRÍGUEZ"], start: 9 },
  { names: ["REACT", "LYRICS.OVH"], start: 14.5 },
  { names: ["AN", "EM. NEXT", "PRESENTATION"], start: 18 },
  { names: ["IN ASSOCIATION WITH", "SPOTIFY"], start: 22 },
  { names: ["A", "FIREBASE", "PRODUCTION"], start: 26 },
  { names: ["AN APP BY", "G"], start: 29.5 },
  { names: ["INSOMNIA"], start: 38 },
];

function Credits({ onHomeClick }) {
  const videoRef = useRef(null);
  const startTime = 6;
  const endTime = 63;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = startTime;
      videoRef.current.play();
      
      const handleTimeUpdate = () => {
        if (videoRef.current.currentTime >= endTime) {
          videoRef.current.currentTime = startTime;
        }
      };

      const handleVideoEnded = () => {
        window.location.reload();
      };

      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
      videoRef.current.addEventListener("ended", handleVideoEnded);

      return () => {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        videoRef.current.removeEventListener("ended", handleVideoEnded);
      };
    }
  }, [startTime, endTime]);

  return (
    <>
      <S.VideoOverlay />
      <S.VideoContainer>
        <S.BgVideo autoPlay loop ref={videoRef}>
          <source src={BgVideo} type="video/mp4" />
        </S.BgVideo>
      </S.VideoContainer>
      <NameOverlay names={names} videoDuration={endTime - startTime} />
      <S.HomeButton>
        <S.BackIcon src={Back} alt="Back" onClick={onHomeClick} />
      </S.HomeButton>
    </>
  );
}

export default Credits;
