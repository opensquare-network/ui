import { SystemLoading2 } from "@osn/icons/opensquare";
import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button.attrs({
  className: "text14Medium",
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: 1px solid var(--strokeActionActive);
  background-color: var(--fillBgPrimary);
  cursor: pointer;
  user-select: none;

  ${(p) =>
    p.$large &&
    css`
      padding: 12px 24px;
    `}
  ${(p) =>
    p.$block &&
    css`
      width: 100%;
    `}

  ${(p) =>
    (p.disabled || p.$isLoading) &&
    css`
      color: var(--textTertiary);
      border-color: var(--strokeActionDefault);

      > * {
        pointer-events: none;
      }

      > svg path {
        fill: var(--textTertiary);
      }

      :hover {
        border-color: var(--strokeActionDefault);
      }
    `}
  ${(p) =>
    p.$isLoading &&
    css`
      cursor: wait;
    `}
  ${(p) =>
    p.disabled &&
    css`
      cursor: not-allowed;
    `}

  ${(p) =>
    p.$primary &&
    css`
      color: var(--textPrimaryContrast);
      border-color: var(--fillBgBrandSecondary);
      background-color: var(--fillBgBrandSecondary);

      ${(p.$isLoading || p.disabled) &&
      css`
        border-color: var(--strokeActionDefault);
        background-color: var(--fillBgBrandDisable);

        :hover {
          border-color: var(--strokeActionDefault);
          background-color: var(--fillBgBrandDisable);
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
      $isLoading={isLoading}
      $block={block}
      onClick={handleClick}
    >
      {isLoading ? <SystemLoading2 /> : children}
    </StyledButton>
  );
}

export default forwardRef(Button);
