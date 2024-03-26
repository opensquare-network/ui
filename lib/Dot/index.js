import React from "react";
import styled from "styled-components";

const Span = styled.span`
  margin: 0 8px;
  color: var(--textTertiary);
`;

export default function Dot() {
  return <Span>·</Span>;
}
