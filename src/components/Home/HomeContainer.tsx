import React from "react";
import Home from "./Home";
import Layout from "../common/Layout";
import styled from "@emotion/styled";

const HomeContainer = () => {
  return (
    <Home>
      <Layout>
        <Home.Title>Typescript로 만드는 TODO</Home.Title>
        <ButtonWrapper>
          <Home.Button path="/signin">Sign in</Home.Button>
          <Home.Button path="/signup">Sign up</Home.Button>
        </ButtonWrapper>
      </Layout>
    </Home>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export default HomeContainer;
