import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import AuthForm from "../../components/common/Auth/AuthForm";
import { Link } from "react-router-dom";

const LoginWrapper = styled.div`
  animation: fadein 1s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  height: 100vh;
  background: ${theme.lightGreyBG};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  .logo-area {
    display: block;
    margin-bottom: 2rem;
    /* text-align: center; */
    font-weight: 800;
    font-size: 1.75rem;
    font-family: Sen;
    letter-spacing: 1px;

    a {
      border-bottom: 0.25rem solid;
      border-color: ${theme.mint};
    }
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: #ffffff;
  border-radius: 2px;
`;

const AuthPage = () => {
  return (
    <LoginWrapper>
      <LoginBox>
        <div className="logo-area">
          <Link to="/">Dinogram</Link>
        </div>
        <AuthForm />
      </LoginBox>
    </LoginWrapper>
  );
};

export default AuthPage;
