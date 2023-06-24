import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { useHomeContext } from "../Home/Home";

interface TitleProps {
  children: React.ReactNode;
  size: number;
}

const Title = ({ children, size }: TitleProps) => {
  return <Base size={size}>{children}</Base>;
};

const Base = styled.div<{ size: number }>`
  ${({ size }) =>
    size
      ? css`
          font-size: ${size}px;
        `
      : undefined}
`;

export default Title;
