import styled from "styled-components";

import { colors, sizing } from "../../style/variables";

const Button = styled.button`
  box-shadow: 0 4px 10px 0 rgba(15, 59, 47, 0.25);

  &[type="submit"] {
    background-color: ${colors.accentColor};
    padding: 8px 24px;
    text-transform: uppercase;
    color: ${colors.white};
    margin: 32px auto 0;
    border: none;
    font-size: 20px;
    font-weight: 400;
    border-radius: ${sizing.borderRadius};
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  &[type="submit"][disabled]:hover {
    cursor: not-allowed;
  }

  &[type="submit"][disabled] {
    background-color: rgba(42, 42, 42, 0.25);
  }
`;

export default Button;
