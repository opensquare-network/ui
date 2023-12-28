import React, { useState } from "react";
import { CollapseButton } from "./styled";
import { ArrowCaretDown } from "@osn/icons/opensquare";

export function useCollapsible() {
  const [collapsed, setCollapsed] = useState(false);
  const collapseButton = (
    <CollapseButton $collapsed={collapsed} onClick={toggleCollapse}>
      <ArrowCaretDown />
    </CollapseButton>
  );

  function toggleCollapse() {
    setCollapsed(!collapsed);
  }

  return {
    collapsed,
    collapseButton,
  };
}
