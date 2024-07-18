import React, { useState, useEffect } from "react";
import * as S from "../Styled-LyricLab";
import { BiMicrophone } from "react-icons/bi";
import { FaQuestion } from "react-icons/fa";
import { FaW, FaStripeS, FaHeading } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

const recognition = new window.webkitSpeechRecognition();

const CircularMenu = ({
  onHighlightQuestions,
  onHighlightWhose,
  onHighlightStateVerbs,
  onCloseLyricLab,
  showMenu,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isBgChanged, setIsBgChanged] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (event) => {
    if (isOpen) {
      const delta = Math.sign(event.deltaY);
      setRotation((prevRotation) => prevRotation + delta * 15);
    }
  };

  const startListening = () => {
    recognition.start();
    setIsListening(true);
    setShowTranscript(true);
  };

  const stopListening = () => {
    recognition.stop();
    setIsListening(false);
  };

  useEffect(() => {
    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const currentTranscript =
        event.results[event.results.length - 1][0].transcript;
      setTranscript((prevTranscript) => prevTranscript + " " + currentTranscript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsVisible(showMenu);
  }, [showMenu]);

  const handleButtonClick = (action) => {
    setIsBgChanged(!isBgChanged);
    action();
  };

  useEffect(() => {
    if (onCloseLyricLab) {
      onCloseLyricLab(setShowTranscript);
    }
  }, [onCloseLyricLab]);

  const icons = [
    { icon: BiMicrophone, label: "microphone", action: () => (isListening ? stopListening() : startListening()) },
    { icon: FaQuestion, label: "FaQuestion", action: onHighlightQuestions },
    { icon: FaW, label: "faw6", action: onHighlightWhose },
    { icon: FaStripeS, label: "FaStripeS", action: onHighlightStateVerbs },
    { icon: FaHeading, label: "FaHeading", action: onHighlightStateVerbs },
  ];

  return (
    isVisible && (
      <S.Nav isVisible={isVisible} className={isOpen ? "open" : ""}>
        <S.NavContent className="nav-content" rotation={rotation}>
          <S.ToggleButton className="toggle-btn" isOpen={isOpen} onClick={toggleMenu}>
            {isOpen ? <GoPlus /> : <GoPlus />}
          </S.ToggleButton>
          {icons.map(({ icon: IconComponent, label, action }, index) => (
            <S.MenuSpan
              key={index}
              isOpen={isOpen}
              index={index}
              rotation={rotation}
              onClick={() => handleButtonClick(action)}
            >
              <S.StyledLink href="#">
                <S.Icon as={IconComponent} className={`icon-${label}`} />
              </S.StyledLink>
            </S.MenuSpan>
          ))}
        </S.NavContent>
        {showTranscript && (
          <S.TranscriptContainerS>
            <S.TranscriptS>{transcript}</S.TranscriptS>
          </S.TranscriptContainerS>
        )}
      </S.Nav>
    )
  );
};

export default CircularMenu;
