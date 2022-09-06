import React from "react";
import {
  BrowseCardContainer,
  BrowseCardWrapper,
  ImgWrap,
  Img,TextWrap, Subtitle, Date,Heading
} from "./BrowseCard.elements";

const BrowseCard = ({ imgSrc,link,heading,date,desc,author }) => {
  return (
    <>
      <BrowseCardContainer>
        <BrowseCardWrapper>
          <ImgWrap>
            <Img src={imgSrc}></Img>
          </ImgWrap>
          <TextWrap>
            <Heading to={link}>{heading}</Heading>
            <Date>{date}</Date>
            <Subtitle>
              {desc}
            </Subtitle>
            <a href="#">Learn More</a>
          </TextWrap>
        </BrowseCardWrapper>
      </BrowseCardContainer>
    </>
  );
};

export default BrowseCard;
