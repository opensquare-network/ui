import styled from "styled-components";

export const SVG = styled.svg`
  g {
    path:first-child {
      fill: ${(p) => p.$foregroundColor};
    }
    path:last-child {
      fill: ${(p) => p.$backgroundColor};
    }
  }
`;

export const PopperInfoDiffHeight = styled.p.attrs({
  className: "text14Medium",
})`
  margin: 0;
`;
export const PopperInfoHeight = styled.p.attrs({ className: "text12Medium" })`
  color: var(--textSecondaryContrast);
  margin: 0;
`;
