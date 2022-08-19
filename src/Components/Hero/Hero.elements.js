import styled from "styled-components";

export const HeroContainer = styled.div`
  color: #fff;
  

  @media screen and (max-width: 768px) {
   
  }
`;

export const HeroWrapper = styled.div`
  display: grid;
  position: relative;
  height: 580px;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeroRow = styled.div`
  display: grid;
  grid-auto-columns: 35% 65%;

  align-items: center;
  grid-template-areas: "col1 col2";
  @media screen and (max-width: 768px) {
    grid-auto-columns: 100%;
   
  }
`;

export const Column1 = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  grid-area: col1;
`;
export const Column2 = styled.div`
  position: relative;
  height: 100%;
  grid-area: col2;
  @media screen and (max-width: 768px) {
    display: none;
   
  }
`;

export const SearchBarWrap = styled.div`
  width: 100%;
  max-width: 550px;
  margin: auto;
  
  display: flex;
  justify-content: center;
`;
export const SearchBar = styled.input.attrs({
  type: "text",
  placeholder: "Search Topics,Categories,Queries",
})`
  cursor: pointer;

  color: #707070;
  width: 100%;
  height: 50px;
  border: none;
  

  box-shadow: 0px 0px 10px;
  padding: 0 10px 0 10px;
  transition: 0.15s;

  display: block;

  @media (max-width: 900px) {
    width: 280px;
    height: 40px;
    margin: 0 5px 0 5px;
    padding: 0 20px 0 20px;
  }
`;

export const TextWrapper = styled.div`
  
  padding: 10px 40px;
`;

export const TopLine = styled.p`
  color: #41c500;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;
export const BottomLine = styled.p`
  color: #41c500;
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-align: end;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "white" : "#1C1A1D")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "black" : "grey")};
`;

export const BtnWrap = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  right: ${(props)=>props.right};
  justify-content: flex-end;
`;

export const ImgWrap = styled.div`
  width: 100%;

  display: flex;
  margin: 0 auto 0 auto;
  justify-content: center;
  
`;

export const Img = styled.img`
  height: 250px;
  margin: 0 0 10px 0;
  margin: 0;
`;
