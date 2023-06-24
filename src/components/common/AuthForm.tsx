import styled from "@emotion/styled";
import React from "react";

interface AuthFormProps {
  children: React.ReactNode;
}

const AuthForm = ({ children }: AuthFormProps) => {
  return <Base>{children}</Base>;
};

const Base = styled.form`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  height: 100vh;
`;

export default AuthForm;
