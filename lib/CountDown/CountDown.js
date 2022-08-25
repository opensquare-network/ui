// @ts-check

import { CountDownWrapper } from "./styled";
import { primary_yellow_100, primary_yellow_500 } from "../styles/colors";
import CircleSvg from "./CircleSvg";

/**
 * @param {import("./types").CountDownProps} props
 */
export default function CountDown(props) {
  const {
    blockHeight = 0,
    startBlockHeight = 0,
    endBlockHeight = 0,
    size = 12,
    circleForegroundColor = primary_yellow_500,
    circleBackgroundColor = primary_yellow_100,
  } = props ?? {};

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
      />
    </CountDownWrapper>
  );
}
