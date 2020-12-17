import React from "react";
import styled from "styled-components";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import Vertical from "../layout/vertical";

import { colors } from "../../style/variables";

import Label from "./label";

const StyledSelect = styled.select`
  font-size: 16px;
  border-radius: 8px;
  padding: 8px;
  margin: 8px 0;
  height: 40px;
  background-color: #fefefe;
  color: ${colors.darkestGrey};
  border: 1px solid rgba(0, 0, 0, 0.05);

  option[disabled] {
    display: none;
  }
`;

type SelectType = {
  name: string;
  label: string;
  defaultValue?: string;
  onChange?: () => void;
  validation?: RegisterOptions;
};

const Select: React.FC<SelectType> = ({
  defaultValue,
  name,
  label,
  children,
  onChange,
  validation,
}) => {
  const { register, errors } = useFormContext();

  return (
    <Vertical className="input-group">
      <Label name={label} />
      <StyledSelect
        ref={register(validation)}
        id={label}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {children}
      </StyledSelect>
      <ErrorMessage name={name} errors={errors} />
    </Vertical>
  );
};

export default Select;
