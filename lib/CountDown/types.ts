import React from "react";

export type CountDownProps = React.SVGAttributes<SVGSVGElement> & {
  blockHeight?: number;
  startBlockHeight?: number;
  endBlockHeight?: number;
  size?: number;
  foregroundColor?: string;
  backgroundColor?: string;

  /**
   * @default true
   */
  showTooltip?: boolean;
};
