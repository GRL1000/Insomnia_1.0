import React, { useEffect, useState } from 'react';
import * as S from '../Styled-Credits';

const LightningEffect = ({ duration }) => {
  const [lightnings, setLightnings] = useState([]);

  useEffect(() => {
    const lightningCount = 25;
    const newLightnings = Array.from({ length: lightningCount }).map((_, index) => ({
      id: index,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 2 + 0.5,
    }));
    setLightnings(newLightnings);
  }, []);

  return (
    <>
      {lightnings.map(lightning => (
        <S.Lightning
          key={lightning.id}
          top={lightning.top}
          left={lightning.left}
          duration={lightning.duration}
        />
      ))}
    </>
  );
};

export default LightningEffect;
