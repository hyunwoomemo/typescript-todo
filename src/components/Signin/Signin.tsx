import React, { ChangeEvent, createContext, useContext, useState } from "react";
import Title from "../common/Title";
import Input from "../common/Input";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";
import axios from "axios";
import AuthForm from "../common/AuthForm";

interface SigninState {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  pw: string;
  setPw: React.Dispatch<React.SetStateAction<string>>;
}

const SigninContext = createContext<SigninState | null>(null);

export const useSigninContext = () => {
  const context = useContext(SigninContext);

  if (!context) throw new Error("Signin 컴포넌트 내에서만 렌더링될 수 있습니다!");

  return context;
};

interface SigninProps {
  children: React.ReactNode;
}

const Signin = ({ children }: SigninProps) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const providerValue = {
    id,
    setId,
    pw,
    setPw,
  };
  return <SigninContext.Provider value={{ ...providerValue }}>{children}</SigninContext.Provider>;
};

interface SigninFormProps {
  children: React.ReactNode;
}

const SigninForm = ({ children }: SigninFormProps) => {
  return <AuthForm>{children}</AuthForm>;
};

// id 인풋
const SigninIdInput = () => {
  const { id, setId } = useSigninContext();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  return <Input type="id" ph="id" onChange={handleChange}></Input>;
};
// pw 인풋
const SigninPwInput = () => {
  const { pw, setPw } = useSigninContext();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };
  return <Input type="password" ph="password" onChange={handleChange}></Input>;
};

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

interface SigninBtnProps {
  children: React.ReactNode;
}

const SigninBtn = ({ children }: SigninBtnProps) => {
  const { id, pw } = useSigninContext();
  const url = "http://localhost:3030";
  const [userId, setUserId] = useRecoilState(userState);
  const navigate = useNavigate();
  const handleSignin = async () => {
    try {
      const response = await axios.post(`${url}/auth/signin`, { id, pw });

      if (response.status === 200) {
        const { access_token } = response.data;

        //JWT를 로컬 스토리지에 저장
        localStorage.setItem("token", access_token);
        // 로그인 성공 시 / 경로로 이동
        navigate("/main");
        setUserId(id);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return <Button onClick={handleSignin}>{children}</Button>;
};

Signin.Title = Title;
Signin.Form = SigninForm;
Signin.Signin = SigninBtn;
Signin.Back = SigninBackBtn;
Signin.Id = SigninIdInput;
Signin.Pw = SigninPwInput;

export default Signin;
