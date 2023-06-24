import React, { useContext } from "react";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useHomeContext } from "./Home";

interface HomeButtonProps {
  children: React.ReactNode;
  path: string;
}

const HomeButton = ({ children, path }: HomeButtonProps) => {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(path)}>{children}</Button>;
};

export default HomeButton;
