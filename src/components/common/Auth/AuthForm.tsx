import React, { FormEvent, useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";
import RegularButton from "../Button/RegularButton";
import useInputs from "../../../hooks/useInputs";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync, signupAsync } from "../../../reducers/user";
import { RootState } from "../../../reducers";

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

const ErrorMessage = styled.div`
  color: #ff0000;
  margin-top: 1rem;
`;

const AuthForm = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const { value: email, onChange: emailOnChange } = useInputs("");
  const { value: name, onChange: nameOnChange } = useInputs("");
  const { value: password, onChange: passwordOnChange } = useInputs("");
  const { value: passwordChk, onChange: passwordChkOnChange } = useInputs("");
  const [error, setError] = useState<string | null>(null);

  const dispatch = useDispatch();
  const { user, signUpErrorReason, logInErrorReason } = useSelector(
    ({ user }: RootState) => user
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (pathname === "/login") {
      dispatch(loginAsync.request({ email, password }));
    } else {
      if ([email, name, password, passwordChk].includes("")) {
        setError("빈 칸을 모두 입력하세요.");
        return;
      }

      if (password !== passwordChk) {
        setError("비밀번호가 일치하지 않습니다.");
        return;
      }
      dispatch(signupAsync.request({ email, name, password, passwordChk }));
    }
  };

  useEffect(() => {
    if (signUpErrorReason) {
      const { response } = signUpErrorReason;
      setError(response!.data);
      return;
    }
    if (logInErrorReason) {
      const { response } = logInErrorReason;
      setError(response!.data);
    }
    if (user) {
      history.push("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (error) {
        console.log(error);
      }
    }
  }, [history, user, signUpErrorReason, logInErrorReason]);

  return (
    <AuthFormContainer>
      <form onSubmit={onSubmit}>
        <StyledInput
          name="email"
          placeholder="이메일"
          value={email}
          onChange={emailOnChange}
        />
        {pathname === "/signup" && (
          <StyledInput
            name="name"
            placeholder="닉네임"
            value={name}
            onChange={nameOnChange}
          />
        )}
        <StyledInput
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={passwordOnChange}
        />
        {pathname === "/signup" && (
          <StyledInput
            type="password"
            name="password-check"
            placeholder="비밀번호 확인"
            value={passwordChk}
            onChange={passwordChkOnChange}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
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
