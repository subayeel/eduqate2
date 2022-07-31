import React from "react";
import {
  Heading1,
  Heading3,
  HeroContainer,
} from "../Heropage/Heropage.elements";
import {
  FlexContainer,
  FlexItem,
  StyledContainer,
} from "../styles/Containers.styled";
import { Container, Section } from "../styles/Global";
import { ImageContainer } from "../styles/Containers.styled";

function ScholarCard() {
  return (
    <StyledContainer height="400" width="200px">
      <HeroContainer align="center" direction="column">
        <FlexItem flex="40%">
          <ImageContainer width="300px">
            <img src={process.env.PUBLIC_URL + "images/scholar1.png"} />
          </ImageContainer>
        </FlexItem>
        <FlexItem flex="10%">
          <StyledContainer radius="5px" padding="5px 10px 5px 10px" width="300px" color="white" bgcolor="#835A3A">
            <Heading3>Islamic Scholar</Heading3>
          </StyledContainer>
        </FlexItem>
        <FlexItem flex="50%">
          <StyledContainer padding="10px" bgcolor="#ECEFFF" height="200px" width="250px">
            Lorem ipsum dolorm suscipit cumque
            dolorem! Inventore, molestias. Nesciunt optio eveniet consequuntur
            unde veritatis reiciendis laboriosam nisi deserunt deleniti.
            
          </StyledContainer>
        </FlexItem>
      </HeroContainer>
      <Section height="100vh"></Section>
    </StyledContainer>
  );
}

export default ScholarCard;
