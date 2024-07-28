import styled, { keyframes } from "styled-components";

export const VideoOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

export const BgVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HomeButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border: none;
  margin-bottom: 50px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const BackIcon = styled.img`
  width: 60px;
  height: 60px;
`;


const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const lightningAnimation = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Lightning = styled.div`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  width: 2px;
  height: 100px;
  background: white;
  box-shadow: 0 0 10px white;
  opacity: 0;
  animation: ${lightningAnimation} ${({ duration }) => duration}s infinite;
`;

export const NameContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    top: 50%;
    font-size: 40px;
  }
`;

export const NameGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  margin-bottom: ${({ lineSpacing }) => lineSpacing || '20px'};
`;

export const Name = styled.div`
  font-family: 'CaptureIt', sans-serif;
  font-size: 80px;
  color: #ffffff;
  text-shadow: 
    1px 1px 0px #000,
    2px 2px 0px #000,
    3px 3px 0px #000,
    4px 4px 0px #000,
    5px 5px 0px #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0;
  animation: ${fadeInRight} 0.5s forwards;
  animation-delay: ${({ index }) => index * 0.1}s;
  margin: 0 2px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
