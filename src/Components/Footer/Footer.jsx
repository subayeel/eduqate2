import React, { useState } from "react";
import {
  FooterInstagramIcon,
  FooterFacebookIcon,
  FooterYoutubeIcon,
  FooterContainer,
  FooterWrapper,
  FooterTwitterIcon,
  Column,
  FooterLikeIcon,
  Row,
  LinkText,
  TextWrap,
  Subtitle,
  EmptyContainer,
} from "../Footer/Footer.elements";

import { Button } from "../ButtonElement";

function Footer() {
  const [likeState, setLike] = useState(false);
  return (
    <FooterContainer>
      <FooterWrapper>
        <Row justify="space-between">
          <Column>
            <Button dark bgColor="#eeeeee" margin="2px" to="">
              Topics
            </Button>
            <Button dark bgColor="#eeeeee" margin="2px" to="">
              Resources
            </Button>
            <Button dark bgColor="#eeeeee" margin="2px" to="">
              Misconception
            </Button>
          </Column>

          <Column>
            <TextWrap>
              <LinkText to="">FORUM</LinkText>

              <LinkText to="">&nbsp;|&nbsp;</LinkText>

              <LinkText to="">ABOUT</LinkText>
            </TextWrap>
          </Column>
        </Row>

        <Row justify="end">
          <div>
            <FooterFacebookIcon />
            <FooterInstagramIcon />
            <FooterTwitterIcon />
            <FooterYoutubeIcon />
          </div>
        </Row>
        <TextWrap>
          <Subtitle>
            MyEduQate is optimized for learning and training. Examples might be
            simplified to improve reading and basic understanding. References,
            and examples are constantly reviewed to avoid errors. While using
            this site, you agree to have read and accepted our terms of use,
            cookie and privacy policy.
            <br />
            Copyright 1999-2022
            <br />
            All Rights Reserved.
          </Subtitle>
        </TextWrap>
        <Row justify="center">
          <FooterLikeIcon
            onClick={() => setLike(!likeState)}
            color={likeState ? "" : "#7FFC1A"}
          />
        </Row>
        <Row justify="center">
          <EmptyContainer>&nbsp;</EmptyContainer>
        </Row>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
