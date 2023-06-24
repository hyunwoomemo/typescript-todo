import React, { createContext, useContext, useState } from "react";
import HomeTitle from "./HomeTitle";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

// Home 에 대한 로직 처리

interface HomeProps {
  children: React.ReactNode;
}

interface HomeState {}

const HomeContext = createContext<HomeState | null>(null);

export const useHomeContext = () => {
  const context = useContext(HomeContext);

  if (!context) throw new Error("Home 컴포넌트 내에서만 렌더링될 수 있습니다!");

  return context;
};

const Home = ({ children }: HomeProps) => {
  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
};

interface HomeButtonProps {
  children: React.ReactNode;
  path: string;
}

const HomeButton = ({ children, path }: HomeButtonProps) => {
  const navigate = useNavigate();
  const handlePath = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/main");
    } else {
      navigate(path);
    }
  };
  return <Button onClick={handlePath}>{children}</Button>;
};

Home.Title = HomeTitle;
Home.Button = HomeButton;

export default Home;
