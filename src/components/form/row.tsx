import styled from "styled-components";

import Horizontal from "../layout/horizontal";

import { sizing } from "../../style/variables";

const Row = styled(Horizontal)`
  align-items: flex-start;

  & + & {
    margin-top: ${sizing.padding};
  }
`;

export default Row;
