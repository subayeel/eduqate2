import React from "react";
import { TopLine,Heading,BottomLine } from "./Hero.elements";

const HeroMessage = ({topLine,message,source}) => {
  return (
    <>
      <TopLine>{topLine}</TopLine>
      <Heading>{message}</Heading>
      <BottomLine>{source}</BottomLine>
    </>
  );
};

export default HeroMessage;
