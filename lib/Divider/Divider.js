import React from "react";

/**
 * @param {import("./types").DividerProps} props
 */
function Divider(props) {
  const { my = 20, gap = my, mt, mb, style, ...restProps } = props ?? {};

  if (my || gap) {
    style.margin = `${my || gap}px 0`;
  }

  if (mt >= 0) {
    style.marginTop = mt;
  }

  if (mb >= 0) {
    style.marginBottom = mb;
  }

  return <hr className="osn-divider" style={style} {...restProps} />;
}

export default Divider;
