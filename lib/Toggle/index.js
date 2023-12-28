import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 30px;
  height: 18px;
  padding: 3px;
  background-color: var(--fillBgBrandDisable);
  cursor: pointer;
  > div {
    background-color: var(--fillBgPrimary);
    box-shadow: var(--shadowCardDefault);
    width: 12px;
    height: 12px;
  }
  ${(p) =>
    p.$active &&
    css`
      background: var(--fillBgBrandSecondary);
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
