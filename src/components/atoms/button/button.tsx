import React from "react";
import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: blue;
`;
export const Button: FC = (props) => {
  return <StyledButton {...props} />;
};
