import React from "react";
import {
  UserNameField,
  PasswordField,
  TextfieldWrap,
  LoginContainer,
  LoginWrapper,
  Heading,
  LoginForm,
  BtnWrap,
  TextWrap,
  BottomLine,
  OrLineContainer,
  Line,
  OrLine,
  OrLineWrapper,
  ForgotPassword,
  Color,
  GoogleContainer,
  IconContainer,
  GoogleIcon,
  ShareText,
  FacebookIcon,
  FacebookContainer,
  LoginButton,
} from "./LoginSection.elements";

const LoginSection = () => {
  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <LoginForm>
            <TextWrap>
              <Heading>
                <Color>Beginning!</Color>
              </Heading>
              <BottomLine>the journey towards light.</BottomLine>
            </TextWrap>
            <TextfieldWrap>
              <UserNameField />
            </TextfieldWrap>
            <TextfieldWrap>
              <PasswordField />
            </TextfieldWrap>
            <ForgotPassword to="">Can't remember password?</ForgotPassword>
            <BtnWrap>
              <LoginButton light to="" primary>
                Sign in
              </LoginButton>
            </BtnWrap>

            <OrLineContainer>
              <OrLineWrapper>
                <Line></Line>
                <OrLine>or</OrLine>
                <Line></Line>
              </OrLineWrapper>
            </OrLineContainer>

            <GoogleContainer>
              <IconContainer>
                <GoogleIcon></GoogleIcon>
              </IconContainer>
              <ShareText>Google</ShareText>
            </GoogleContainer>

            <FacebookContainer>
              <IconContainer>
                <FacebookIcon />
              </IconContainer>
              <ShareText>Facebook</ShareText>
            </FacebookContainer>
          </LoginForm>
        </LoginWrapper>
      </LoginContainer>
    </>
  );
};

export default LoginSection;
