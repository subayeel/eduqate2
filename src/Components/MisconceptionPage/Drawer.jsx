import React from "react";
import { TextStyle } from "../Global";
import {
  DrawerContainer,
  StyledDrawer,
  DrawerButton,
  DrawerContent,
} from "./Misconception.elements";

function Drawer(props) {
    var state = props.state;
    var setState = props.setState;
  return (
    <DrawerContainer>
      <StyledDrawer>
        <DrawerButton first={props.first} onClick={() => setState(!state)}>
          <TextStyle weight="500" size="1.2em">What is your name?</TextStyle>
        </DrawerButton>
        <DrawerContent height={props.state ? "200px" : "0px"}>
          W Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          tenetur neque quibusdam corporis quae magni officiis unde vel modi
          debitis sit dignissimos fugiat veritatis voluptatum tempora odit
          incidunt quidem, temporibus ipsam, aut officia eum sed reiciendis.
          Totam enim earum impedit! Pariatur mollitia repudiandae fuga saepe
          ipsam quis reprehenderit consequuntur corporis!
        </DrawerContent>
      </StyledDrawer>
    </DrawerContainer>
  );
}

export default Drawer;
