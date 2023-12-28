import React from "react";
import styled from "styled-components";
import { timeDuration } from "./utils";

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: var(--textTertiary);
`;

export default function Time({ time }) {
  return <Wrapper>{timeDuration(time)}</Wrapper>;
}
