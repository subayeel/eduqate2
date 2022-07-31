import React from "react";
import SearchBar from "./SearchBar";
import {
  Center,
  FlexContainer,
  FlexItem,
  ImageContainer,
  StyledContainer,
} from "../styles/Containers.styled";
import { SearchIcon } from "../Navbar/Navbar.elements";

import { Button, Color, Section } from "../styles/Global";

import {
  Heading1,
  Heading3,
  HeroDesc,
  HeroContainer,
} from "./Heropage.elements";

function HeroPage() {
  return (
    <Section height="88vh" gradient>
      <FlexContainer>
        <FlexItem flex="35%">
          <HeroContainer direction="column" align="center">
            <ImageContainer width="80%">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/heroImage.png?alt=media&token=a5889f26-0c42-464d-bd32-801883472af9"
                alt=""
              />
            </ImageContainer>

            <SearchBar />
          </HeroContainer>
          <HeroContainer direction="column" align="flex-start">
            <Heading1>
              Why <Color color="#835A3A">Islam?</Color>
            </Heading1>
            <HeroDesc>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              repellendus non architecto aspernatur odit sed necessitatibus
              autem, quos suscipit maiores.
            </HeroDesc>
          </HeroContainer>
          <HeroContainer direction="column" align="flex-end">
            <Button margin="5px 60px 5px 10px" >
              Learn More
            </Button>
          </HeroContainer>
        </FlexItem>
        <FlexItem flex="65%">
          <StyledContainer>
            <Heading1>Verse of the day</Heading1>
            <HeroDesc>
              "He knows what is within the heavens and earth and knows what you
              conceal and what you declare. And Allah (SWT) is Knowing of that
              within the breasts."
            </HeroDesc>
            <Heading3>At-Taghabun 64:4</Heading3>
            <Heading1>Hadeeth of the Day</Heading1>
            <HeroDesc>
              “Whoever is kind, God will be kind to him; therefore be kind to
              man on earth. He Who is in heaven will then show mercy to you” [1]
            </HeroDesc>
            <HeroContainer justify="end" align="center" direction="row">
              <Button  primary>Learn Quran</Button>
              <Button margin="5px 60px 10px 5px" >Learn Hadeeth</Button>

            </HeroContainer>
          </StyledContainer>
        </FlexItem>
      </FlexContainer>
    </Section>
  );
}

export default HeroPage;
