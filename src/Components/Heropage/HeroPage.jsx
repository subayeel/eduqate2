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


function HeroPage() {
  return (
    
      <FlexContainer>
        <FlexItem flex="35%">
          <FlexContainer direction="column" align="center">
            <ImageContainer width="60%">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/heroImage.png?alt=media&token=a5889f26-0c42-464d-bd32-801883472af9"
                alt=""
              />
            </ImageContainer>

            <SearchBar />
          </FlexContainer>
          <FlexContainer direction="column" align="flex-start">
            <TextStyle
              margin="10px 0 10px 60px"
              
              size="1.4em"
              weight="600"
            >
              Why <Color color="#835A3A">Islam?</Color>
            </TextStyle>
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
          {/* <FlexContainer
            position="absolute"
            align="center"
            direction="row"
            bottom="10px"
            left="25%"
          >
            <Button>Learn More</Button>
          </FlexContainer> */}
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
          {/* <FlexContainer
            position="absolute"
            align="center"
            direction="row"
            bottom="10px"
            right="0"
          >
            <Button primary margin="0 10px 0 0">Learn Quran</Button>
            <Button margin="0 60px 0 0">Learn Hadeeth</Button>
          </FlexContainer> */}
        </FlexItem>
      </FlexContainer>
    
  );
}

export default HeroPage;
