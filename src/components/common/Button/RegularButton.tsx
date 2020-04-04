import React from "react";
import styled from "styled-components";

interface IProps {
  type: "submit" | "reset";
}

const Button = styled.button`
  color: white;
  background: #20c997;
  border-style: none;
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

const RegularButton: React.FC<IProps> = ({ type, ...rest }) => {
  return <Button type={type} {...rest} />;
};

export default RegularButton;
