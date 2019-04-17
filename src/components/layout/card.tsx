import styled from "styled-components";

import { colors } from "../../style/variables";

const Card = styled.div`
  padding: 32px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  box-shadow: 0 4px 10px 0 rgba(15, 59, 47, 0.05);
`;

export default Card;
