import styled, {keyframes} from "styled-components";

export const div = styled.div`
  background: radial-gradient(
    circle at center,
    #2f91d4,
    #2072c1,
    #1a60b3,
    #164ea1,
    #0f3c8e,
    #041f58
  );
  color: white;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const StyledBody = styled.body`
  background: radial-gradient(
    circle at center,
    #2f91d4,
    #2072c1,
    #1a60b3,
    #164ea1,
    #0f3c8e,
    #041f58
  );
  color: white;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
`;

export const ItLogo = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ItLogoIcon = styled.img`
  width: 30px;
  height: 30px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-bottom: 30px;
  }
`;

export const Main = styled.div`
  font-size: 48px;
  text-align: center;
  font-weight: bold;
`;

export const FullscreenButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const FullscreenIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Subtitle = styled.div`
  margin-top: 20px;
  font-size: 15px;
`;

export const LoginButton = styled.button`
  background-color: #164ea1;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 35px 200px;
  cursor: pointer;
  border-radius: 4px;
`;

export const HiddenLogin = styled(LoginButton)`
  display: none;
`;

export const PulseAnimation = styled.div`
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: pulse 1.5s infinite;
`;

export const TitleAnimation = styled.div`
  opacity: 0;
  margin-left: 10px;
  transform: translateX(-20px);
  animation: fadeInRight 2s forwards;

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.div`
  display: flex;
  margin-right: 20px;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SubTitleAnimation = styled.div`
  opacity: 0;
  transform: translateX(-40px);
  font-size: 15px;
  margin-top: 20px;
  margin-right: 10px;
  animation: fadeInRight 3s forwards;

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(10px);
    }
  }
`;

export const MessageAnimation = styled.div`
  opacity: 0;
  margin-right: -40px;
  transform: translateX(20px);
  animation: fadeInLeft 4s forwards;

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(-20px);
    }
  }

  font-size: 50px;

  @media (max-width: 1200px) {
    font-size: 50px;
  }

  @media (max-width: 992px) {
    font-size: 50px;
  }

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 576px) {
    font-size: 45px;
  }
`;

export const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  .bg-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const VideoOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.2);
z-index: -2;
`;

export const BgVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;


export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const GoogleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 5px;
  margin-right: 10px;
  margin-left: 20px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
    border-color: #ccc;
  }

`;

export const GoogleIcon = styled.img`
  width: 100%;
  height: auto;
`;

export const SpotifyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 5px;
  transition: all 0.3s ease;
  cursor: pointer;

    &:hover {
    background-color: #f0f0f0;
    border-color: #ccc;
  }
`;

export const SpotifyIcon = styled.img`
  width: 100%;
  height: auto;
`;

const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ShowButtons = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: ${slideInFromBottom} 1s forwards;
`;

export const ShowButtonS = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 0px;
  margin-top: 30px;
  opacity: 0;
  animation: ${slideInFromBottom} 1s forwards;
`;
