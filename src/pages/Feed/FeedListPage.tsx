import React from "react";
import Header from "../../components/common/Header";
import styled from "styled-components";
import Feed from "../../components/Feed";

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
`;

const FeedListPage = () => {
  return (
    <>
      <Header />
      <Main>
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </Main>
    </>
  );
};

export default FeedListPage;
