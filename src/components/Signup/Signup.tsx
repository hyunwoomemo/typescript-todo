import React, { ChangeEvent, createContext, useContext, useState } from "react";
import Title from "../common/Title";
import AuthForm from "../common/AuthForm";
import Input from "../common/Input";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface SignupState {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  pw: string;
  setPw: React.Dispatch<React.SetStateAction<string>>;
}

interface SignupProps {
  children: React.ReactNode;
}
const SignupContext = createContext<SignupState | null>(null);

export const useSignupContext = () => {
  const context = useContext(SignupContext);

  if (!context) throw new Error("Signup 컴포넌트 내에서만 렌더링될 수 있습니다!");

  return context;
};

const Signup = ({ children }: SignupProps) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const providerValue = {
    id,
    setId,
    pw,
    setPw,
  };
  return <SignupContext.Provider value={{ ...providerValue }}>{children}</SignupContext.Provider>;
};

interface SignupTitleProps {
  children: React.ReactNode;
}

const SignupTitle = ({ children }: SignupTitleProps) => {
  return <Title size={20}>{children}</Title>;
};

interface SignupFormProps {
  children: React.ReactNode;
}

const SignupForm = ({ children }: SignupFormProps) => {
  return <AuthForm>{children}</AuthForm>;
};

const SignupIdInput = () => {
  const { setId } = useSignupContext();
  const handleId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  return <Input type="text" ph="id" onChange={handleId}></Input>;
};

const SignupPwInput = () => {
  const { setPw } = useSignupContext();
  const handlePw = (e: ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };
  return <Input type="password" ph="password" onChange={handlePw}></Input>;
};

const SignupBack = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return <Button onClick={handleBack}>Back</Button>;
};

const SignupBtn = () => {
  const { id, pw } = useSignupContext();
  const url = "http://localhost:3030";
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      await axios.post(`${url}/auth/signup`, { id, pw });
      alert("회원가입이 완료되었습니다.");
      navigate("/signin");
    } catch (error) {
      console.error(error);
    }
  };

  return <Button onClick={handleSignup}>회원가입</Button>;
};

Signup.Title = SignupTitle;
Signup.Form = SignupForm;
Signup.Id = SignupIdInput;
Signup.Pw = SignupPwInput;
Signup.Back = SignupBack;
Signup.Signup = SignupBtn;
export default Signup;
