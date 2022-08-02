import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
    background: #fff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
}
`;

export const Section = styled.div`
  height: ${(props) => props.height};
  width: 100vw;

  background: ${(props) =>
    props.gradient
      ? "linear-gradient(to right,#FCFFDF 35%,#ECEFFF 35%)"
      : props.color};
`;

export const StyledContainer = styled.div`
  display: inline-block;
  padding: ${(props) => props.padding};
  border-radius: ${(props) => (props.radius ? props.radius : "0")};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  align-items: ${(props) => props.align};
  box-shadow: ${(props) => (props.shadow ? "2px 2px 8px #888888" : "")};
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  text-align: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  position: ${(props) => props.position};
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  margin: ${(props) => props.margin};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;
export const FlexItem = styled.div`
position: ${(props)=>props.position};
  flex: ${(props) => props.flex};
`;

export const GridContainer = styled.div`
  display: grid;
  position: relative;
`;

export const GridItem = styled.div`
  grid-column-start: ${(props) => props.colstart};
  grid-column-end: ${(props) => props.colend};
  grid-row-start: ${(props) => props.rowstart};
  grid-row-end: ${(props) => props.rowend};
  background-color: ${(props) =>
    props.bgcolor ? ({ theme }) => theme.colors.primarybg : ""};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;

  @media screen and (max-width: 991px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const ImageContainer = styled.div`
  width: ${(props) => props.width};

  position: relative;

  > img {
    display: block;
    margin: auto;
    width: 100%;
  }
`;


export const Avatar = styled.div`


height: ${(props)=>props.radius};
width: ${(props)=>props.radius};
background-color:#835A3A ;
border: 2px solid #3C7C90;
border-radius: 100%;
img{
    height:${(props)=>props.radius};
    width:${(props)=>props.radius};
    border-radius: 100%;
}
`;

export const Color = styled.span`
  color: ${(props) => props.color};
`;
export default GlobalStyle;

export const Button = styled.button`
  

  color: ${(props) => (props.primary ? "white" : "#3C7C90")};
  background-color: ${(props) => (props.primary ? "#3C7C90" : "white")};
  padding: 7px;
  font-weight: 600;
  border-radius: ${(props)=>props.radius};
  width:${(props)=>props.width};
  box-shadow: 5px 10px "#00000";
  margin: ${(props) => (props.margin ? props.margin : "")};
  border: ${(props) =>
    props.primary ? "2px solid #3C7C90" : "2px solid #3C7C90"};

  &:hover {
    cursor: pointer;
    color: ${(props) => (props.primary ? "#3C7C90" : "white")};
    background-color: ${(props) => (props.primary ? "white" : "#3C7C90")};
  }
`;




export const TextStyle = styled.p`
color: ${(props) => props.color};
text-align: ${(props) => props.align};
font-size: ${(props) => props.size};
font-weight: ${(props) => props.weight};
margin: ${(props) => props.margin};
`

export const HorizontalScrollable = styled.div`
  overflow: auto;
  white-space: nowrap;
  margin: 0 0 0 20px;
  width: ${(props) => props.width};
  > div {
    display: inline-block;
    margin: 0;
  }
`;

