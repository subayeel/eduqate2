import React from "react";
import { FlexContainer, FlexItem, TextStyle } from "../Global";
import {
  StyledDrawer,
  DrawerButton,
  DrawerContent,
} from "./Misconception.elements";

function Drawer(props) {
    var state = props.state;
    var setState = props.setState;
    
    
  return (
    
      <StyledDrawer>
        <DrawerButton first={props.first} onClick={() => setState(!state)}>
        
        <FlexContainer align="center">
            <FlexItem flex="90%"><TextStyle align="left" weight="500" size="1.2em">What is your name?</TextStyle></FlexItem>
            
        </FlexContainer>
          
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
    
  );
  console.log(state);
}

export default Drawer;
