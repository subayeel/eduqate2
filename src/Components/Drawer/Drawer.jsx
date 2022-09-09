import React from "react";

import {
  StyledDrawer,
  DrawerButton,
  DrawerContent,
  TextWrap,
  DrawerQuestion,
} from "./Drawer.elements";

function Drawer(props) {
  var id = parseInt(props.id)
  var state = props.state;
  var setState = props.setState;
  
  return (
    <StyledDrawer>
      <DrawerButton radius={props.state ? "7px 7px 0 0" : "7px"} onClick={() => setState(!state)}>
        <DrawerQuestion >
          What is your name?
        </DrawerQuestion>
      </DrawerButton>
      <DrawerContent height={props.state ? "200px" : "0px"}>
        <TextWrap>
          W Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          tenetur neque quibusdam corporis quae magni officiis unde vel modi
          debitis sit dignissimos fugiat veritatis voluptatum tempora odit
          incidunt quidem, temporibus ipsam, aut officia eum sed reiciendis.
          Totam enim earum impedit! Pariatur mollitia repudiandae fuga saepe
          ipsam quis reprehenderit consequuntur corporis!
        </TextWrap>
      </DrawerContent>
    </StyledDrawer>
  );
}

export default Drawer;
