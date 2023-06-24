import React, { createContext, useContext, useState } from "react";
import HomeTitle from "./HomeTitle";
import HomeButton from "./HomeButton";

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

Home.Title = HomeTitle;
Home.Button = HomeButton;

export default Home;
