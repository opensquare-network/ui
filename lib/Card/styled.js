import styled, { css } from "styled-components";
import { p_14_medium, p_16_semibold } from "../styles/textStyles";

export const CardHeadTitle = styled.div`
  margin: 0;
  ${p_16_semibold};

  ${(p) =>
    p.size === "small" &&
    css`
      ${p_14_medium};
    `}
`;
