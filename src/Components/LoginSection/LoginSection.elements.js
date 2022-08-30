import styled from "styled-components";
import {Link} from 'react-router-dom';
import {
  FaGoogle,
  FaFacebookF
  
} from "react-icons/fa";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  color: #fff;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
`;

export const LoginWrapper = styled.div`
  display: flex;

  height: 470px;
  width: 300px;
  position: relative;
  box-shadow: 0px 0px 10px;
  padding: 10px;
  background-color: white;

  padding: 0 24px;
`;

export const Heading = styled.p`
  display: block;
  font-size: 36px;
  margin:0;
  letter-spacing:3px;
  text-transform: uppercase;
  font-weight:900;
  font-family:Segoe UI;
  line-height: 28px;
  color: #2c2c2c;
  font-weight: 600;
`;

export const BottomLine = styled.p`
  display: block;
  font-size: 18px;
  margin:0;
  color: #666666;
  font-weight: 400;
`;
export const LoginForm = styled.form`
  width: 100%;
`;

export const TextfieldWrap = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto;

  display: flex;
  justify-content: center;
`;
export const UserNameField = styled.input.attrs({
  type: "text",
  placeholder: 'Username',
})`
  cursor: pointer;

  color: #707070;
  width: 100%;
  height: 40px;
  border: none;
  margin:10px 0;
  outline:none;

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

export const PasswordField = styled.input.attrs({
  type: "text",
  placeholder: 'Password',
})`
  cursor: pointer;

  color: #707070;
  width: 100%;
  height: 40px;
  border: none;
  margin:10px 0;
  outline:none;

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

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 14px 0;
`;
export const TextWrap = styled.div`
  justify-content: start;
  margin:20px 0;
`;
export const OrLineContainer = styled.div`
  height: 40px;
`;

export const OrLineWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Line = styled.hr`
  height: 1px;
  color: black;
  background-color: #2c2c2c;
  width: 100%;
`;

export const OrLine = styled.p`
  font-weight: 500px;
  font-size: 18px;
  margin: 5px;
  color: #000;
`;

export const ForgotPassword = styled(Link)`
font-size:14px;
text-decoration-line: none;
color: #3C7C90;
&:hover{
  color: #73b3c7;
}
`
export const Color = styled.p`
margin: 0;
color:#3c7c90;
`

export const GoogleContainer = styled.div`
width: 80%;
height:36px;
display:flex;
align-items: center;
margin:10px auto;

background-color: #db5651;
&:hover {
    cursor: pointer;
    background-color: #E0322B;
  }
`



export const IconContainer = styled.div`

display: flex;
justify-content: center;
align-items:center;
`
export const GoogleIcon = styled(FaGoogle)`
  height: 40px;
  margin: 5px;
  width: 20px;
  color: #eeeeee;
  
`;

export const ShareText = styled.p`
flex:3;
font-size: 16px;
margin: 0;
font-weight:500;
text-align: center;
`;

export const FacebookContainer = styled.div`
width: 80%;
height:36px;
display:flex;
align-items: center;
margin:10px auto;

background-color:#324261 ;
&:hover {
  background-color:#304D8A ;
    cursor: pointer;
    transition: 0.25s;
    
  }
`

export const FacebookIcon = styled(FaFacebookF)`
  height: 24px;
  margin: 5px;
  width: 20px;
  color: #eeeeee;
  
`;
