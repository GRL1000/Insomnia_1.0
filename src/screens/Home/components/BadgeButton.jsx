import React from "react";

import * as S from "../Styled-Home";
import Button from "../../../inputs/Button";

const BadgeButton = ({ children, badge, isActive, onClick }) => (
  <S.BadgeButtonWrapper>
    {badge && <S.Badge>{badge}</S.Badge>}
    <Button
      variant="text"
      size="xs"
      color={isActive ? "primary" : "white"}
      onClick={onClick}
    >
      {children}
    </Button>
  </S.BadgeButtonWrapper>
);

export default BadgeButton;
