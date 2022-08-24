// @ts-check

import { CountDownWrapper } from "./styled";
import Gap from "../Gap";
import { primary_yellow_100, primary_yellow_500 } from "../styles/colors";
import CircleSvg from "./CircleSvg";
import { useEstimateTime } from "./useEstimateTime";
import { useMemo } from "react";

function defaultTimeRender(days, hours, minutes, seconds) {
  const format = (n, s) => `${n} ${s}${n > 1 ? "s" : ""}`;

  const timeStr = [
    format(days, "day"),
    format(hours, "hour"),
    format(minutes, "minute"),
    format(seconds, "second"),
  ]
    .filter(Boolean)
    .slice(0, 2)
    .join(" ");

  return timeStr;
}

/**
 * @param {import("./types").CountDownProps} props
 */
export default function CountDown(props) {
  const {
    currentBlockHeight = 0,
    currentBlockTime,
    unlockBlockHeight = 0,
    unlockBlockTime,
    awardBlockHeight = 0,
    awardBlockTime,
    size = 12,
    circleForegroundColor = primary_yellow_500,
    circleBackgroundColor = primary_yellow_100,
    timeRender = defaultTimeRender,
  } = props ?? {};

  const estimateTime = useEstimateTime({
    blockHeight: unlockBlockHeight - awardBlockHeight,
    blockTime: currentBlockTime,
  });

  const diff = useMemo(() => {
    if (currentBlockHeight > unlockBlockHeight) {
      return 0;
    }

    return unlockBlockHeight - currentBlockHeight;
  }, [unlockBlockHeight, currentBlockHeight]);

  return (
    <CountDownWrapper
      foregroundColor={circleForegroundColor}
      backgroundColor={circleBackgroundColor}
    >
      <CircleSvg
        size={size}
        unlockBlockTime={unlockBlockTime}
        unlockBlockHeight={unlockBlockHeight}
        awardBlockTime={awardBlockTime}
        awardBlockHeight={awardBlockHeight}
        currentBlockTime={currentBlockTime}
        currentBlockHeight={currentBlockHeight}
        diff={diff}
      />

      <Gap inline mr={5} />
      <span>
        {timeRender(
          estimateTime.days,
          estimateTime.hours,
          estimateTime.minutes,
          estimateTime.seconds,
        )}
      </span>
    </CountDownWrapper>
  );
}
