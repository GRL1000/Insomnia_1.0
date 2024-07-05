import React from "react";
import Spotify from "./Spotify";
import * as S from "../Styled-Login";

function Buttons() {
  
 return(
    <div style={{ display: "flex", justifyContent: "center", paddingTop: '30px'}}>
      <S.ShowButtonS>
      <Spotify/>
      </S.ShowButtonS>
    </div>
 );
}

export default Buttons;
