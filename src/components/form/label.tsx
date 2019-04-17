import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 12px;
  text-transform: capitalize;
`;

type LabelType = {
  name: string;
};

const Label: React.FC<LabelType> = ({ name }) => (
  <StyledLabel htmlFor={name}>{name}</StyledLabel>
);

export default Label;
