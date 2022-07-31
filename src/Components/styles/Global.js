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

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;

  @media screen and (max-width: 991px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;
export const Color = styled.span`
  color: ${(props) => props.color};
`;
export default GlobalStyle;

export const Button = styled.button`

  color: ${(props) => props.primary?"white":"#3C7C90"};
  background-color: ${(props) => props.primary ?"#3C7C90":"white"};
  padding: 7px;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: 5px 10px "#00000";
  margin: ${(props)=>props.margin ? props.margin :"5px 10px 5px 10px"};
  border: ${(props)=>props.primary ?"2px solid #3C7C90":"2px solid #3C7C90"};

  &:hover{
    cursor: pointer;
    color: ${(props) => props.primary?"#3C7C90":"white"};
  background-color: ${(props) => props.primary ?"white":"#3C7C90"};
  }
`;
