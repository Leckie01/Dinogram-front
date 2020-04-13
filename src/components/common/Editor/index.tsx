import React, { useState } from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import RegularButton from "../Button/RegularButton";
import Button from "../Button";
import DivButton from "../Button/DivButton";
import axios from "axios";
import { useDispatch } from "react-redux";

const EditorForm = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  word-wrap: break-word;

  textarea {
    width: 18rem;
    display: block;
    font-family: "Noto Sans KR";
    padding: 2rem 0;
    font-size: 1.5rem;
    font-weight: 800;
    outline: none;
    border-style: none;
    background-color: inherit;
    resize: none;
    ::placeholder {
      opacity: 0.5;
    }
  }
`;

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 18rem;
    height: auto;
    border: 0.25rem solid #20c997;
    border-radius: 5px;
    object-fit: contain;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 800;
    border: 0.25rem solid #20c997;
    border-radius: 5px;
    width: 18rem;
    height: 18rem;
    background: #20c997;
    cursor: pointer;
    input {
      display: none;
    }
  }
`;

const ButtonWrapper = styled.div`
  width: 18rem;
  display: flex;
  justify-content: flex-end;
  *:first-child {
    margin-right: 0.75rem;
  }
`;

interface ImageObject {
  file: null | File;
  preview: string;
}

const Editor = () => {
  const [previewImage, setPreviewImage] = useState<ImageObject>({
    file: null,
    preview: ""
  });
  const [content, setContent] = useState("");

  const onImageUrlChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];
    const preview = window.URL.createObjectURL(file);

    setPreviewImage({ file, preview });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    const { file } = previewImage;

    if (file) {
      formData.append("multi-files", file, "profileImage.png");
    } else {
      alert("사진을 추가해주세요.");
      return;
    }
    if (content) {
      formData.append("content", content);
    } else {
      alert("내용을 입력해주세요.");
      return;
    }
    axios
      .post("/post/write", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          alert(err.response.data);
        }
      });
  };

  const onImageReselectHandler = () =>
    setPreviewImage({ file: null, preview: "" });

  const contentChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  return (
    <EditorForm onSubmit={onSubmitHandler}>
      <PreviewWrapper>
        {previewImage.preview && (
          <div>
            <img src={previewImage.preview!} />
            <DivButton onClick={onImageReselectHandler}>사진 초기화</DivButton>
          </div>
        )}
        {!previewImage.preview && (
          <label>
            사진 선택
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={onImageUrlChangeHandler}
            />
          </label>
        )}
      </PreviewWrapper>
      <TextareaAutosize
        maxLength={120}
        name="contents"
        value={content}
        onChange={contentChangeHandler}
        placeholder="내용을 입력하세요"
      ></TextareaAutosize>
      <ButtonWrapper>
        <RegularButton type="submit">업로드</RegularButton>
        <Button to="">취소</Button>
      </ButtonWrapper>
    </EditorForm>
  );
};

export default Editor;
