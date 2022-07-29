import React from "react";
import styled from "styled-components";
import { MOBILE_SIZE } from "@osn/constants";

const maxWidth = 1080;

const Main = styled.main`
  flex: 1 1 auto;
  min-height: calc(100vh - 160px);

  @media screen and (min-width: ${MOBILE_SIZE}px) and (max-width: ${maxWidth}px) {
    padding: 0 32px;
  }

  @media screen and (max-width: ${MOBILE_SIZE}px) {
    padding: 0 16px;
  }
`;

export default Main;
