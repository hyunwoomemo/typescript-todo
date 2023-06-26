import styled from "@emotion/styled";
import React from "react";

const NotFound = () => {
  return <Base>페이지가 존재하지 않습니다 ❌</Base>;
};

const Base = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
`;

export default NotFound;
