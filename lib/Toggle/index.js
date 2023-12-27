import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 30px;
  height: 18px;
  padding: 3px;
  background: #e2e8f0;
  cursor: pointer;
  > div {
    background-color: var(--fillBgPrimary);
    box-shadow: 0px 4px 31px rgba(26, 33, 44, 0.04),
      0px 0.751293px 3.88168px rgba(26, 33, 44, 0.03);
    width: 12px;
    height: 12px;
  }
  ${(p) =>
    p.$active &&
    css`
      background: #04d2c5;
      > div {
        margin-left: auto;
      }
    `}
`;

export default function Toggle({ on, setOn }) {
  return (
    <Wrapper $active={on} onClick={() => setOn(!on)}>
      <div />
    </Wrapper>
  );
}
