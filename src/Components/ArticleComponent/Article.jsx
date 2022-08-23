import React from "react";
import {
  ArticleContainer,
  ArticleWrapper,
  TextWrapper,
  Heading,
  Author,
  Date,
  Img,
  ImgWrap,
  ArticleContent,
} from "./Article.elements";

const Article = ({heading,author,date,imgSrc,desc}) => {
  return (
    <>
      <ArticleContainer>
        <ArticleWrapper>
          <TextWrapper>
            <Heading>{heading}</Heading>
            <Author>{author}</Author>
            <Date>{date}</Date>
            <ImgWrap>
              <Img src={imgSrc} />
            </ImgWrap>
            <ArticleContent>{desc}</ArticleContent>
          </TextWrapper>
        </ArticleWrapper>
      </ArticleContainer>
    </>
  );
};

export default Article;
