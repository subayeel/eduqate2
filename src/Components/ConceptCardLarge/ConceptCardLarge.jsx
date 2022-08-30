import React from "react";
import {
  ConceptCardContainer,
  ConceptCardWrapper,
  ConceptRow1,
  Column1,
  Column2,
  TextWrapper,
  Headline,
  ImgWrap,
  Img,
  Author,
  Date,
  Subtitle,
  Heading,
} from "./ConceptCardLarge.elements";

const ConceptCardLarge = ({ imgSrc, heading, author, date, desc }) => { 
  return (
    <>
      <ConceptCardContainer>
        <ConceptCardWrapper>
          <ImgWrap>
            <Img src={imgSrc} />
          </ImgWrap>

          <TextWrapper>
            <Heading>{heading}</Heading>

            <Author>{author}</Author>
            <Date>{date}</Date>

            <Subtitle>{desc}</Subtitle>
          </TextWrapper>
        </ConceptCardWrapper>
      </ConceptCardContainer>
    </>
  );
};

export default ConceptCardLarge;
