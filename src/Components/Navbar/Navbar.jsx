import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  Item,
  NavItems,
  
  SearchIcon,
  NavSearch,
} from "./Navbar.elements";

import {Avatar} from "../Global";

function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/eduqate_logo.png?alt=media&token=a0f06a4e-5dd6-4509-a780-4a4a691711bc"
              alt=""
            />
          </NavIcon>
        </NavLogo>
        <NavItems>
          <Item bgcolor>Home</Item>
          <Item>Topics</Item>
          <Item>Courses</Item>
          <Item>Misconception</Item>
          <Item><SearchIcon/></Item>
        </NavItems>
        
          
        

        <Avatar radius="60px">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/subayeel-pic.jpeg?alt=media&token=e0cffe5d-d3bd-4870-b1ce-dbec0026c779"
            alt=""
          />
        </Avatar>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
