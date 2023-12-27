import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 6px;
  background-color: var(--fillBgTertiary);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
`;

const Bar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: #6848ff;
  height: 100%;
  width: ${(p) => `${p.percent}%`};
`;

export default function ProgressBar({ percent }) {
  return (
    <Wrapper>
      <Bar percent={percent} />
    </Wrapper>
  );
}
