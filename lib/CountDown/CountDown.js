// @ts-check

import { CountDownWrapper } from "./styled";
import Gap from "../Gap";
import { primary_yellow_100, primary_yellow_500 } from "../styles/colors";
import CircleSvg from "./CircleSvg";
import { useEstimateTime } from "./useEstimateTime";
import { useMemo } from "react";

/**
 * @param {import("./types").EstimateTime} time
 */
function defaultTimeRenderString(time) {
  const { days, hours, minutes, seconds } = time ?? {};

  const format = (/** @type {number} */ n, /** @type {string} */ s) =>
    `${n} ${s}${n > 1 ? "s" : ""}`;

  const timeStr = [
    days && format(days, "day"),
    hours && format(hours, "hr"),
    minutes && format(minutes, "min"),
    seconds && `${seconds}s`,
  ]
    .filter(Boolean)
    .slice(0, 2)
    .join(" ");

  return timeStr;
}

/**
 * @param {import("./types").Time} time
 */
function defaultTimeRender(time) {
  const { defaultTimeString } = time ?? {};
  return defaultTimeString;
}

/**
 * @param {import("./types").CountDownProps} props
 */
export default function CountDown(props) {
  const {
    blockHeight = 0,
    blockTime = 12000,
    startBlockHeight = 0,
    endBlockHeight = 0,
    size = 12,
    circleForegroundColor = primary_yellow_500,
    circleBackgroundColor = primary_yellow_100,
    timeRender = defaultTimeRender,
  } = props ?? {};

  const estimateTime = useEstimateTime({
    blockHeight: blockHeight - endBlockHeight,
    blockTime,
  });

  const diff = useMemo(() => {
    if (blockHeight > startBlockHeight) {
      return 0;
    }

    return startBlockHeight - blockHeight;
  }, [startBlockHeight, blockHeight]);

  const defaultTimeString = useMemo(
    () => defaultTimeRenderString(estimateTime),
    [estimateTime],
  );

  return (
    <CountDownWrapper
      foregroundColor={circleForegroundColor}
      backgroundColor={circleBackgroundColor}
    >
      <CircleSvg
        size={size}
        startBlockHeight={startBlockHeight}
        endBlockHeight={endBlockHeight}
        blockHeight={blockHeight}
        diff={diff}
      />

      <Gap inline mr={5} />
      <span>{timeRender({ ...estimateTime, defaultTimeString })}</span>
    </CountDownWrapper>
  );
}
