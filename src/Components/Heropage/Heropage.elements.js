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
    height: 50px;
    border: none;
    
    box-shadow: 0px 0px 10px;
    padding: 0 10px 0 10px;
    transition: 0.15s;
    
    display: block;

    @media (max-width:900px){
      width: 280px;
      height:40px;
      margin: 0 5px 0 5px;
      padding: 0 20px 0 20px;
    }
  `;
