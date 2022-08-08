import styled from "styled-components";
import {
  FaYoutubeSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaThumbsUp,
  
} from "react-icons/fa";

export const StyledFooter = styled.div`
  
  background-color: #007c90;
  padding: 20px 10px 20px 10px;
`;

export const FooterYoutubeIcon = styled(FaYoutubeSquare)`
  height: 20px;
  margin: 0 0 0 20px;
  width: 20px;
  color: white;
  &:hover{
    cursor: pointer;
    transition: 0.25s;
    transform: scale(1.6,1.6)
  }
`;
export const FooterTwitterIcon = styled(FaTwitterSquare)`
  height: 20px;
  width: 20px;
  margin: 0 0 0 20px;
  color: white;
  &:hover{
    cursor: pointer;

    transition: 0.25s;
    transform: scale(1.6,1.6)
  }
`;
export const FooterInstagramIcon = styled(FaInstagramSquare)`
  height: 20px;
  width: 20px;
  margin: 0 0 0 20px ;
  color: white;
  &:hover{
    cursor: pointer;

    transition: 0.25s;
    transform: scale(1.6,1.6)
  }
`;
export const FooterFacebookIcon = styled(FaFacebookSquare)`
  height: 20px;
  width: 20px;
  margin:0 0 0 20px;
  color: white;
  &:hover{
    cursor: pointer;

    transition: 0.25s;
    transform: scale(1.6,1.6)
  }
`;
export const FooterLikeIcon = styled(FaThumbsUp)`
  height: 40px;
  width: 40px;
  margin:20px;
  color: ${props=>props.color?props.color:"white"};

  &:hover{
    color:#999999;
    cursor: pointer;
    transition: 0.5s;
    
    transform: scale(1.6,1.6) rotate(360deg);
  }
`;

export const FooterButton = styled.button`
color: white;
background-color: #00515e;
border: none;
margin: 5px 10px 5px 10px;
padding: 5px 10px 5px 10px;

&:hover{
    background-color: #038499;
}

`