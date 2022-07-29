import React from "react";
import styled, { css } from "styled-components";
import { p_14_medium } from "../styles/textStyles";
import {
  netural_grey_300,
  netural_grey_500,
  netural_grey_800,
  netural_grey_900,
  text_dark_accessory,
  text_dark_major,
  text_light_major,
} from "../styles/colors";

const StyledButton = styled.button`
  ${p_14_medium};
  color: ${text_dark_major};
  padding: 8px 16px;
  border: 1px solid ${netural_grey_500};
  background-color: #fff;
  cursor: pointer;
  user-select: none;

  :hover {
    border-color: ${netural_grey_800};
  }

  ${(p) =>
    p.large &&
    css`
      padding: 12px 24px;
    `}

  ${(p) =>
    p.block &&
    css`
      width: 100%;
    `}

  ${(p) =>
    (p.disabled || p.isLoading) &&
    css`
      color: ${text_dark_accessory};
      border-color: ${netural_grey_300};

      > * {
        pointer-events: none;
      }

      :hover {
        border-color: ${netural_grey_300};
      }
    `}
  ${(p) =>
    p.isLoading &&
    css`
      cursor: wait;
    `}
  ${(p) =>
    p.disabled &&
    css`
      cursor: not-allowed;
    `}

  ${(p) =>
    p.primary &&
    css`
      color: ${text_light_major};
      border-color: ${netural_grey_900};
      background-color: ${netural_grey_900};

      :hover {
        border-color: ${netural_grey_800};
        background-color: ${netural_grey_800};
      }

      ${(p.isLoading || p.disabled) &&
      css`
        border-color: ${netural_grey_300};
        background-color: ${netural_grey_300};

        :hover {
          border-color: ${netural_grey_300};
          background-color: ${netural_grey_300};
        }
      `}
    `}

  ${(p) =>
    p?.color === "orange" &&
    css`
      color: ${text_light_major};
      background-color: #e37f06;
      border-color: #e37f06;

      &:hover {
        border-color: #e7932e;
        background-color: #e7932e;
      }

      ${(p.isLoading || p.disabled) &&
      css`
        border-color: #f9e5cd;
        background-color: #f9e5cd;

        :hover {
          border-color: #f9e5cd;
          background-color: #f9e5cd;
        }
      `}
    `}
`;

export default function Button({
  children,
  disabled,
  primary,
  large,
  color,
  isLoading,
  block,
  onClick = () => {},
  ...rest
}) {
  const handleClick = (e) => {
    if (isLoading || disabled) {
      e.preventDefault();
      return;
    }
    onClick(e);
  };

  return (
    <StyledButton
      {...rest}
      type="button"
      disabled={disabled}
      primary={primary}
      large={large}
      color={color}
      isLoading={isLoading}
      block={block}
      onClick={handleClick}
    >
      {children}
    </StyledButton>
  );
}
