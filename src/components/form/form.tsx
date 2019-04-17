import React from "react";
import styled from "styled-components";

import Vertical from "../layout/vertical";
import { sizing } from "../../style/variables";

const FormContainer = styled.form`
  .input-group {
    font-size: 12px;
    flex: 1;
  }

  .input-group + .input-group {
    margin-left: ${sizing.padding};
  }
`;

const FormTitle = styled.h1`
  margin: 0 0 32px 0;
  color: inherit;
  background-color: inherit;
`;

type FormType = {
  formTitle?: string;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form: React.FC<FormType> = ({ children, formTitle, handleSubmit }) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>{formTitle}</FormTitle>
      <Vertical>{children}</Vertical>
    </FormContainer>
  );
};

export default Form;
