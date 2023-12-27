import React from "react";
import styled, { css } from "styled-components";

const DividerWrapper = styled.div`
  height: 1px;
  background-color: var(--fillBgTertiary);
  ${(p) => css`
    margin: ${p.my || p.gap}px 0;
  `}

  ${(p) =>
    p.mt >= 0 &&
    css`
      margin-top: ${p.mt}px;
    `}

  ${(p) =>
    p.mb >= 0 &&
    css`
      margin-bottom: ${p.mb}px;
    `}
`;

/**
 * @param {import('./types').DividerProps} props
 */
function Divider(props) {
  const { my = 20, gap = my, mt, mb, ...restProps } = props ?? {};
  return (
    <DividerWrapper
      {...restProps}
      gap={gap}
      my={my}
      mt={mt}
      mb={mb}
      className="osn-divider"
    />
  );
}

export default Divider;
