import React, { useEffect } from "react";
import Header from "../../components/common/Header";
import styled from "styled-components";
import Feed from "../../components/Feed";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { readPostsAsync, IPost } from "../../reducers/post";

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: flex-end;
`;

const FeedListPage = () => {
  const dispatch = useDispatch();
  const post = useSelector((state: RootState) => state.post);
  const posts = post.posts as IPost[];
  console.log(posts);
  useEffect(() => {
    dispatch(readPostsAsync.request());
  }, []);
  return (
    <>
      <Header />
      <Main>
        {posts ? (
          posts!.map((post: IPost) => <Feed key={post.id} {...post} />)
        ) : (
          <div>피드가 존재하지 않습니다.</div>
        )}
      </Main>
    </>
  );
};

export default FeedListPage;
