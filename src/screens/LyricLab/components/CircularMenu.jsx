import React, { useState, useEffect } from "react";
import * as S from "../Styled-LyricLab";
import { BiMicrophone } from "react-icons/bi";
import { FaQuestion } from "react-icons/fa";
import { FaW, FaStripeS, FaHeading } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

const CircularMenu = ({ isVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);

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

  const icons = [
    { icon: BiMicrophone, label: "microphone" },
    { icon: FaQuestion, label: "FaQuestion" },
    { icon: FaW, label: "faw6" },
    { icon: FaStripeS, label: "FaStripeS" },
    { icon: FaHeading, label: "FaHeading"}
  ];

  return (
    <S.Nav className={isOpen ? "open" : ""} isVisible={isVisible}>
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
        {icons.map(({ icon: IconComponent, label }, index) => (
          <S.MenuSpan key={index} isOpen={isOpen} index={index} rotation={rotation}>
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
