import React, { useState } from "react";
import { useEffect } from "react";
import Drawer from "../Drawer/Drawer";
import {
  Heading,
  BrowseHeroContainer,
  BrowseHeroWrapper,
  Row,
  Column,
  Column2,
  Desc,
  TextWrap,
  ImgWrap,
  Img,
  Heading2,
} from "./BrowseSection.elements";

const BrowseHero = ({ heading, img, desc }) => {
  const [dropDownState, setDropDownState] = useState(false);
  const [dropDownState2, setDropDownState2] = useState(false);
  const [dropDownState3, setDropDownState3] = useState(false);

useEffect((effect)=>{
  console.log('statechanged')
  
},[dropDownState,dropDownState2,dropDownState3])
  return (
    <>
      <BrowseHeroContainer>
        <BrowseHeroWrapper>
          <Row>
            <Column>
              <TextWrap>
                <Heading align="left">{heading}</Heading>
                <Desc>{desc}</Desc>
                <Heading2 align="left">FAQ</Heading2>{" "}
                <Drawer
                  id="0"
                  state={dropDownState}
                  setState={setDropDownState}
                />
                <Drawer
                  id="1"
                  state={dropDownState2}
                  setState={setDropDownState2}
                />
                <Drawer
                  id="2"
                  state={dropDownState3}
                  setState={setDropDownState3}
                />
              </TextWrap>
            </Column>
            <Column2>
              <ImgWrap>
                <Img src={img} />
              </ImgWrap>
            </Column2>
          </Row>
        </BrowseHeroWrapper>
      </BrowseHeroContainer>
    </>
  );
};

export default BrowseHero;
