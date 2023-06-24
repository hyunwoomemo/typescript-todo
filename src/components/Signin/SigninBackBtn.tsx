import React from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

interface SigninBackBtnProps {
  children: React.ReactNode;
}

const SigninBackBtn = ({ children }: SigninBackBtnProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return <Button onClick={handleBack}>{children}</Button>;
};

export default SigninBackBtn;
