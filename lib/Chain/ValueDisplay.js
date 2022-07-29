import React from "react";
import Tooltip from "../Tooltip";
import {
  abbreviateBigNumber,
  getEffectiveNumbers,
  toPrecision,
  getSymbolByChain,
  getDecimalByChain,
} from "@osn/common";
import { ReactComponent as Loading } from "../imgs/icons/loading.svg";

/**
 * Render raw data into readable crypto amount
 * @param {string | BigNumber} value - raw full precision amount
 * @param {string} chain - chain name
 * @param {number}decimals
 * @param {string} symbol
 * @param {boolean} showAEM - Initial of showAlmostEqualMark, default false
 */

export default function ValueDisplay({
  value,
  chain,
  decimals = 0,
  symbol = "",
  showAEM = false,
}) {
  if (isNaN(value)) {
    return <Loading />;
  }
  const lostPrecision =
    getEffectiveNumbers(value) !==
    getEffectiveNumbers(abbreviateBigNumber(value));
  const displayDecimals = decimals || getDecimalByChain(chain);
  const displaySymbol = symbol || getSymbolByChain(chain);
  const precision = toPrecision(value, displayDecimals);

  if (Number(precision) > 1000 || lostPrecision) {
    return (
      <Tooltip size="fit" content={`${precision} ${displaySymbol}`}>
        <div>
          {showAEM && lostPrecision && "≈"}{" "}
          {`${abbreviateBigNumber(precision)} ${displaySymbol}`}
        </div>
      </Tooltip>
    );
  }
  return (
    <span>
      {precision} {displaySymbol}
    </span>
  );
}
