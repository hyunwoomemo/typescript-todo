import React from "react";
import Title from "../common/Title";

interface HomeTitleProps {
  children: React.ReactNode;
}

const HomeTitle = ({ children }: HomeTitleProps) => {
  return <Title size={20}>{children}</Title>;
};

export default HomeTitle;
