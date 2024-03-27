import React from "react";

import Tooltip from "../../lib/Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
};
export const Primary = () => (
  <div>
    <Tooltip content={"tooltip content"}>{"hover me"}</Tooltip>
  </div>
);

export const elementOrComponent = () => {
  return (
    <div>
      <Tooltip content={"element/component"}>
        <span>hover span</span>
      </Tooltip>
    </div>
  );
};
