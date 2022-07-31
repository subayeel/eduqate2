import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../styles/Global";
import {FaSearch} from "react-icons/fa"

export const Nav = styled.div`
background: #FCFFDF;
height: 80px;
width: 100vw;
position: sticky;
display: flex;
justify-content: center;
top: 0;
align-items: center;
z-index: 999;

`;
export const NavbarContainer = styled(Container)`
display: flex;
height: 10vh;
${Container}
`

export const NavLogo = styled(Link)`
justify-self: flex-start;
flex:20%;
align-items: center;
display: flex;
`

export const NavIcon = styled.div`
overflow: hidden;
img{
    height:120px;
    overflow: hidden;
}

`

export const NavItems = styled.ul`

display: inline;
height:80px;
align-items: center;
list-style: none;
justify-self: end;
margin-right: 20px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
color: #3C7C90;
`
export const Item = styled.li`
border-radius:3px;
background:  ${
    props => props.bgcolor ? "#835A3A":""
  };
  color:${props=> props.bgcolor? "white":"#3C7C90"};
display: inline;
padding: 5px 10px 5px 10px;

margin: 0 5px 0 5px 10px;


&:hover{
    color:${props=> props.bgcolor? "":"#7eb0bf"};
    background:  ${
    props => props.bgcolor ? "#8a6a51":""
  };
    cursor: pointer;
}
` ;

export const SearchIcon = styled(FaSearch)`
color: grey;
height: 20px;
width:20px;
justify-self: center;
align-items: center;
${FaSearch}

`
export const Avatar = styled.div`

justify-self: end;
display: inline;
align-items: center;
height: 60px;
width: 60px;
background-color:#835A3A ;
border: 2px solid #3C7C90;
border-radius: 100%;
img{
    height:100%;
    width:100%;
    border-radius: 100%;
}
`