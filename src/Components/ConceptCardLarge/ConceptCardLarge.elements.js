import styled from "styled-components";
import {Link} from 'react-router-dom'

export const ConceptCardContainer = styled.div`
  display: inline;
  color: #fff;
`;

export const ConceptCardWrapper = styled.div`
  
  z-index: 1;
  max-height: 800px;//
  max-width: 1300px;
  margin-right: auto; 
  margin-left: auto;

  justify-content: center;

  &:hover {
    cursor: pointer;
  }
 
`;





export const TextWrapper = styled.div`
  max-width: 840px;
  padding-top: 0;
  padding-bottom: 10px;
`;

export const TopLine = styled.p`
  color: #41c500;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;
export const Heading = styled(Link)`
  margin: 0;
  display: block;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 600;
  text-decoration: none;
  color: ${({ lightText }) => (lightText ? "white" : "#1C1A1D")};
  &:hover {
    color: #3c7c90;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin: 10px 0 10px 0;
  font-size: 16px;
  line-height: 12px;
  color: ${({ darkText }) => (darkText ? "black" : "grey")};
`;
export const Author = styled.p`
  display: inline;
  font-size: 12px;

  line-height: 12px;
  color: black;
`;
export const Date = styled.p`
  margin: 8px;
  display: inline;
  font-size: 12px;
  line-height: 14px;
  color: grey;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-self: flex-start;
`;

export const ImgWrap = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  max-height: 300px;
  max-width: 600px;
  /* @media screen and (max-width: 768px) {
    max-width: 300px;
  } */
`;

export const Img = styled.img`
  
  object-fit: cover;
  min-height: 100%;
  min-width: 100%;


`;
