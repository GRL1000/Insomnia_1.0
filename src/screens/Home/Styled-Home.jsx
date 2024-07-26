import styled, { keyframes } from "styled-components";
import Button from "../../inputs/Button";

export const Card = styled.div`
  background-color: gray;
  width: 100vw;
  height: 7rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  transition: width 0.3s ease;

  @media (max-width: 768px) {
    height: 8rem;
    width: 120vw;
  }
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-bottom: -10px;
`;

export const AlbumWrapper = styled.div`
  width: 65px;
  height: 65px;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: -15px;
  position: relative;
  transition: height 0.15s ease-in-out;

  @media (max-width: 1024px) {
    width: 65px;
    height: 65px;
    margin-right: 1rem;
    margin-left: 3rem;
  }

  @media (max-width: 768px) {
    width: 65px;
    height: 65px;
    margin-right: 1rem;
    margin-left: 3rem;
  }

  @media (max-width: 748px) {
    width: 65px;
    height: 65px;
    margin-right: 1rem;
    margin-left: 3rem;
  }

  @media (max-width: 600px) {
    width: 65px;
    height: 65px;
    margin-right: 1rem;
    margin-left: 3rem;
  }

  @media (max-width: 480px) {
    width: 65px;
    height: 65px;
    margin-right: 1rem;
    margin-left: 3rem;
  }

  @media (max-width: 430px) {
    width: 65px;
    height: 65px;
    margin-right: 1rem;
    margin-left: 3rem;
  }

  @media (max-width: 414px) {
    width: 65px;
    height: 65px;
    margin-right: 1rem;
    margin-left: 3rem;
  }

  @media (max-width: 412px) {
    width: 65px;
    height: 65px;
    margin-right: 1rem;
    margin-left: 3rem;
  }

  @media (max-width: 390px) {
    width: 65px;
    height: 65px;
    margin-right: 1rem;
    margin-left: 3rem;
  }

  @media (max-width: 375px) {
    width: 65px;
    height: 65px;
    margin-right: 1rem;
    margin-left: 3rem;
  }

  @media (max-width: 360px) {
    width: 65px;
    height: 65px;

    margin-left: 3rem;
  }

  @media (max-width: 344px) {
    width: 65px;
    height: 65px;
    margin-right: 1rem;
    margin-left: 3rem;
  }

  @media (max-width: 320px) {
    width: 65px;
    height: 65px;
    margin-right: 1rem;
    margin-left: 3rem;
  }
`;

export const AlbumImage = styled.img`
  width: 100%;
  height: 100%;
  margin-left: 20px;
  border-radius: 0.75rem;
  object-fit: cover;
`;

export const TrackInfo = styled.div`
  margin-top: 10px;
  margin-left: -30px;
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const TrackName = styled.p`
  font-weight: bold;
  font-size: 15px;
  margin: 0;
`;

export const ArtistName = styled.p`
  font-size: 15px;
  margin: 0;
`;

export const ToggleCollapseButton = styled(Button).attrs(() => ({
  variant: "solid",
  color: "black",
  size: "xs",
  rounded: true,
}))`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;

export const ToggleExpandButton = styled(Button).attrs(() => ({
  variant: "solid",
  color: "black",
  size: "xs",
  rounded: true,
}))`
  margin: 0 0 0.25rem auto;
`;

export const ControlWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0.5rem 0;
  margin-left: -0px;
  margin-top: -45px;
  gap: 2rem;
`;

export const SmallButtonWrapperS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SmallButtonWrapperP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SmallButtonWrapperPP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;

  @media (max-width: 1024px) {
    margin-left: 300px;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-left: 347px;
  }

  @media (max-width: 748px) {
    margin-left: 414px;
  }

  @media (max-width: 600px) {
    margin-left: 280px;
  }

  @media (max-width: 480px) {
    margin-left: 240px;
  }

  @media (max-width: 430px) {
    margin-left: 435px;
  }

  @media (max-width: 414px) {
    margin-left: 420px;
  }

  @media (max-width: 412px) {
    margin-left: 420px;
  }

  @media (max-width: 390px) {
    margin-left: 390px;
  }

  @media (max-width: 375px) {
    margin-left: 380px;
  }

  @media (max-width: 360px) {
    margin-left: 348px;
  }

  @media (max-width: 344px) {
    margin-left: 340px;
  }

  @media (max-width: 320px) {
    margin-left: 150px;
  }
`;

export const SmallButtonWrapperN = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SmallButtonWrapperR = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: -25px;
  width: 625px;
  font-size: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Progress = styled.input.attrs({ type: "range" })`
  width: 40%;
  margin: 0 1rem;
  margin-left: 30px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    margin-top: 20px;
    margin-left: 60px;
    width: 82%;
  }

  @media (max-width: 748px) {
    margin-top: 20px;
    margin-left: 68px;
    width: 80%;
  }

  &::-webkit-slider-runnable-track {
    height: 4px;
  }

  &::-moz-range-track {
    height: 4px;
  }

  &::-ms-track {
    height: 4px;
    border: none;
    color: transparent;
    background: transparent;
    outline: none;
  }

  &::-webkit-slider-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #000;
    cursor: pointer;
    margin-top: -4px;
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #000;
    cursor: pointer;
  }

  &::-ms-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #000;
    cursor: pointer;
  }
`;

