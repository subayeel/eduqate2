import React from "react";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroWrapper,
  HeroRow,
  Column1,
  Column2,
  Img,
  TopLine,
  Heading,
  BottomLine,
  BtnWrap,
  ImgWrap,
  SearchBar,
  SearchBarWrap,
  TextWrapper,
} from "./Hero.elements";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroWrapper>
          <HeroRow>
            <Column1>
              <ImgWrap>
                <Img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/heroImage.png?alt=media&token=a5889f26-0c42-464d-bd32-801883472af9"
                  }
                />
              </ImgWrap>
              <SearchBarWrap>
                <SearchBar />
              </SearchBarWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine>Verse of the Day</TopLine>
                <Heading>
                  "He knows what is within the heavens and earth and knows what
                  you conceal and what you declare. And Allah (SWT) is Knowing
                  of that within the breasts."
                </Heading>
                <BottomLine>At-Taghabun 64:4</BottomLine>
                <TopLine>Hadeeth of the Day</TopLine>
                <Heading>
                  “Whoever is kind, God will be kind to him; therefore be kind
                  to man on earth. He Who is in heaven will then show mercy to
                  you” [1]
                </Heading>
                <BottomLine>Ithna ‘Ashariyyah, p. 226</BottomLine>
              </TextWrapper>
              {/* <BtnWrap>
                <Button to=""></Button>
              </BtnWrap> */}
            </Column2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default Hero;
