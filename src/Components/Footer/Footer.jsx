import React, { useState } from "react";
import {
  FooterInstagramIcon,
  FooterFacebookIcon,
  FooterYoutubeIcon,
  StyledFooter,
  FooterTwitterIcon,
  FooterButton,
  FooterLikeIcon,
} from "../Footer/Footer.elements";

import {
  FlexContainer,
  FlexItem,
  StyledAnchor,
  StyledContainer,
  TextStyle,
} from "../Global";

function Footer() {
  const [likeState, setLike] = useState(false);
  return (
    <StyledFooter>
      <FlexContainer mobileColumn>
        <FlexItem flex="1">
          <FlexContainer mobileColumn>
            <FooterButton>Topics</FooterButton>
            <FooterButton>Resources</FooterButton>
            <FooterButton>Misconception</FooterButton>
          </FlexContainer>
        </FlexItem>

        <FlexItem>
          <StyledAnchor href="">
            <TextStyle margin="0 5px 0 5px" size="0.8em" color="white">
              FORUM
            </TextStyle>
          </StyledAnchor>
          <TextStyle margin="0 5px 0 5px" size="0.8em" color="white">
            &nbsp;|&nbsp;
          </TextStyle>
          <StyledAnchor href="">
            <TextStyle margin="0 0 0 5px" size="0.8em" color="white">
              ABOUT
            </TextStyle>
          </StyledAnchor>
        </FlexItem>
      </FlexContainer>

      <FlexContainer margin="20px 0 0 0" justify="end">
        <FooterFacebookIcon />
        <FooterInstagramIcon />
        <FooterTwitterIcon />
        <FooterYoutubeIcon />
      </FlexContainer>
      <FlexContainer>
        <TextStyle
          margin="0 20% 0 20%"
          size="0.8em"
          color="white"
          align="center"
        >
          MyEduQate is optimized for learning and training. Examples might be
          simplified to improve reading and basic understanding. References, and
          examples are constantly reviewed to avoid errors. While using this
          site, you agree to have read and accepted our terms of use, cookie and
          privacy policy.
          <br />
          Copyright 1999-2022
          <br />
          All Rights Reserved.
        </TextStyle>
      </FlexContainer>
      <FlexContainer justify="center">
        <FooterLikeIcon
          onClick={() => setLike(!likeState)}
          color={likeState ? "" : "#7FFC1A"}
        />
      </FlexContainer>
      <FlexContainer align="center" justify="center">
<StyledContainer bgcolor="white" height="36px" width="80%" radius="30px">&nbsp;</StyledContainer>
      </FlexContainer>
    </StyledFooter>
  );
}

export default Footer;
