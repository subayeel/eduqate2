import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: ${props =>props.direction};
  align-items: ${props=>props.align};
  justify-content: ${props=>props.justify};
`;

export const HeroDesc = styled.p`
  margin: 0 60px 0 60px;
`;

export const Heading1 = styled.h1`
  margin-left: 60px;
  font-size: 1.5em;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Heading3 = styled.div`

  
  font-size: 1.2em;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`

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
