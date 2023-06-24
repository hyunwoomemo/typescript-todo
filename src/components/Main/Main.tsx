import React, { createContext, useContext } from "react";
import Title from "../common/Title";

interface MainState {}

const MainContext = createContext<MainState | null>(null);

const useMainContext = () => {
  const context = useContext(MainContext);

  if (!context) throw new Error("Main 컴포넌트 내에서만 렌더링 될 수 있습니다!");

  return context;
};

const providerValue = {};

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <MainContext.Provider value={{ ...providerValue }}>{children}</MainContext.Provider>;
};

Main.Title = Title;

export default Main;