export const BadgeButtonWrapper = styled.div`
  position: relative;
`;

export const Badge = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8px;
  height: 8px;
  padding: 3px;
  color: gray;
  background: blue;
  border-radius: 999rem;
  font-size: 8px;
  font-weight: bold;
  right: 0;
  top: 0;
`;

export const SidebarWrapper = styled.div`
  width: 60px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.993);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 20px;
  overflow-y: auto;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    display: none;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-20px) scale(0.8);
    opacity: 0;
  }
  to {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
`;

export const SidebarToggle = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 2000;
  display: none;
  animation: ${slideIn} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const SidebarMobileWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 190px;
  height: 130vh;
  z-index: 1000;
  background-color: black;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &.show {
    transform: translateX(0);
  }
`;

export const MobileMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-top: 90px;
  margin-left: 190px;
  margin-bottom: -70px;
  font-size: 18px;
  cursor: pointer;
  box-sizing: border-box;
  transition: border 0.1s, transform 0.3s, color 0.3s, ease-in-out;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    border: 2px solid white;
    border-radius: 10px;
    margin-left: 200px;
    margin-right: -160px;
    color: cyan;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const IconMB = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const Span = styled.span`
  white-space: nowrap;
  vertical-align: middle;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export const Image = styled.img`
  border-radius: 30px;
  width: 50px;
  margin: 0;
`;

export const UserName = styled.p`
  margin-top: 10px;
  margin-bottom: -20px;
  text-align: center;
  font-weight: bold;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  margin-right: 10px;
  padding-top: 20px;
  margin-top: 20px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  padding: 10px 20px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 10px;
  transition: background-color 0.3s, border 0.1s, transform 0.3s, color 0.3s;

  &:hover {
    background-color: transparent;
    border: 2px solid white;
    margin-left: 10px;
    transform: scale(1.1);
    color: cyan;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  vertical-align: middle;
`;

export const PlaylistContainer = styled.div`
  padding-left: 20px;
  padding-right: 30px;
  height: 200px;
  overflow-y: auto;

  /* Scroll customization */
  &::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b2b6b8d3;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 5px;
  }

  @media (max-width: 767px) {
    scrollbar-width: thin;
  }
`;

export const PlaylistContainerM = styled.div`
  padding-left: 20px;
  padding-right: 150px;

  margin-top: 100px;
  margin-left: 200px;
  height: 200px;
  overflow-y: auto;
  /* Scroll customization */
  &::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b2b6b8d3;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 5px;
  }

  @media (max-width: 767px) {
    scrollbar-width: thin;
  }
