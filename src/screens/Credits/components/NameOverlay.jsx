import React, { useEffect, useState } from "react";
import * as S from "../Styled-Credits";
import LightningEffect from "./LightningEffect";

const NameOverlay = ({ names, videoDuration }) => {
  const [currentNames, setCurrentNames] = useState([]);

  useEffect(() => {
    let timeouts = [];

    names.forEach((group, index) => {
      const showTimeout = setTimeout(() => {
        setCurrentNames(group.names);
      }, group.start * 1000);

      const hideTimeout = setTimeout(() => {
        if (index < names.length - 1) {
          setCurrentNames([]);
        }
      }, (group.start + 3) * 1000);

      timeouts.push(showTimeout, hideTimeout);
    });

    const lastGroupTimeout = setTimeout(() => {
      setCurrentNames(names[names.length - 1].names);
    }, videoDuration * 1000);

    timeouts.push(lastGroupTimeout);

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [names, videoDuration]);

  return (
    <S.NameContainer>
      <LightningEffect duration={videoDuration} />
      {currentNames.map((name, nameIndex) => (
        <S.NameGroup key={nameIndex}>
          {name.split('').map((letter, letterIndex) => (
            <S.Name key={letterIndex} data-letter={letter} index={letterIndex}>{letter}</S.Name>
          ))}
        </S.NameGroup>
      ))}
    </S.NameContainer>
  );
};

export default NameOverlay;
