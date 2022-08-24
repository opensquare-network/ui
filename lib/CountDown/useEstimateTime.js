import { extractTime } from "@polkadot/util";
import BigNumber from "bignumber.js";
import { useMemo } from "react";

export function useEstimateTime({ blockHeight, blockTime }) {
  const estimateTime = useMemo(() => {
    const value = new BigNumber(blockTime).multipliedBy(blockHeight).toNumber();
    const time = extractTime(Math.abs(value));
    return time;
  }, [blockHeight, blockTime]);

  return estimateTime;
}
