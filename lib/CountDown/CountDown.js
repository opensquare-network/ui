import { select } from "d3-selection";
import { arc } from "d3-shape";
import { useEffect, useMemo, useRef } from "react";
import { PopperInfoDiffHeight, PopperInfoHeight, SVG } from "./styled";
import Tooltip from "../Tooltip";
/**
 * @param {import("./types").CountDownProps} props
 */
export default function CountDown(props) {
  const {
    blockHeight = 0,
    startBlockHeight = 0,
    endBlockHeight = 0,
    size = 12,
    foregroundColor = "var(--textFeedbackWarning)",
    backgroundColor = "var(--fillBgFeedbackWarningBack)",
    showTooltip = true,
  } = props ?? {};

  const svgElement = useRef(null);

  const diffHeight = useMemo(() => {
    if (blockHeight > endBlockHeight) {
      return 0;
    }

    return endBlockHeight - blockHeight;
  }, [endBlockHeight, blockHeight]);

  const percent = useMemo(() => {
    const v =
      (blockHeight - startBlockHeight) / (endBlockHeight - startBlockHeight);

    if (v >= 1) {
      return 100;
    }

    return parseInt(v * 100);
  }, [blockHeight, endBlockHeight, startBlockHeight]);

  useEffect(() => {
    const outerRadius = size / 2;
    const innerRadius = outerRadius / 2;
    const angle = (2 * Math.PI * percent) / 100;

    const svgEl = select(svgElement.current);
    svgEl.selectAll("*").remove();
    const svg = svgEl
      .append("g")
      .attr("transform", `translate(${outerRadius},${outerRadius})`);

    const arc1 = arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(0)
      .endAngle(angle);
    svg.append("path").attr("d", arc1).style("stroke-width", "0");

    const arc2 = arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .startAngle(angle)
      .endAngle(2 * Math.PI);
    svg.append("path").attr("d", arc2).style("stroke-width", "0");
  }, [percent, size, svgElement]);

  return (
    <Tooltip
      content={
        showTooltip && (
          <div>
            <PopperInfoDiffHeight>{diffHeight}</PopperInfoDiffHeight>
            <PopperInfoHeight>
              {blockHeight} / {endBlockHeight}
            </PopperInfoHeight>
          </div>
        )
      }
    >
      <SVG
        ref={svgElement}
        width={size}
        height={size}
        $foregroundColor={foregroundColor}
        $backgroundColor={backgroundColor}
      />
    </Tooltip>
  );
}
