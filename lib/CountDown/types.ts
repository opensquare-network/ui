import React, { ReactNode } from "react";

type EstimateTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type CountDownProps = React.SVGAttributes<SVGSVGElement> & {
  /**
   * @default 12000
   */
  blockTime?: number;
  blockHeight?: number;
  startBlockHeight?: number;
  startBlockTime?: number;
  endBlockHeight?: number;
  endBlockTime?: number;
  size?: number;
  circleForegroundColor?: string;
  circleBackgroundColor?: string;
  timeRender?(time: EstimateTime & { timeString: string }): ReactNode;
};
