import React from "react";
import SearchBar from "./SearchBar";
import {
  Button,
  Color,
  Section,
  TextStyle,
  FlexContainer,
  FlexItem,
  ImageContainer,
} from "../Global";

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
          <FlexContainer direction="column" align="flex-start">
            <Heading1>
              Why <Color color="#835A3A">Islam?</Color>
            </Heading1>
            <TextStyle
              size="1.0em"
              weight="400"
              margin="0 60px 10px 60px"
              align="start"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              repellendus non architecto aspernatur odit sed necessitatibus
              autem, quos suscipit maiores.
            </TextStyle>
          </FlexContainer>
          <FlexContainer
            position="absolute"
            align="center"
            direction="row"
            bottom="10px"
            left="100px"
          >
            <Button margin="5px 60px 5px 10px">Learn More</Button>
          </FlexContainer>
        </FlexItem>
        <FlexItem flex="65%">
          <TextStyle
            size="1.2em"
            weight="400"
            margin="10px 60px 10px 60px"
            align="start"
          >
            Verse of the day
          </TextStyle>
          <TextStyle
            size="1.4em"
            weight="600"
            margin="10px 60px 10px 60px"
            align="start"
          >
            "He knows what is within the heavens and earth and knows what you
            conceal and what you declare. And Allah (SWT) is Knowing of that
            within the breasts."
          </TextStyle>

          <TextStyle
            size="0.8em"
            weight="400"
            margin="10px 60px 10px 60px"
            align="end"
          >
            At-Taghabun 64:4
          </TextStyle>
          <TextStyle
            size="1.2em"
            weight="400"
            margin="10px 60px 10px 60px"
            align="start"
          >
            Hadeeth of the Day
          </TextStyle>
          <TextStyle
            size="1.4em"
            weight="600"
            margin="10px 60px 10px 60px"
            align="start"
          >
            “Whoever is kind, God will be kind to him; therefore be kind to man
            on earth. He Who is in heaven will then show mercy to you”
          </TextStyle>

          <Button primary>Learn Quran</Button>
          <Button margin="5px 60px 10px 5px">Learn Hadeeth</Button>
        </FlexItem>
      </FlexContainer>
    </Section>
  );
}

export default HeroPage;
