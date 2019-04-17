import styled from "styled-components";

import { colors, sizing } from "../../style/variables";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  padding: ${sizing.padding} calc(2 * ${sizing.padding});
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.white};
  box-shadow: 0 4px 10px 0 rgba(15, 59, 47, 0.05);
`;

export default Nav;
