import React from "react";
import styled from "styled-components";
import { primary_purple_500, primary_turquoise_500 } from "../styles/colors";

const presetColors = {
  purple: primary_purple_500,
  gray: "#E2E8F0",
  turquoise: primary_turquoise_500,
};

const Wrapper = styled.span.attrs({ className: "text12Medium" })`
  padding: 2px 12px;
  color: white;
  line-height: 16px;
  font-size: 12px;
  background: ${(p) => presetColors[p.color] || p.color || "#000"};
`;

export default function Tag({ children, color = "", ...props }) {
  return (
    <Wrapper color={color} {...props}>
      {children}
    </Wrapper>
  );
}
