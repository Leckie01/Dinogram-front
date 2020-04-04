import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";
import theme from "../../../styles/theme";

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  z-index: 1000;
  background: rgb(255, 255, 255);
`;

const Logo = styled.div`
  font-family: Sen;
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: 1px;
  border-bottom: 0.25rem solid;
  border-color: ${theme.mint};
  margin-left: 2rem;

  span {
    color: ${theme.mint};
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;

  a:first-child {
    margin-right: 0.75rem;
  }
`;

const Header = () => {
  const logged = false;
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <Logo>
            <span>#</span>Dinogram
          </Logo>
        </Link>
        <HeaderRight>
          {logged ? (
            <UserMenu>
              <Button to="/write">피드 작성</Button>
              <Button to="/logout">로그아웃</Button>
            </UserMenu>
          ) : (
            <Button to="/login">로그인</Button>
          )}
        </HeaderRight>
      </HeaderContainer>
      <Spacer />
    </>
  );
};

export default Header;
