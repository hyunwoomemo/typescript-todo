import React from "react";
import Main from "./Main";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/atoms";
import styled from "@emotion/styled";

const MainContainer = () => {
  const userId = useRecoilValue(userState);
  return (
    <Main>
      <Base>
        <Main.Title size={30}>{userId}님, 안녕하세요 😀</Main.Title>
      </Base>
    </Main>
  );
};

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default MainContainer;
