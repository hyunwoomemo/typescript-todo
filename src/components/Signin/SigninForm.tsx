import React from "react";
import AuthForm from "../common/AuthForm";

interface SigninFormProps {
  children: React.ReactNode;
}

const SigninForm = ({ children }: SigninFormProps) => {
  return <AuthForm>{children}</AuthForm>;
};

export default SigninForm;
