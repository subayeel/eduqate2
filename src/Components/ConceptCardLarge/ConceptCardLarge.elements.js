import styled from "styled-components";

export const ConceptCardContainer = styled.div`
  display: inline;
  color: #fff;
`;

export const ConceptCardWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-height:800px ;
  max-width: 1100px;
  margin-right: auto;
  margin-left: 0;
  
  justify-content: center;

  &:hover{
    cursor: pointer;
  }
`;

export const ConceptRow1 = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr 1fr;

  align-items: start;
  grid-template-areas: 'col1 col2 col3';
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;


export const Column1 = styled.div`
  
  grid-area: 1/1/2/2;
  justify-content: start;
  align-items: flex-start;
`;
export const Column2 = styled.div`
  
  padding: 0 15px;
  grid-area: 1/2/2/4;
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
export const Heading = styled.h1`
  margin: 0;
  font-size: 24px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "white" : "#1C1A1D")};
  &:hover{
    color: #3C7C90;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  
  margin:  10px 0 10px 0;
  font-size: 16px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "black" : "grey")};
`;
export const Author = styled.p`
  display: inline;
  font-size: 12px;
  margin-right: 8px;
  line-height: 14px;
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
    
  height: 100%;
  
`;

export const Img = styled.img`
  
  width: 100%;
  @media screen and (max-width: 768px) {
    max-height: 300px;
  }
`;
