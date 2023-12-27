import React from "react";
import styled from "styled-components";
import { MOBILE_SIZE } from "@osn/constants";

const Card = styled.div`
  background-color: var(--fillBgPrimary);
  border: 1px solid #f0f3f8;
  padding: 32px;
  @media screen and (max-width: ${MOBILE_SIZE}px) {
    padding: 16px;
  }
  box-shadow: 0px 4px 31px rgba(26, 33, 44, 0.04),
    0px 0.751293px 3.88168px rgba(26, 33, 44, 0.03);
`;

export default Card;
