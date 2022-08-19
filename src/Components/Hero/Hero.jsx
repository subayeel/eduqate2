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
  Subtitle,
} from "./Hero.elements";
import HeroMessage from "./HeroMessage";
import { dailyMsg1, dailyMsg2 } from "../../Data/heroPageData";

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
              <Heading>Why Islam?</Heading>
              <Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium veniam aperiam vero aliquam labore quaerat nostrum
                tempora at. Voluptatibus, a.
              </Subtitle>
              <BtnWrap right="0">
                <Button
                  to="home"
                  smooth="true"
                  spy="true"
                  duration={500}
                  offset={-80}
                  primary
                >
                  Learn Quran
                </Button>
              </BtnWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <HeroMessage {...dailyMsg1} />
                <HeroMessage {...dailyMsg2} />
              </TextWrapper>
              <BtnWrap right="32px">
                <Button
                  to="home"
                  smooth="true"
                  spy="true"
                  duration={500}
                  offset={-80}
                  margin
                  primary
                >
                  Learn Quran
                </Button>
                <Button
                  to="home"
                  smooth="true"
                  spy="true"
                  duration={500}
                  offset={-80}
                  margin
                  primary
                >
                  Learn Quran
                </Button>
              </BtnWrap>
            </Column2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default Hero;
