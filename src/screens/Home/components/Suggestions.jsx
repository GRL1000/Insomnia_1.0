import * as S from "../Styled-Home";
import ImagineDragons from "../../../assets/images/wallpaper.png";
import Muse from "../../../assets/images/muse.jpg";
import ArcticMonkeys from "../../../assets/images/arctic-monkeys.jpg"
import TwentyOnePilots from "../../../assets/images/twenty-one-pilots.jpg"
import { GetColorsImage } from "../../../utils/GetColorsImage";
import { useEffect, useState } from "react";

const images = [
  { src: ImagineDragons, artist: 'IMAGINE DRAGONS' },
  { src: Muse, artist: 'MUSE' },
  { src: ArcticMonkeys, artist: 'ARCTIC MONKEYS' },
  { src: TwentyOnePilots, artist: 'TWENTY ONE PILOTS' },
];

function Suggestions({ sidebarExpanded, setBgColor, setPlayBackColor }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchColors = async (image) => {
      try {
        const palette = await GetColorsImage(image.src);
        if (palette && palette.length > 0) {
          const backgroundColor = palette[0];
          const backgroundColorT = palette[3];
          setBgColor(backgroundColor);
          setPlayBackColor(backgroundColorT);
        }
      } catch (error) {
        console.error('Error extracting colors:', error);
      }
    };

    fetchColors(images[currentImageIndex]);

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, setBgColor]);

  const currentImage = images[currentImageIndex];

  return (
    <S.SuggestionsWrapper className={sidebarExpanded ? 'expanded': ''}
      style={{
        backgroundImage: `url(${currentImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <S.ArtistNameN>{currentImage.artist}</S.ArtistNameN>
      <S.Subtitle>Escucha y practica tu pronunciación</S.Subtitle>
      <S.PlayButton>Play</S.PlayButton>
    </S.SuggestionsWrapper>
  );
}

export default Suggestions;
