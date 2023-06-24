import React, { ChangeEvent, createContext, useContext, useState } from "react";
import SigninForm from "./SigninForm";
import SigninBtn from "./SigninBtn";
import SigninBackBtn from "./SigninBackBtn";
import Title from "../common/Title";
import Input from "../common/Input";

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

Signin.Title = Title;
Signin.Form = SigninForm;
Signin.Signin = SigninBtn;
Signin.Back = SigninBackBtn;
Signin.Id = SigninIdInput;
Signin.Pw = SigninPwInput;

export default Signin;
