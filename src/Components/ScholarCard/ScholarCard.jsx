import React from "react";
import {
  TextStyle,
  FlexContainer,
  FlexItem,
  StyledContainer,
  ImageContainer,
} from "../Global";
import { YoutubeIcon, WebIcon } from "./ScholarCard.elements";

function ScholarCard(props) {
  return (
    <div>
      <FlexContainer
        margin="0 0 10px 0"
        justify="center"
        align="center"
        direction="column"
      >
        <FlexItem flex="40%">
          <ImageContainer width="360px">
            <img src="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/tariq_hameel_moulana-removebg-preview.png?alt=media&token=737ec21c-3be6-4ed8-a0af-c3537d90405c" />
          </ImageContainer>
        </FlexItem>
        <FlexItem flex="10%">
          <StyledContainer
            shadow
            radius="5px"
            padding="10px 10px 10px 10px"
            width="280px"
            color="white"
            bgcolor="#835A3A"
          >
            <TextStyle
              margin="0"
              color="white"
              align="center"
              weight="700"
              size="1.2em"
            >
              {props.name}
            </TextStyle>
          </StyledContainer>
        </FlexItem>
        <FlexItem flex="50%">
          <StyledContainer
            shadow
            padding="10px"
            bgcolor="#ECEFFF"
            width="250px"
          >
            <TextStyle size="0.8em" color="#555555">
              {props.desc}
            </TextStyle>

            <FlexContainer
              margin="20px 0 0 0"
              justify="center"
              align="center"
              direction="row"
            >
              <FlexItem flex="15%">
                <YoutubeIcon />
              </FlexItem>
              <FlexItem flex="85%">
                <TextStyle size="0.8em" color="#555555">
                  {props.ytLink}
                </TextStyle>
              </FlexItem>
            </FlexContainer>
            <FlexContainer direction="row">
              <FlexItem flex="15%">
                <WebIcon />
              </FlexItem>
              <FlexItem flex="85%">
                <TextStyle size="0.8em" color="#555555">
                  {props.wLink}
                </TextStyle>
              </FlexItem>
            </FlexContainer>
          </StyledContainer>
        </FlexItem>
      </FlexContainer>
    </div>
  );
}

export default ScholarCard;
