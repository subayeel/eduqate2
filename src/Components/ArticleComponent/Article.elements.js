import styled from "styled-components";

export const ArticleContainer = styled.div`
color: #fff;
max-width: 70vw;
`;

export const ArticleWrapper = styled.div`
margin:0;
padding: 0px 15px;

`;


export const TextWrapper = styled.div`
  max-width: 800px;
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
  font-size: 42px;
  line-height: 1.1;
  font-weight: 500;
  margin-bottom: 12px;
  color: ${({ lightText }) => (lightText ? "white" : "#1C1A1D")};
  
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin:  10px 0 10px 0;
  font-size: 16px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "black" : "grey")};
`;
export const Author = styled.p`
  display: inline;
  font-size: 14px;
  margin-right: 8px;
  

  line-height: 14px;
  color: black;
`;

export const ArticleContent = styled.p`
font-size: 16px;
color: black;
line-height: 1.1;
`
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
