import styled from "styled-components";

import { colors } from "../../style/variables";

const Layout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightestGrey};
  color: ${colors.darkestGrey};
`;

export default Layout;
