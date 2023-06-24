import React from "react";
import Button from "../common/Button";
import { useSigninContext } from "./Signin";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface SigninBtnProps {
  children: React.ReactNode;
}

const SigninBtn = ({ children }: SigninBtnProps) => {
  const { id, pw } = useSigninContext();
  const url = "http://localhost:3030";
  const navigate = useNavigate();
  const handleSignin = async () => {
    try {
      const response = await axios.post(`${url}/auth/signin`, { id, pw });

      if (response.status === 200) {
        const { access_token } = response.data;

        //JWT를 로컬 스토리지에 저장
        localStorage.setItem("token", access_token);
        // 로그인 성공 시 / 경로로 이동
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return <Button onClick={handleSignin}>{children}</Button>;
};

export default SigninBtn;
