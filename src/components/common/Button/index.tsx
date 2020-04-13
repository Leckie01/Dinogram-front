import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #20c997;
  border: none;
  color: white;
  height: 2rem;
  padding: 0 1rem;
  font-weight: 800;
  font-size: 1rem;
  border-radius: 1rem;
  transition: all 0.1s ease-in;
  &:hover {
    opacity: 0.5;
  }
`;

const Button = (props: any) => {
  return <StyledButton {...props} />;
};
export default Button;
