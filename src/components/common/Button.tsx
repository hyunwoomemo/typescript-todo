import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  size?: number;
  onClick?: any;
}

const Button = ({ children, size, onClick }: ButtonProps) => {
  return (
    <Base onClick={onClick} size={size}>
      {children}
    </Base>
  );
};

const Base = styled.div<{ size: number | undefined }>`
  padding: 10px 16px;
  border-radius: 5px;
  background-color: #4949af;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #3939be;
  }
  ${({ size }) =>
    size
      ? css`
          font-size: ${size}px;
        `
      : undefined}
`;

export default Button;
