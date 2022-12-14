import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
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
  Row,
  Column1,
  Column2,
  TextBoxContainer,
  TextBoxWrapper,
  ToggleButtonsContainer,
  ToggleButtonsWrapper,
  Toggle1,
  Toggle2,
  Toggle3,
  ClipBoardWrapper,
  ClipboardIcon,
  SocialIconsContainer,
  SocialIconWrapper,
  InstagramIcon,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
} from "./Article.elements";

import ConceptCardSmall from "../ConceptCardSmall/ConceptCardSmall";

const Article = () => {
  const [isPagan, setPagan] = useState(false);
  const [isChristian, setChristian] = useState(false);
  const [isAthiest, setAthiest] = useState(true);

  const { category, id } = useParams();
  const [articleInfo, setArticleInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, category, id);
      const docSnap = await getDoc(docRef);

      const data = docSnap.exists() ? docSnap.data() : null;

      if (data === null || data === undefined) return null;
      setArticleInfo(data);
    };
    getData();
  }, []);

  const [cardInfo, setCardInfo] = useState([]);
  const collectionRef = collection(db, category);
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collectionRef);

      setCardInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  return (
    <>
      <ArticleContainer>
        <ArticleWrapper>
          <Row>
            <Column1>
              <TextWrapper>
                <Heading>{articleInfo.heading}</Heading>
                <Author>{articleInfo.author}</Author>
                <Date>{articleInfo.date}</Date>
                <SocialIconsContainer>
                  <SocialIconWrapper>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <WhatsappIcon />
                  </SocialIconWrapper>
                </SocialIconsContainer>
                <ImgWrap>
                  <Img src={articleInfo.imgSrc} />
                </ImgWrap>
              </TextWrapper>
              <TextBoxContainer>
                <TextBoxWrapper>
                  <ToggleButtonsContainer>
                    <ClipBoardWrapper>
                      <ClipboardIcon></ClipboardIcon>
                    </ClipBoardWrapper>
                    <ToggleButtonsWrapper>
                      <Toggle1
                        isAthiest={isAthiest}
                        onClick={function () {
                          setAthiest(true);
                          setChristian(false);
                          setPagan(false);
                        }}
                      >
                        Atheist
                      </Toggle1>
                      <Toggle2
                        isChristian={isChristian}
                        onClick={function () {
                          setChristian(true);
                          setAthiest(false);
                          setPagan(false);
                        }}
                      >
                        Christian
                      </Toggle2>
                      <Toggle3
                        isPagan={isPagan}
                        onClick={function () {
                          setPagan(true);
                          setAthiest(false);
                          setChristian(false);
                        }}
                      >
                        Pagan
                      </Toggle3>
                    </ToggleButtonsWrapper>
                  </ToggleButtonsContainer>
                  <TextWrapper>
                    <ArticleContent>
                      {isAthiest ? articleInfo.descA : ""}
                    </ArticleContent>
                    <ArticleContent>
                      {isChristian ? articleInfo.descC : ""}
                    </ArticleContent>
                    <ArticleContent>
                      {isPagan ? articleInfo.descP : ""}
                    </ArticleContent>
                  </TextWrapper>
                </TextBoxWrapper>
              </TextBoxContainer>
            </Column1>
            <Column2>
              {cardInfo.slice(0, 4).map((inf) => {
                return <ConceptCardSmall {...inf} />;
              })}
            </Column2>
          </Row>
        </ArticleWrapper>
      </ArticleContainer>
    </>
  );
};

export default Article;
