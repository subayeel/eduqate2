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
            <NavLinks  to="/browsepage/c_misconception">Current Affairs</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/browsepage/q_misconception">Quran</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/browsepage/p_misconception">Prophet</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
          <NavBtnLink to="/addarticle">Add</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
