// WIP, copied from voting

import styled from "styled-components";
import React from "react";

const PopoverWrapper = styled.div`
  cursor: auto;
  display: none;
  position: absolute;
  padding-bottom: 10px;
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%);
  z-index: 1;
`;

const Pop = styled.div`
  position: relative;
  max-width: 360px;
  min-width: ${(p) => (p.noMinWidth ? "none" : "120px")};
`;

const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #ffffff;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
`;

const ChildrenWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;

  :hover {
    > * {
      display: block;
    }
  }
  filter: drop-shadow(0px 4px 31px rgba(26, 33, 44, 0.06))
    drop-shadow(0px 0.751293px 8px rgba(26, 33, 44, 0.04));
`;

export default function Popover({ content, children, noMinWidth }) {
  return (
    <ChildrenWrapper>
      {children}
      {content && (
        <PopoverWrapper>
          <Pop noMinWidth={noMinWidth}>
            {content}
            <Triangle />
          </Pop>
        </PopoverWrapper>
      )}
    </ChildrenWrapper>
  );
}
