import styled from "@emotion/styled";
import React, { ChangeEvent, ChangeEventHandler } from "react";

interface InputProps {
  type: string;
  ph: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type, ph, onChange }: InputProps) => {
  return <Base type={type} placeholder={ph} onChange={onChange} />;
};

const Base = styled.input``;

export default Input;
