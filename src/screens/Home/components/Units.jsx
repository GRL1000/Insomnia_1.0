import * as S from "../Styled-Home";
import Unit1 from "../../../assets/images/unit-1.png";
import Unit2 from "../../../assets/images/unit-2.png";
import Unit3 from "../../../assets/images/unit-3.png";
import Unit4 from "../../../assets/images/unit-4.png";
import Unit5 from "../../../assets/images/unit-5.png";
import Unit6 from "../../../assets/images/unit-6.png";
import Unit7 from "../../../assets/images/unit-7.png";
import Unit8 from "../../../assets/images/unit-8.png";
import Unit9 from "../../../assets/images/unit-9.png";
import Unit10 from "../../../assets/images/unit-10.png";
import Unit11 from "../../../assets/images/unit-11.png";
import Unit12 from "../../../assets/images/unit-12.png";
import NewMusic from "./NewMusic";

function Units() {
  const units = [
    { name: "Getting to know you", image: Unit1 },
    { name: "Let's get together", image: Unit2 },
    { name: "Good news, bad news!", image: Unit3 },
    { name: "Food for thought", image: Unit4 },
    { name: "The future's in your hands", image: Unit5 },
    { name: "History repeats itself", image: Unit6 },
    { name: "Simply the best", image: Unit7 },
    { name: "Living dangerously", image: Unit8 },
    { name: "What a story!", image: Unit9 },
    { name: "All-time greats", image: Unit10 },
    { name: "People with a passion", image: Unit11 },
    { name: "You never know...", image: Unit12 },
  ];

  return (
    <S.UnitsWrapper>
      <S.UnitsContainer>
        {units.map((unit, index) => (
          <S.SquareContainer key={index}>
            <img src={unit.image} alt={unit.name} style={{ width: "300px", height: "110px", borderRadius: "10px" }} />
            <S.UnitName>{unit.name}</S.UnitName>
          </S.SquareContainer>
        ))}
      </S.UnitsContainer>
      <NewMusic />
    </S.UnitsWrapper>
  );
}

export default Units;
