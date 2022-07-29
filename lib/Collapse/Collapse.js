import React from "react";
import Card from "../Card";
import { CollapseWrapper } from "./styled";
import { useCollapsible } from "./useCollapsiable";

/**
 * @param {import('./types').CollapseProps} props
 */
export default function Collapse(props) {
  const { children, ghost = false, title, size, head } = props ?? {};
  const { collapsed, collapseButton } = useCollapsible();

  const cardProps = {
    title,
    size,
    head,
  };
  if (ghost) {
    cardProps.bordered = false;
    cardProps.shadow = false;
  }

  return (
    <CollapseWrapper
      collapsed={collapsed}
      ghost={ghost}
      className="osn-collapse"
    >
      <Card {...cardProps} extra={collapseButton}>
        <div className="osn-collapse-body">{children}</div>
      </Card>
    </CollapseWrapper>
  );
}
