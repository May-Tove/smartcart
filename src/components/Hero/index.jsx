import React from "react";
import * as S from "./index.styles.js";

/**
 * A component that displays a hero section with a title and slogan.
 */
const Hero = () => {
  return (
    <S.HeroImg>
      <S.HeroHeading>SmartCart</S.HeroHeading>
      <S.HeroSlogan>Your smartest choice for online shopping</S.HeroSlogan>
    </S.HeroImg>
  );
};

export default Hero;
