// @ts-check

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
    foregroundColor = primary_yellow_500,
    backgroundColor = primary_yellow_100,
  } = props ?? {};

  return (
    <CircleSvg
      size={size}
      startBlockHeight={startBlockHeight}
      endBlockHeight={endBlockHeight}
      blockHeight={blockHeight}
      foregroundColor={foregroundColor}
      backgroundColor={backgroundColor}
    />
  );
}
