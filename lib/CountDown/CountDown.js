import { primary_yellow_100, primary_yellow_500 } from "../styles/colors";
import { createPopper } from "@popperjs/core";
import { select } from "d3-selection";
import { arc } from "d3-shape";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  PopperArrow,
  PopperContainer,
  PopperInfoDiffHeight,
  PopperInfoHeight,
  SVG,
} from "./styled";

/**
 * @param {import("./types").CountDownProps} props
 * @description A countdown inline component
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

  let popperInstance;

  const svgElement = useRef(null);
  const popperElement = useRef(null);
  const arrowElement = useRef(null);

  const [popperVisible, setPopperVisible] = useState(false);

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

  function showPopper() {
    setPopperVisible(true);
    popperInstance?.update?.();
  }

  function hidePopper() {
    setPopperVisible(false);
  }

  useEffect(() => {
    popperInstance = createPopper(svgElement.current, popperElement.current, {
      placement: "top",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  }, [svgElement, popperElement]);

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
    <span>
      <span
        onMouseEnter={showPopper}
        onFocus={showPopper}
        onMouseLeave={hidePopper}
        onBlur={hidePopper}
      >
        <SVG
          ref={svgElement}
          width={size}
          height={size}
          foregroundColor={foregroundColor}
          backgroundColor={backgroundColor}
        />

        <PopperContainer ref={popperElement} data-show={popperVisible}>
          <div>
            <PopperInfoDiffHeight>{diffHeight}</PopperInfoDiffHeight>
            <PopperInfoHeight>
              {blockHeight} / {endBlockHeight}
            </PopperInfoHeight>
          </div>
          <PopperArrow ref={arrowElement} data-popper-arrow />
        </PopperContainer>
      </span>
    </span>
  );
}
