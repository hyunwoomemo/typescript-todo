import React from "react";
import Signup from "./Signup";
import styled from "@emotion/styled";

const SignupContainer = () => {
  return (
    <Signup>
      <Signup.Form>
        <Signup.Title>회원가입</Signup.Title>
        <Signup.Id />
        <Signup.Pw />
        <Buttonwrapper>
          <Signup.Back />
          <Signup.Signup />
        </Buttonwrapper>
      </Signup.Form>
    </Signup>
  );
};

const Buttonwrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export default SignupContainer;
