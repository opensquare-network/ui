import React, { ReactNode } from "react";
import { extractTime } from "@polkadot/util";

export type EstimateTime = ReturnType<typeof extractTime>;

export type Time = EstimateTime & { defaultTimeString: string };

export type CountDownProps = React.SVGAttributes<SVGSVGElement> & {
  /**
   * @default 12000
   */
  blockTime?: number;
  blockHeight?: number;
  startBlockHeight?: number;
  endBlockHeight?: number;
  size?: number;
  circleForegroundColor?: string;
  circleBackgroundColor?: string;
  timeRender?(time: Time): ReactNode;
};
