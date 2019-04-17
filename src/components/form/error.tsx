import React from "react";
import styled from "styled-components";

const ErrorMessage = styled.div`
  font-size: 12px;
  color: rgba(255, 42, 42, 0.75);
`;

type ErrorType = {
  text?: string;
};

const Error: React.FC<ErrorType> = ({ text }) => (
  <ErrorMessage>
    {text}
  </ErrorMessage>
);

export default Error;
