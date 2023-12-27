import React from "react";
import styled, { css } from "styled-components";

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
    ...rest
  } = props;

  if (children) {
    return (
      <Wrapper>
        <Item disabled={disabled} onClick={onClick} {...rest}>
          {children}
        </Item>
        {separator && <Separator className="separator">{separator}</Separator>}
      </Wrapper>
    );
  }

  return null;
}

export default BreadcrumbItem;
