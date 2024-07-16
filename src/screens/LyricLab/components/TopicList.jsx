import React, { useRef, useEffect, useState } from "react";
import * as S from "../Styled-LyricLab";

const locations = ["QUESTIONS", "WHOSE?", "STATE VERBS", "HAVE/HAVE GOT", "PS - PC"];

const TopicList = ({ highlightQuestions, highlightWhose, highlightStateVerbs }) => {
  const listRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const list = listRef.current;

    const handleScroll = () => {
      if (list.scrollTop <= 0) {
        list.scrollTop = list.scrollHeight / 2;
      } else if (list.scrollTop >= list.scrollHeight - list.clientHeight) {
        list.scrollTop = list.scrollHeight / 2;
      }
      setScrollTop(list.scrollTop);
    };

    list.addEventListener('scroll', handleScroll);
    list.scrollTop = list.scrollHeight / 2;

    return () => {
      list.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const repeatedLocations = [...locations, ...locations, ...locations, ...locations, ...locations];

  return (
    <S.TopicListContainer>
      <S.Container 
        ref={listRef} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
        isVisible={isVisible}
      >
        <S.Line />
        <S.ListM>
          {repeatedLocations.map((location, index) => (
            <S.ListItem key={index}>
              <S.Dot />
              <S.Button onClick={() => {
                if (index % locations.length === 0) highlightQuestions();
                else if (index % locations.length === 1) highlightWhose();
                else if (index % locations.length === 2) highlightStateVerbs();
              }}>{location}</S.Button>
            </S.ListItem>
          ))}
        </S.ListM>
      </S.Container>
    </S.TopicListContainer>
  );
};

export default TopicList;
