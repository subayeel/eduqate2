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
} from "./ConcepCard.elements";

const ConceptCard = ({ imgSrc,link, heading, author, date, desc }) => {
  return (
    <>
      <ConceptCardContainer>
        <ConceptCardWrapper>
          <ConceptRow1>
            <ImgWrap>
              <Img src={imgSrc} />
            </ImgWrap>

            <Column2>
              <TextWrapper> 
                <Heading to={link}>{heading}</Heading>
                <Author>{author}</Author>
                <Date>{date}</Date>
                <Subtitle>{desc}</Subtitle>
              </TextWrapper>
            </Column2>
          </ConceptRow1>
        </ConceptCardWrapper>
      </ConceptCardContainer>
    </>
  );
};

export default ConceptCard;