`;

export const PlaylistItem = styled.div`
  padding: 5px 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const PlaylistItemM = styled.div`
  padding: 5px 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

/* Sección de sugerencias */

export const SuggestionsWrapper = styled.div`
  width: 95.5vw;
  height: 38vh;
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  padding-top: 0px;
  transition: width 0.3s ease, background-image 1s ease-in-out;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 115vw;
  }

  &.expanded {
    width: calc(95.5vw - 189px);

    @media (max-width: 768px) {
      width: 100vw;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  padding: 10px 0;
  background-color: transparent;
  position: fixed;
  top: 10px;
  right: 40px;
  z-index: 1000;

  @media (max-width: 768px) {
    margin-top: -4px;
    margin-right: 120px;
  }
`;

export const IconSearch = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconS = styled.img`
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  flex: 1;
  margin-left: 10px;
  padding: 8px;
  border: none;
  border-radius: 5px;
  outline: none;
  color: #ffffff;
  background-color: transparent;
  font-size: 16px;
  &::placeholder {
    color: #ffffff;
  }
`;

export const SearchResults = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 50px;
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 250px;
  }

  /* Scroll customization */
  &::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border: 0px none #b2b6b87f;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b2b6b8d3;
  }

  &::-webkit-scrollbar-thumb:active {
    background: #b2b6b8d3;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border: 0px solid #aaa;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track:hover {
    background: #b2b6b87f;
  }

  &::-webkit-scrollbar-track:active {
    background: #b2b6b87f;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  @media (max-width: 767px) {
    scrollbar-width: thin;
  }
`;

export const SearchResultItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: #ffffff8f;
  }
`;

export const TrackImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 10px;
`;

/* Sección de sugerencias */

/* Sección "Para ti" */

export const ForYouWrapper = styled.div`
  width: 95.5vw;
  max-height: 51vh;
  background-color: rgba(14, 226, 215, 0);
  color: #fff;
  position: fixed;
  top: 38vh;
  right: 0;
  padding-top: 0px;
  transition: width 0.3s ease, background-color 1s ease-in-out;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 115vw;
    max-height: 60vh;
  }

  &.expanded {
    width: calc(95.5vw - 189px);

    @media (max-width: 768px) {
      width: 100vw;
    }
  }

  /* Scroll customization */
  &::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }

  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border: 0px none #b2b6b87f;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b2b6b8d3;
  }

  &::-webkit-scrollbar-thumb:active {
    background: #b2b6b8d3;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border: 0px solid #aaa;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track:hover {
    background: #b2b6b87f;
  }

  &::-webkit-scrollbar-track:active {
    background: #b2b6b87f;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  @media (max-width: 767px) {
    scrollbar-width: thin;
  }
`;

export const SectionTitle = styled.h4`
  margin-top: 20px;
  margin-left: 17px;
  margin-bottom: 10px;
  color: #ffffff;

  @media (max-width: 768px) {
    margin-left: 54px;
  }
`;

/* Componente Units */

export const UnitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SquareContainer = styled.div`
  flex-shrink: 0;
  width: 300px;
  height: 110px;
  margin: 10px;
  margin-left: 10px;
  border-radius: 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const UnitsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  margin-top: -11px;
  max-width: 100%;
  margin-left: 8px;
  padding-bottom: 30px;
  margin-bottom: -30px;

  @media (max-width: 768px) {
    margin-right: 9px;
    margin-left: 45px;
  }

  /* Scroll customization */
  &::-webkit-scrollbar {
    height: 9px;
  }

  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    border: 0px none #b2b6b87f;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b2b6b8d3;
  }

  &::-webkit-scrollbar-thumb:active {
    background: #b2b6b8d3;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border: 0px solid #aaa;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track:hover {
    background: #b2b6b87f;
  }

  &::-webkit-scrollbar-track:active {
    background: #b2b6b87f;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  @media (max-width: 767px) {
    scrollbar-width: thin;
  }
`;

export const UnitsInnerContainer = styled.div`
  display: flex;
`;

export const UnitName = styled.h4`
  text-align: center;
  margin-top: 10px;
`;

/* Componente Units */

export const ArtistNameN = styled.h2`
  position: absolute;
  bottom: 90px;
  left: 17px;
  font-size: 50px;
  color: #fff;

  @media (max-width: 768px) {
    margin-bottom: 50px;
    margin-left: 37px;
    font-size: 30px;
    max-width: 90%;
  }
`;

export const Subtitle = styled.h4`
  position: absolute;
  left: 17px;
  bottom: 70px;

  @media (max-width: 768px) {
    margin-left: 37px;
    font-size: 17px;
    max-width: 90%;
    bottom: 80px;
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 17px;
  bottom: 25px;
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-left: 38px;
    font-size: 15px;
    margin-bottom: 20px;
  }
`;

/* Sección Nueva Música */

export const NewMusicContainer = styled.div`
  background-color: transparent;
  padding: 0px;
  border-radius: 8px;
  margin-top: -20px;
  margin-left: 20px;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-left: 56px;
    margin-right: 18px;
  }
`;

export const NewMusicTitle = styled.h3`
  color: white;
  margin-top: 35px;
  margin-left: 17px;

  @media (max-width: 768px) {
    margin-left: 54px;
  }
`;

export const SongList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SongItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px 10px;
  border-radius: 10px;
  border: 2px solid transparent;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-2px);
  }
`;

export const SongTitle = styled.span`
  flex: 1;
  color: #333;
  font-weight: bold;
`;

export const SongArtist = styled.span`
  color: #666;
  margin-right: 10px;
`;

export const SongDuration = styled.span`
  color: #666;
`;

/* PlaybackBar */

export const PlaybackBarWrapper = styled.div`
  width: 95.5vw;
  height: 12vh;
  background-color: rgba(14, 226, 215, 0);
  color: #fff;
  position: fixed;
  bottom: 0;
  right: 0;
  transition: width 0.3s ease, background-color 1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: -10px;
`;

export const PlaybackControls = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  margin-left: -60px;
`;

export const SpecialToolsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 800px;
  margin-top: -30px;
`;

export const SpecialTools = styled.div`
  display: flex;
  gap: 20px;
`;

export const IconWrapperT = styled.div`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
    color: #1db954;
  }
`;

export const IconPWrapper = styled.div`
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
    color: #1db954;
  }
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ProgressBar = styled.div`
  width: 40%;
  height: 5px;
  margin-left: -60px;
  background-color: #555;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

export const ProgressStart = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 20px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const ProgressEnd = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 20px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const OscurecerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  pointer-events: none;
`;

export const LabWrapper = styled.div`
  position: absolute;
  background-color: black;
  border-radius: 20px;
  padding: 9px 10px 8px 11px;
  top: 18px;
  right: 300px;
  z-index: 999;
  border: 1px solid black;

  @media (max-width: 768px) {
    background-color: black;
    margin-top: 14px;
    margin-right: -218px;
    border-radius: 20px;
    padding: 10px 10px 7px 11px;
  }
`;

export const LabIcon = styled.img`
  width: 25px;
  height: auto;
`;
