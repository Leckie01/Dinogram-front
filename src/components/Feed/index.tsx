import React from "react";
import styled from "styled-components";
import rabbitPic from "../../assets/images/test-rabbit.jpg";
import dinoPic from "../../assets/images/test-dino.png";
import { IPost } from "../../reducers/post";

interface IProps {}

const FeedContainer = styled.div`
  width: 18rem;
  border-radius: 4px;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
`;

const FeedImageContainer = styled.div``;

const FeedImage = styled.img`
  height: 100%;
  width: 100%;
`;

const FeedContentWrapper = styled.div`
  padding: 1.5rem;
`;

const FeedContent = styled.span`
  display: block;
  font-size: 1.125rem;
  color: rgb(33, 37, 41);
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const FeedUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  b {
    font-weight: 800;
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  ~ div {
    margin-top: 1rem;
    color: rgb(134, 142, 150);
    font-size: 0.8rem;
  }
`;

const Feed: React.FC<IPost> = ({ content, user }) => {
  return (
    <FeedContainer>
      <FeedImageContainer>
        <FeedImage src={rabbitPic} />
      </FeedImageContainer>
      <FeedContentWrapper>
        <FeedContent>{content}</FeedContent>
        <div>
          <FeedUserInfo>
            <div>
              <img src={dinoPic} />
              <span>
                {"by "}
                <b>{user.name}</b>
              </span>
            </div>
            <div>❤</div>
          </FeedUserInfo>
          <div>2020년 3월 10일</div>
        </div>
      </FeedContentWrapper>
    </FeedContainer>
  );
};

export default Feed;
