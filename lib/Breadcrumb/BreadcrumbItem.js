import React from "react";
import styled, { css } from "styled-components";
import { text_dark_accessory } from "../styles/colors";
import { p_16_semibold } from "../styles/textStyles";

const Wrapper = styled.li`
  list-style: none;
  ${p_16_semibold}

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
      color: ${text_dark_accessory};
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
  color: ${text_dark_accessory};
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
