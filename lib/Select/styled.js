import styled, { css } from "styled-components";
import FlexCenter from "../styled/FlexCenter";

export const SelectCaretDownIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  position: absolute;
  right: ${(p) => p.right}px;
  top: 50%;
  transform: translate(0, -50%);
`;

export const SelectWrapper = styled.div`
  position: relative;
  height: ${(p) => p.height}px;
  border: solid 1px var(--strokeActionDefault);
  ${(p) =>
    p.width &&
    css`
      width: ${p.width}px;
    `}

  &:hover {
    border-color: var(--strokeActionActive);
    cursor: pointer;
  }

  ${(p) =>
    p.$active &&
    css`
      border-color: var(--strokeActionActive);
      border-bottom: 0;

      ${SelectCaretDownIconWrapper} {
        transform: translate(0, -50%) rotate(180deg);
      }
    `}
`;

export const SelectOption = styled(FlexCenter)`
  justify-content: flex-start;
  padding: ${(p) => p.$paddingY}px ${(p) => p.$paddingX}px;
  height: ${(p) => p.height}px;
  user-select: none;
  position: relative;
  top: -1px;

  ${(p) =>
    p.selected &&
    css`
      background-color: var(--fillBgTertiary);
    `}
`;

export const SelectOptionsWrapper = styled.div`
  position: absolute;
  left: -1px;
  right: -1px;
  top: ${(p) => p.height - 1}px;
  border: solid 1px var(--strokeActionActive);
  border-top: none;
  height: ${(p) => p.height * p.count}px;
  overflow-y: auto;
  z-index: 999;
  background-color: var(--fillBgPrimary);

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.grey400Border};
    border-radius: 4px;
  }

  ${SelectOption} {
    &:hover {
      background-color: var(--fillBgTertiary);
    }
  }
`;
