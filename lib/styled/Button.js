import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import {
  netural_grey_300,
  netural_grey_500,
  netural_grey_800,
  netural_grey_900,
  text_dark_accessory,
} from "../styles/colors";
import { ReactComponent as ButtonLoadingIcon } from "../imgs/icons/pending.svg";

const StyledButton = styled.button.attrs({
  className: "text14Medium text-textPrimary",
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 15px;
  border: 1px solid ${netural_grey_500};
  background-color: #fff;
  cursor: pointer;
  user-select: none;

  :hover {
    border-color: ${netural_grey_800};
  }

  ${(p) =>
    (p.disabled || p.$isLoading) &&
    css`
      color: ${text_dark_accessory};
      border-color: ${netural_grey_300};

      > * {
        pointer-events: none;
      }

      > svg path {
        fill: ${text_dark_accessory};
      }

      :hover {
        border-color: ${netural_grey_300};
      }
    `}

  ${(p) =>
    p.$primary &&
    css`
      color: var(--textPrimaryContrast);
      border-color: ${netural_grey_900};
      background-color: ${netural_grey_900};

      :hover {
        border-color: ${netural_grey_800};
        background-color: ${netural_grey_800};
      }

      ${(p.$isLoading || p.disabled) &&
      css`
        border-color: ${netural_grey_300};
        background-color: ${netural_grey_300};

        :hover {
          border-color: ${netural_grey_300};
          background-color: ${netural_grey_300};
        }

        > svg path {
          fill: var(--textPrimaryContrast);
        }
      `}
    `}

  ${(p) =>
    p?.color === "orange" &&
    css`
      color: var(--textPrimaryContrast);
      background-color: #e37f06;
      border-color: #e37f06;

      &:hover {
        border-color: #e7932e;
        background-color: #e7932e;
      }

      ${(p.$isLoading || p.disabled) &&
      css`
        border-color: #f9e5cd;
        background-color: #f9e5cd;

        :hover {
          border-color: #f9e5cd;
          background-color: #f9e5cd;
        }

        > svg path {
          fill: var(--textPrimaryContrast);
        }
      `}
    `}
`;

function Button(
  {
    children,
    disabled,
    primary,
    large,
    color,
    isLoading,
    block,
    onClick = () => {},
    ...rest
  },
  ref,
) {
  const handleClick = (e) => {
    if (isLoading || disabled) {
      e.preventDefault();
      return;
    }
    onClick(e);
  };

  return (
    <StyledButton
      ref={ref}
      {...rest}
      type="button"
      disabled={disabled}
      $primary={primary}
      $large={large}
      color={color}
      $isLoading={isLoading}
      $block={block}
      onClick={handleClick}
    >
      {isLoading ? <ButtonLoadingIcon /> : children}
    </StyledButton>
  );
}

export default forwardRef(Button);
