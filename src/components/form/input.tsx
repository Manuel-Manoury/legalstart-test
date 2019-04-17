import React from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";

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
};

const Input: React.FC<InputType> = ({ name, label, type, placeholder }) => {
  const { register } = useFormContext();

  return (
    <Vertical className="input-group">
      <Label name={label} />
      <StyledInput
        ref={register}
        id={label}
        name={name}
        type={type}
        {...(placeholder ? { placeholder } : {})}
      />
    </Vertical>
  );
};

export default Input;
