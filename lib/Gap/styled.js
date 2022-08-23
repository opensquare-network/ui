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
    margin-top: ${p.mt ?? 0}px;
    margin-right: ${p.mr ?? 0}px;
    margin-bottom: ${p.mb ?? 0}px;
    margin-left: ${p.ml ?? 0}px;
  `}
`;
