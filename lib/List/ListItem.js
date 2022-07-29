import React from "react";
import styled, { css } from "styled-components";

const Item = styled.li`
  list-style: none;

  ${(p) =>
    p.gap &&
    css`
      padding-top: ${p.gap / 2}px;
      padding-bottom: ${p.gap / 2}px;

      :first-child {
        padding-top: 0;
      }
      :last-child {
        padding-bottom: 0;
      }
    `}
`;

/**
 * @param {import('./types').ListItemProps} props
 */
function ListItem(props) {
  const { children, gap, ...restProps } = props;

  return (
    <Item gap={gap} {...restProps}>
      {children}
    </Item>
  );
}

export default ListItem;
