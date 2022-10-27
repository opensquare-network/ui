import styled, { css } from "styled-components";

export const CollapseWrapper = styled.div`
  ${(p) =>
    p.collapsed &&
    css`
      .osn-collapse-body {
        display: none;
      }
      .osn-card-body {
        .osn-divider {
          display: none;
        }
      }
    `}

  ${(p) =>
    p.ghost &&
    css`
      .osn-card {
        padding: 0;
      }
      .osn-card-body {
        .osn-divider {
          display: none;
        }
      }
      .osn-collapse-body {
        margin-top: 16px;
      }
    `}
`;

export const CollapseButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;

  svg {
    path {
      fill: #c4c4c4;
    }
  }

  ${(p) =>
    p.collapsed &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
`;
