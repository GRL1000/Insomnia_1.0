import * as S from "../Styled-Home";
import Units from "./Units";

function ForYou({ sidebarExpanded, bgColor }) {
  
  return (
    <S.ForYouWrapper className={sidebarExpanded ? "expanded" : ""} style={{ backgroundColor: bgColor }}>
      <S.SectionTitle>Explora todo nuestro contenido</S.SectionTitle>
      <Units />
    </S.ForYouWrapper>
  );
}

export default ForYou;
