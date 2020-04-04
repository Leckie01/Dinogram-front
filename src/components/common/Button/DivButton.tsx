import React from "react";
import styled from "styled-components";

interface IProps {
  onClick: () => void;
}

const Button = styled.div`
  display: table-cell;
  vertical-align: middle;
  cursor: pointer;
  /* justify-content: center;
  align-items: center; */
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

const DivButton: React.FC<IProps> = ({ onClick, ...props }) => {
  return <Button onClick={onClick} {...props} />;
};

export default DivButton;
