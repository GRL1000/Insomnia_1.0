import React, { useState, useEffect } from "react";
import * as S from "../Styled-LyricLab";
import { BiMicrophone } from "react-icons/bi";
import { FaQuestion } from "react-icons/fa";
import { FaW, FaStripeS, FaHeading } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

const CircularMenu = ({ onHighlightQuestions, onHighlightWhose, onHighlightStateVerbs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isBgChanged, setIsBgChanged] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (event) => {
    if (isOpen) {
      const delta = Math.sign(event.deltaY);
      setRotation((prevRotation) => prevRotation + delta * 15);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isOpen]);

  const handleButtonClick = (action) => {
    setIsBgChanged(!isBgChanged);
    action();
  };

  const icons = [
    { icon: BiMicrophone, label: "microphone", action: () => {} },
    { icon: FaQuestion, label: "FaQuestion", action: onHighlightQuestions },
    { icon: FaW, label: "faw6", action: onHighlightWhose },
    { icon: FaStripeS, label: "FaStripeS", action: onHighlightStateVerbs },
    { icon: FaHeading, label: "FaHeading", action: onHighlightStateVerbs }
  ];

  return (
    <S.Nav className={isOpen ? "open" : ""} isBgChanged={isBgChanged}>
      <S.NavContent className="nav-content" rotation={rotation}>
        <S.ToggleButton
          className="toggle-btn"
          isOpen={isOpen}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <GoPlus />
          ) : (
            <GoPlus />
          )}
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
    </S.Nav>
  );
};

export default CircularMenu;
