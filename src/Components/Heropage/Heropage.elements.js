import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: ${props =>props.direction};
  align-items: ${props=>props.align};
  justify-content: ${props=>props.justify};
`;



export const Input = styled.input.attrs({
    type: "text",
    placeholder: "Search Topics,Categories,Queries",
  })`
    cursor: pointer;
    
    color: #707070;
    width: 360px;
    border-radius: 5px;
    height: 50px;
    border: 1px #3F9DA7 solid;
    box-shadow: 5px;
    padding: 0 10px 0 10px;
    transition: 0.15s;
    
    display: block;
  `;
