import React from "react";
import {
  Author,
  Column1,
  Column2,
  ConceptCardContainer,
  ConceptCardWrapper,
  ConceptRow1,
  Heading,
  Img,
  ImgWrap,
  TextWrapper,
} from "./ConceptCardSmall.elements";

const ConceptCardSmall = ({ heading, author, imgSrc }) => {
  return (
    <>
      <ConceptCardContainer>
        <ConceptCardWrapper>
          <ConceptRow1>
            <Column1>
              <ImgWrap>
                <Img src={imgSrc} />
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <Heading>{heading}</Heading>
                <Author>{author}</Author>
              </TextWrapper>
            </Column2>
          </ConceptRow1>
        </ConceptCardWrapper>
      </ConceptCardContainer>
    </>
  );
};

export default ConceptCardSmall;
