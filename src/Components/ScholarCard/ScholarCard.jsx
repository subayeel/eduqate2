import React from "react";

import {} from "../styles/Containers.styled";
import {
  TextStyle,
  FlexContainer,
  FlexItem,
  StyledContainer,
  ImageContainer
} from "../Global";
import { YoutubeIcon, WebIcon } from "./ScholarCard.elements";

function ScholarCard(props) {
  return (
    <div>
      <FlexContainer justify="center" align="center" direction="column">
        <FlexItem flex="40%">
          <ImageContainer width="350px">
            <img src={process.env.PUBLIC_URL + "images/scholar1.png"} />
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
            height="140px"
            width="250px"
            radius="0 0 10px 10px"
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
                  {props.ytlink}
                </TextStyle>
              </FlexItem>
            </FlexContainer>
            <FlexContainer direction="row">
              <FlexItem flex="15%">
                <WebIcon />
              </FlexItem>
              <FlexItem flex="85%">
                <TextStyle size="0.8em" color="#555555">
                  {props.website}
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
