import React, { useState } from "react";
import CaretDownIcon from "../Icon/CaretDown";
import { CollapseButton } from "./styled";

export function useCollapsible() {
  const [collapsed, setCollapsed] = useState(false);
  const collapseButton = (
    <CollapseButton collapsed={collapsed} onClick={toggleCollapse}>
      <CaretDownIcon />
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
