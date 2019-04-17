import React from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";

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
};

const Select: React.FC<SelectType> = ({
  defaultValue,
  name,
  label,
  children,
}) => {
  const { register } = useFormContext();

  return (
    <Vertical className="input-group">
      <Label name={label} />
      <StyledSelect
        ref={register}
        id={label}
        name={name}
        defaultValue={defaultValue}
      >
        {children}
      </StyledSelect>
    </Vertical>
  );
};

export default Select;
