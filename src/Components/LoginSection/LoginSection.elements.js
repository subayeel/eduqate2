import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
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
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  
  padding: 10px;
  background-color: white;
  &:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

  padding: 0 24px;
`;

export const Heading = styled.p`
  display: block;
  font-size: 36px;
  margin: 0;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 900;
  font-family: Segoe UI;
  line-height: 28px;
  color: #2c2c2c;
  font-weight: 600;
`;

export const BottomLine = styled.p`
  display: block;
  font-size: 18px;
  margin: 0;
  color: #666666;
  font-weight: 400;
`;
export const LoginForm = styled.form`
  width: 100%;
`;

export const TextfieldWrap = styled.div`
  width: 100%;
  margin: auto;

  display: flex;
  justify-content: center;
`;
export const UserNameField = styled.input.attrs({
  type: "text",
  placeholder: "Username",
})`
  cursor: pointer;

  color: #707070;
  width: 90%;
  height: 36px;
  border: none;
  
  outline: none;
  margin: 7px 0;
  padding:0 10px;
  box-shadow: 0px 0px 7px;
  
  transition: 0.15s;

  display: block;

  @media (max-width: 900px) {
    width: 280px;
    height: 40px;
  }
`;

export const PasswordField = styled.input.attrs({
  type: "text",
  placeholder: "Password",
})`
  cursor: pointer;

  color: #707070;
  width: 90%;
  height: 36px;
  border: none;
  margin: 7px 0;
  padding:0 10px;
  outline: none;

  box-shadow: 0px 0px 7px;
  
  transition: 0.15s;

  display: block;

  @media (max-width: 900px) {
    width: 280px;
    height: 40px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 14px 0;
`;
export const TextWrap = styled.div`
  justify-content: start;
  margin: 20px 0;
`;
export const OrLineContainer = styled.div`
  height: 40px;
`;

export const OrLineWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Line = styled.hr`
  height: 0.5px;
  color: #8c8c8c;
  background-color: #8c8c8c;
  width: 50%;
`;

export const OrLine = styled.p`
  font-weight: 500px;
  font-size: 16px;
  margin: 5px;
  color: #8c8c8c;
`;

export const ForgotPassword = styled(Link)`
  font-size: 14px;
  text-decoration-line: none;
  color: #3c7c90;
  padding: 0 7px;
  &:hover {
    color: #73b3c7;
  }
`;
export const Color = styled.p`
  margin: 0;
  color: #3c7c90;
`;

export const GoogleContainer = styled.div`
  width: 80%;
  height: 36px;
  display: flex;
  align-items: center;
  margin: 10px auto;

  background-color: #db5651;
  &:hover {
    cursor: pointer;
    background-color: #e0322b;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GoogleIcon = styled(FaGoogle)`
  height: 24px;
  margin: 10px;
  width: 24px;
  color: #eeeeee;
`;

export const ShareText = styled.p`
  flex: 3;
  font-size: 16px;
  margin: 0;
  font-weight: 500;
  text-align: center;
`;

export const FacebookContainer = styled.div`
  width: 80%;
  height: 36px;
  display: flex;
  align-items: center;
  margin: 10px auto;

  background-color: #435a8a;
  &:hover {
    background-color: #304d8a;
    cursor: pointer;
    transition: 0.25s;
  }
`;

export const FacebookIcon = styled(FaFacebookF)`
  height: 24px;
  margin: 10px;
  width: 24px;
  color: #eeeeee;
`;

export const LoginButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 16px;
  margin: 0;
  font-weight: 500;
  text-align: center;
  background-color: #3C7C90;
  color: #eeeeee;
  height:36px;
  width:80%;
`;
