import styled, { css, keyframes } from "styled-components";

export const LyricLabContainer = styled.div`
  background-color: transparent;
  overflow-y: auto;
  margin-right: -20px;
  margin-top: -150px;
  margin-left: 86px;
  padding-bottom: 90px;
  max-height: 82.1vh;
  width: 99vw;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
  height: 160%;
  margin-left: -40px;
  margin-right: -50px;
  margin-top: -210px;
  margin-bottom: -50px;
  padding-left: 30px;
  padding-right: 10px;
  }

  @media (max-width: 748px) {
  }

  @media (max-width: 600px) {

  }

  @media (max-width: 480px) {

  }

  @media (max-width: 430px) {
    height: 160%;
  margin-left: -40px;
  margin-right: -50px;
  margin-top: -200px;
  margin-bottom: -50px;
  padding-left: 30px;
  padding-right: 10px;
  }

  @media (max-width: 414px) {
    height: 150%;
  margin-left: -35px;
  margin-right: -45px;
  margin-top: -200px;
  margin-bottom: -45px;
  padding-left: 25px;
  padding-right: 10px;
  }

  @media (max-width: 412px) {
    
  }

  @media (max-width: 390px) {

  }

  @media (max-width: 375px) {

  }

  @media (max-width: 360px) {

  }

  @media (max-width: 344px) {
    height: 125%;
  margin-left: -15px;
  margin-right: -25px;
  margin-top: -200px;
  margin-bottom: -25px;
  padding-left: 10px;
  padding-right: 10px;
  }

  @media (max-width: 320px) {

  }
`;

export const LyricText = styled.pre`
  margin-top: 110px;
  margin-bottom: -30px;
  margin-left: -50px;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 20px;
  line-height: 1.6;
  max-width: 100%;
  padding-right: 30px;
  text-align: center;
  overflow-x: hidden;
  color: white;
  font-weight: bold;

  @media (max-width: 768px) {
    padding-left: 60px;
    padding-bottom: 100px;
    font-size: 20px;
  }

  span.current-line {
    color: white;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* Estilos para texto resaltado */
  .highlighted-question {
    color: yellow;
    font-weight: bold;
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

export const TopicListContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 30px;
  width: 300px;
  height: 200px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = styled.div`
  background: transparent;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) =>
    !props.isVisible &&
    css`
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    `}

  ${(props) =>
    props.isVisible &&
    css`
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
    `}
`;

export const ListM = styled.ul`
  list-style: none;
  padding: 0;
  margin-right: -197px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ListItem = styled.li`
  margin: 30px 0;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s;

  &:hover {
    background-color: white;
    color: #0033cc;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  margin-right: -170px;
`;

export const Line = styled.div`
  position: absolute;
  height: 1200px;
  width: 2px;
  background-color: white;
  right: 46px;
  top: 10%;
`;

/* Speech */

export const SpeechWrapper = styled.div`
  position: absolute;
  top: 515px;
  right: 115px;
`;

export const FaMicrophoneContainer = styled.div`
  display: inline-block;
  margin-left: 90px;
  width: 40px;
  cursor: pointer;
  transition: transform 0.3s, color 0.3s;

  &:hover {
    color: #0033cc;
    transform: scale(1.1);
  }

  &:active {
    color: #0033cc;
    transform: scale(0.95);
  }
`;

export const TranscriptContainer = styled.div`
  margin-top: -250px;
  margin-right: -60px;
  padding-bottom: 175px;
  width: 210px;
  max-height: 20px;
  overflow-y: auto;

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

export const Transcript = styled.p`
  font-weight: bold;
  text-align: center;
  white-space: pre-wrap;
  line-height: 1.5;
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Nav = styled.nav`
  position: fixed;
  top: 50%;
  right: 0;
  width: 80px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  animation: ${({ isVisible }) => (isVisible ? slideUp : 'none')} 0.6s ease;
  z-index: 100;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-45deg);
  position: fixed;
  top: 50%;
  right: 0;
  z-index: 101;
`;

export const ToggleButton = styled.div`
  height: 60px;
  width: 60px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  font-size: 35px;
  color: #0e2431;
  z-index: 100;
  cursor: pointer;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(0deg)' : 'rotate(-225deg)')};
  transition: all 0.6s ease;
`;

export const MenuSpan = styled.span`
  position: absolute;
  transition: all 0.6s ease;
  background-color: white;
  padding: 20px;
  border-radius: 40px;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform: ${({ isOpen, index }) =>
    isOpen ? `rotate(calc(${index + 1} * (360deg / 8))) translateY(120px)` : 'rotate(0deg)'};
`;

export const StyledLink = styled.a`
  text-decoration: none;
  transform: rotate(45deg);
`;

export const Icon = styled.i`
  font-size: 24px;
  color: #000000;
  opacity: 0.8;
  transition: 0.2s;
`;
