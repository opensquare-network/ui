import React from "react";
import { text_dark_accessory } from "../styles/colors";
import styled from "styled-components";

const Span = styled.span`
  margin: 0 8px;
  color: ${text_dark_accessory};
`;

export default function Dot() {
  return <Span>·</Span>;
}
