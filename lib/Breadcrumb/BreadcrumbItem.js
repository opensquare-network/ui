import React from "react";
import styled, { css } from "styled-components";
import { cn } from "../utils";

const Wrapper = styled.li.attrs({ className: "text16Semibold" })`
  list-style: none;

  :last-child {
    .separator {
      display: none;
    }
  }
`;

const Item = styled.span`
  a {
    cursor: pointer;

    :hover {
      color: inherit;
      text-decoration: underline;
    }
  }

  ${(p) =>
    p.disabled &&
    css`
      color: var(--textTertiary);
      a {
        cursor: unset;

        :hover {
          text-decoration: none;
        }
      }
    `}
`;

const Separator = styled.span`
  margin: 0 8px;
  color: var(--textTertiary);
`;

/**
 * @param {import('./types').BreadcrumbItemProps} props
 */
function BreadcrumbItem(props) {
  const {
    children,
    disabled,
    separator = "/",
    onClick = () => {},
    className = "",
    ...rest
  } = props;

  if (children) {
    return (
      <Wrapper className={cn("group", className)} {...rest}>
        <Item disabled={disabled} onClick={onClick}>
          {children}
        </Item>
        {separator && (
          <Separator className="separator group-last:hidden">
            {separator}
          </Separator>
        )}
      </Wrapper>
    );
  }

  return null;
}

export default BreadcrumbItem;
