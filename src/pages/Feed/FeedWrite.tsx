import React from "react";
import Editor from "../../components/common/Editor";
import styled from "styled-components";

const EditorContainer = styled.div`
  animation: fadein 1s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const FeedWrite = () => {
  return (
    <EditorContainer>
      <Editor />
    </EditorContainer>
  );
};

export default FeedWrite;
