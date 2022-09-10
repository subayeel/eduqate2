import styled from "styled-components";
import {Link} from 'react-router-dom';

export const BrowseCardContainer = styled.div`
color: #2c2c2c;
margin: 14px;
padding: 7px;
display: inline-block;
`

export const BrowseCardWrapper = styled.div`
width: 330px;
position: relative;
height: 450px;
margin: auto;
background-color: #eeeeee;
overflow: hidden;
border-radius: 32px;
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`

export const ImgWrap = styled.div`
height: 180px;
width: 100%;
`
export const Img = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`
export const TextWrap = styled.div`
padding: 14px;
`

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
  max-width: 440px;
  margin: 10px 0 10px 0;
  font-size: 14px;
  line-height: 18px;

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