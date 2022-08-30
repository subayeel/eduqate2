import React from "react";

import {
  Nav,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavbarContainer, 
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./Navbar.elements";

import { FaBars } from "react-icons/fa";

function Navbar({toggle}) {
  return (
    <Nav>
      <NavbarContainer>
      <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavLogo to="/"> 
          <img
            src="https://firebasestorage.googleapis.com/v0/b/eduqate-d65f5.appspot.com/o/eduqate_logo.png?alt=media&token=357e514e-bd92-45ce-ae28-23675c21b853"
            alt=""
          />
        </NavLogo>
        
        <NavMenu>
          <NavItem>
            <NavLinks to="/">
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks  to="/aritclepage">Topics</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="">Content</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="">Misconception</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
