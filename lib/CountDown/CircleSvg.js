import { createPopper } from "@popperjs/core";
import { select } from "d3-selection";
import { arc } from "d3-shape";
import { useEffect, useMemo, useRef, useState } from "react";
import { PopperArrow, PopperContainer } from "./styled";

export default function CircleSvg({ size, children }) {
  const svgElement = useRef(null);
  const popperElement = useRef(null);
  const arrowElement = useRef(null);

  const [popperVisible, setPopperVisible] = useState(false);
  const [popperInstance, setPopperInstance] = useState();

  const percent = useMemo(() => 20, []);

  function showPopper() {
    setPopperVisible(true);
    popperInstance?.update();
  }

  function hidePopper() {
    setPopperVisible(false);
  }

  useEffect(() => {
    setPopperInstance(
      createPopper(svgElement.current, popperElement.current, {
        placement: "top",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 12],
            },
          },
        ],
      }),
    );
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
    <>
      <svg
        ref={svgElement}
        width={size}
        height={size}
        onMouseEnter={showPopper}
        onFocus={showPopper}
        onMouseLeave={hidePopper}
        onBlur={hidePopper}
      />

      {children && (
        <PopperContainer ref={popperElement} data-show={popperVisible}>
          {children}
          <PopperArrow ref={arrowElement} data-popper-arrow />
        </PopperContainer>
      )}
    </>
  );
}
