import styled, { css } from "styled-components";
import FlexCenter from "../styled/FlexCenter";
import {
  netural_grey_200,
  netural_grey_300,
  netural_grey_500,
} from "../styles/colors";

export const SelectCaretDownIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  position: absolute;
  right: ${(p) => p.right}px;
  top: 50%;
  transform: translate(0, -50%);

  svg {
    path {
      fill: #505d70;
    }
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  height: ${(p) => p.height}px;
  border: solid 1px ${netural_grey_300};
  ${(p) =>
    p.width &&
    css`
      width: ${p.width}px;
    `}

  &:hover {
    border-color: ${netural_grey_500};
    cursor: pointer;
  }

  ${(p) =>
    p.active &&
    css`
      border-color: ${netural_grey_500};
      border-bottom: 0;

      ${SelectCaretDownIconWrapper} {
        transform: translate(0, -50%) rotate(180deg);
      }
    `}
`;

export const SelectOption = styled(FlexCenter)`
  justify-content: flex-start;
  padding: ${(p) => p.paddingY}px ${(p) => p.paddingX}px;
  height: ${(p) => p.height}px;
  user-select: none;

  ${(p) =>
    p.selected &&
    css`
      background-color: ${netural_grey_200};
    `}
`;

export const SelectOptionsWrapper = styled.div`
  position: absolute;
  left: -1px;
  right: -1px;
  top: ${(p) => p.height - 1}px;
  border: solid 1px ${netural_grey_500};
  border-top: none;
  height: ${(p) => p.height * p.count}px;
  overflow-y: scroll;
  z-index: 999;
  background-color: #fff;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.grey400Border};
    border-radius: 4px;
  }

  ${SelectOption} {
    &:hover {
      background-color: ${netural_grey_200};
    }
  }
`;
