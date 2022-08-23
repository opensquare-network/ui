import React, { ReactNode } from "react";

export type CountDownProps = React.SVGAttributes<SVGSVGElement> & {
  currentBlockHeight?: number;
  currentBlockTime?: number;
  unlockBlockHeight?: number;
  unlockBlockTime?: number;
  awardBlockHeight?: number;
  awardBlockTime?: number;
  size?: number;
  circleForegroundColor?: string;
  circleBackgroundColor?: string;
  timeRender?(
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
  ): ReactNode;
  circlePopperContent: ReactNode;
};
