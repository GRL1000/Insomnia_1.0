import React from "react";
import * as S from "../Styled-Login";

const Loading = ({ message }) => (
  <S.LoadingContainer>
    <S.LoadingText>
      {message.split("").map((char, index) => (
        <span key={index}>{char === " " ? "\u00A0" : char}</span>
      ))}
    </S.LoadingText>
    <S.LoadingSpinner />
  </S.LoadingContainer>
);

export default Loading;
