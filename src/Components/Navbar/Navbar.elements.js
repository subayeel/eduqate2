import styled from "styled-components";

import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";


export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: #EEEEEE;
  height: 80px;
  
  
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media screen and (max-width: 900px) {
    justify-content: space-between;
    transition: 0.6s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  
  justify-content: space-between;
  padding: 0 24px;
  max-width: 1300px;
`;

export const NavLogo = styled(LinkR)`
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;
  img {
    height: 36px;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    flex: 1;
    justify-content: center;
    img {
      height: 30px;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    transform: translate(100%, 60%);
    top: 0;
    left: 0;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
display: flex;
padding: 0;
  align-items: center;
  text-align: center;
  list-style: none;
  color: #3c7c90;

  @media (max-width: 900px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  color: #3c7c90;
  text-decoration: none;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
&.active{
  border-bottom: 2px solid ;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width:768px) {
  display: none;
}

`

export const NavBtnLink = styled(LinkR)`
white-space: nowrap;
border: 2px solid #835A3A;
background: transparent;
padding: 5px 22px;
outline: none;
color: #835A3A;
font-size: 16px;
font-weight: 600;
text-decoration: none;

&:hover{
  transition:all 0.2s ease-in;
  color: #fff;
  background-color: #835A3A;
  
}
`



