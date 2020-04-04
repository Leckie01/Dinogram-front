import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import RegularButton from "../Button/RegularButton";

const AuthFormContainer = styled.div`
  input ~ button {
    margin-top: 1rem;
    /* float: right; */
    width: 100%;
  }
`;

const StyledInput = styled.input`
  font-size: 1.125rem;
  border: none;
  outline: none;
  width: 100%;
  padding-bottom: 5px;
  border-bottom: 2px solid #d3d3d3;
  /* height: 2rem; */
  background-color: transparent;

  &:focus {
  }

  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.footer`
  margin-top: 2rem;
  text-align: right;
  a {
    border-bottom: 1px solid #757575;
    color: #757575;
  }
`;

const AuthForm = () => {
  const { pathname } = useLocation();

  return (
    <AuthFormContainer>
      <form>
        <StyledInput name="email" placeholder="이메일" />
        {pathname === "/signup" && (
          <StyledInput name="name" placeholder="닉네임" />
        )}
        <StyledInput type="password" name="password" placeholder="비밀번호" />
        {pathname === "/signup" && (
          <StyledInput
            type="password"
            name="password-check"
            placeholder="비밀번호 확인"
          />
        )}
        <RegularButton type="submit">
          {pathname === "/login" ? "로그인" : "회원가입"}
        </RegularButton>
      </form>
      <Footer>
        {pathname === "/login" ? (
          <Link to="/signup">회원가입</Link>
        ) : (
          <Link to="/login">로그인화면</Link>
        )}
      </Footer>
    </AuthFormContainer>
  );
};

export default AuthForm;