import React from "react";
import * as S from "../Styled-Home";

const Album = ({ img }) => (
  <S.AlbumWrapper>
    <S.AlbumImage src={img} alt="album" />
  </S.AlbumWrapper>
);

export default Album;
