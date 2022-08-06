import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../Global";
import { FaSearch, FaBars } from "react-icons/fa";

export const Nav = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 20 px 10px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  @media (max-width:900px){
    justify-content: space-between;
  }
`;
export const NavbarContainer = styled(Container)`
  display: flex;
  height: 100%;
  ${Container}
`;

export const BarsIcon = styled(FaBars)`
  color: #3c7c90;
  width: 30px;
  height: 30px;
  margin-left: 20px;
  ${FaBars}
`;

export const NavLogo = styled(Link)`
  flex: 20%;
  align-items: center;
  display: flex;
  overflow: hidden;
  img {
    height: 120px;
    overflow: hidden;
  }
  @media (max-width: 900px) {
    flex: none;
    img {
      height: 60px;
    }
  }
`;

export const NavIcon = styled.div`
  @media (min-width: 900px) {
    
    display: none;
  }
`;
export const NavAvatar = styled.div`
  height: ${(props) => props.radius};
  width: ${(props) => props.radius};
  background-color: #835a3a;
  border: 2px solid #3c7c90;
  border-radius: 100%;
  img {
    height: ${(props) => props.radius};
    width: ${(props) => props.radius};
    border-radius: 100%;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavItems = styled.ul`
  display: inline;

  align-items: center;
  list-style: none;
  justify-self: end;
  margin-right: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #3c7c90;

  @media (max-width: 900px) {
    display: none;
  }
`;
export const Item = styled.li`
  border-radius: 3px;
  background: ${(props) => (props.bgcolor ? "#835A3A" : "")};
  color: ${(props) => (props.bgcolor ? "white" : "#3C7C90")};
  display: inline;
  padding: 5px 10px 5px 10px;

  margin: 0 5px 0 5px 10px;

  &:hover {
    color: ${(props) => (props.bgcolor ? "" : "#7eb0bf")};
    background: ${(props) => (props.bgcolor ? "#8a6a51" : "")};
    cursor: pointer;
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: ${(props)=>props.color};
  margin:${(props)=>props.margin};
  height: 20px;
  width: 20px;
  justify-self: center;
  align-items: center;
  ${FaSearch}
`;
