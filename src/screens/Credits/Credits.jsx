import * as S from "./Styled-Credits";

function Credits({ onHomeClick }) {
  
    return(
      <S.CreditsContainer>
      <S.CreditsText>
        <h1>Créditos</h1>
        <p>Desarrollado por: Gael Rodríguez</p>
        <p>Tecnologías Utilizadas: React, Styled Components, Spotify API, etc.</p>
        <p>Agradecimientos: Agradecimientos a personas o recursos.</p>
      </S.CreditsText>
      <S.HomeButton onClick={onHomeClick}>Regresar al Home</S.HomeButton>
    </S.CreditsContainer>
    );
}

export default Credits;
