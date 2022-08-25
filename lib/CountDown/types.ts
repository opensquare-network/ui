import React from "react";

export type CountDownProps = React.SVGAttributes<SVGSVGElement> & {
  blockHeight?: number;
  startBlockHeight?: number;
  endBlockHeight?: number;
  size?: number;
  circleForegroundColor?: string;
  circleBackgroundColor?: string;
};
