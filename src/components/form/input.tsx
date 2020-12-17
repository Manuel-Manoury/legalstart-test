import React from "react";
import styled from "styled-components";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { colors } from "../../style/variables";

import Vertical from "../layout/vertical";

import Label from "./label";

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: 8px;
  padding: 8px;
  margin: 8px 0;
  height: 40px;
  background-color: #fefefe;
  color: ${colors.darkestGrey};
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

type InputType = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  validation?: RegisterOptions;
};

const Input: React.FC<InputType> = ({
  name,
  label,
  type,
  placeholder,
  validation,
}) => {
  const { register, errors } = useFormContext();

  return (
    <Vertical className="input-group">
      <Label name={label} />
      <StyledInput
        ref={register(validation)}
        id={label}
        name={name}
        type={type}
        {...(placeholder ? { placeholder } : {})}
      />
      <ErrorMessage name={name} errors={errors} />
    </Vertical>
  );
};

export default Input;
