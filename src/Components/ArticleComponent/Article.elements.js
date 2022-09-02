import styled from "styled-components";
import { FaCopy } from "react-icons/fa";

export const ArticleContainer = styled.div`
  color: #fff;
  padding-top: 50px;
  margin: auto;
  max-width: 1100px;
`;

export const ArticleWrapper = styled.div`
  margin: 0;

  padding: 0px 15px;
`;

export const TextWrapper = styled.div`
  max-width: 800px;
  padding-top: 0;
  padding-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Column1 = styled.div`
  padding: 0 7px;
  flex: 2;
`;

export const Column2 = styled.div`
  padding: 0 14px;
  margin-top: 85px;
  margin-left: 28px;
  flex: 1;
  @media screen and (max-width: 768px) {
    display: none;
  }
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
  font-size: 36px;
  letter-spacing: 2px;
  line-height: 1.1;
  font-weight: 500;
  margin-bottom: 7px;
  color: ${({ lightText }) => (lightText ? "white" : "#1C1A1D")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin: 10px 0 10px 0;
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
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
  overflow: hidden;
  margin: 14px 0;
`;

export const Img = styled.img`
  flex-shrink: 0;
  object-fit: cover;
  min-height: 100%;
  min-width: 100%;
  @media screen and (max-width: 768px) {
    max-height: 300px;
  }
`;

export const TextBoxContainer = styled.div`
  width: 100%;
  border: 1px solid #2c2c2c;
  box-shadow: 0 0 10px;
  background-color: #eeeeee;
`;
export const TextBoxWrapper = styled.div`
  position: relative;
  margin: auto;
  padding: 14px;
`;
export const ToggleButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  top: 0;
`;
export const ToggleButtonsWrapper = styled.div`
  display: flex;
  height: 36px;
  justify-content: space-around;
`;

export const Toggle1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 64px;
  font-size: 14px;
  font-weight: 500;

  color: ${({ isAthiest }) => (isAthiest ? "#fefefe" : "#3c7c90")};
  background-color: ${({ isAthiest }) => (isAthiest ? "#3c7c90" : "#fefefe")};
  border: 2px solid #3c7c90;
  border-width: 2px 1px 2px 2px;
  &:hover {
    color: white;
    background-color: #3c7c90;

    cursor: pointer;

    transition: 0.5;
  }
`;
export const Toggle2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 64px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ isChristian }) => (isChristian ? "#fefefe" : "#3c7c90")};
  background-color: ${({ isChristian }) =>
    isChristian ? "#3c7c90" : "#fefefe"};
  border: 2px solid #3c7c90;
  border-width: 2px 1px 2px 1px;
  &:hover {
    color: white;
    background-color: #3c7c90;

    cursor: pointer;

    transition: 0.5;
  }
`;
export const Toggle3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 64px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ isPagan }) => (isPagan ? "#fefefe" : "#3c7c90")};
  background-color: ${({ isPagan }) => (isPagan ? "#3c7c90" : "#fefefe")};
  border: 2px solid #3c7c90;
  border-width: 2px 2px 2px 1px;
  &:hover {
    color: white;
    background-color: #3c7c90;

    cursor: pointer;

    transition: 0.5;
  }
`;

export const ClipBoardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ClipboardIcon = styled(FaCopy)`
  height: 20px;
  padding: 8px;
  border: 2px solid #3c7c90;
  width: 20px;
  color: #3c7c90;
  &:hover {
    cursor: pointer;
    transition: 0.25s;

    background-color: #3c7c90;
    color: white;
    
  }
`;
