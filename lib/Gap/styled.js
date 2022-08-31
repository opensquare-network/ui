import styled, { css } from "styled-components";

export const GapWrapper = styled.div`
  ${(p) =>
    p.inline &&
    css`
      display: inline;
    `}

  ${(p) =>
    (p.mx || p.my) &&
    css`
      margin: ${p.my ?? 0}px ${p.mx ?? 0}px;
    `}

  ${(p) => css`
    ${!!p.mt &&
    css`
      margin-top: ${p.mt}px;
    `}
    ${!!p.mr &&
    css`
      margin-right: ${p.mr}px;
    `}
    ${!!p.mb &&
    css`
      margin-bottom: ${p.mb}px;
    `}
    ${!!p.ml &&
    css`
      margin-left: ${p.ml}px;
    `}
  `}
`;
