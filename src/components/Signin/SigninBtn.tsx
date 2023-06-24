import React from "react";
import Button from "../common/Button";

interface SigninBtnProps {
  children: React.ReactNode;
}

const SigninBtn = ({ children }: SigninBtnProps) => {
  const handleSignin = async () => {};
  return <Button onClick={handleSignin}>{children}</Button>;
};

export default SigninBtn;
