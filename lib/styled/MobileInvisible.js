import React from "react";
import styled from "styled-components";
import { MOBILE_SIZE } from "@osn/constants";

const MobileInvisible = styled.div`
  display: flex;
  @media screen and (max-width: ${MOBILE_SIZE}px) {
    display: none;
  }
`;

export default MobileInvisible;
