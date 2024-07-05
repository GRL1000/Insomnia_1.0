import React from "react";

const Title = ({ children }) =>
  children.length > 23 ? (
    <Marquee>{children}</Marquee>
  ) : (
    <TitleStatic>{children}</TitleStatic>
  );

export default Title;
