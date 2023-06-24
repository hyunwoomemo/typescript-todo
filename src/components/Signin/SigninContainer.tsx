import React from "react";
import Signin from "./Signin";
import styled from "@emotion/styled";

const SigninContainer = () => {
  return (
    <Signin>
      <Signin.Form>
        <Signin.Title size={20}>로그인</Signin.Title>
        <Signin.Id></Signin.Id>
        <Signin.Pw></Signin.Pw>
        <ButtonWrapper>
          <Signin.Back>뒤로 가기</Signin.Back>
          <Signin.Signin>로그인</Signin.Signin>
        </ButtonWrapper>
      </Signin.Form>
    </Signin>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export default SigninContainer;
