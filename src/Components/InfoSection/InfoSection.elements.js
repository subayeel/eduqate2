import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#EEEEEE" : "#1C1A1D")};

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 660px;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    (imgStart ? `'col1 col2'` : `'col2 col1'`)};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  width: 100%;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #41C500;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "white" : "#1C1A1D")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "black" : "grey")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-self: flex-start;
  
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  display: flex;
  justify-content: ${({imgStart})=>(imgStart===true ? 'right':'left')};
`;

export const Img = styled.img`
  height: 100%;
  
  @media screen and (max-width:768px){
    max-height: 300px;
  }
`;
