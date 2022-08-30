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
  GoogleIcon,ShareText,FacebookIcon,FacebookContainer
} from "./LoginSection.elements";
import { Button } from "../ButtonElement";
const LoginSection = () => {
  return (
    <>
      <LoginContainer>
        <LoginWrapper>
          <LoginForm>
            <TextWrap>
              <Heading>
                <Color>Beginning!</Color>{" "}
              </Heading>
              <BottomLine>the journey towards the light</BottomLine>
            </TextWrap>
            <TextfieldWrap>
              <UserNameField />
            </TextfieldWrap>
            <TextfieldWrap>
              <PasswordField />
            </TextfieldWrap>
            <ForgotPassword to="">Can't remember password?</ForgotPassword>
            <BtnWrap>
              <Button light to="" primary>
                Sign in
              </Button>
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
                <FacebookIcon/>
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
