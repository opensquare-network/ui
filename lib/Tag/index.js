import React from "react";
import styled from "styled-components";

const presetColors = {
  purple: "var(--fillBgBrandPrimary)",
  gray: "var(--fillBgBrandDisable)",
  turquoise: "var(--fillBgBrandSecondary)",
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
