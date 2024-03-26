import React from "react";
import ChainIcon from "./ChainIcon";
import styled, { css } from "styled-components";

const ItemWrapper = styled.div`
  height: 48px;
  padding: 12px 16px;
  display: flex;
  align-items: center;

  & > div:first-child {
    margin-right: 16px;
  }

  ${(p) =>
    p.header &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
    `}
  ${(p) =>
    p.isTopLayer &&
    css`
      z-index: 99;
    `}
  img, svg {
    margin-right: 8px;
  }
`;

const ChainItem = ({ header, chainName, isTopLayer = false }) => {
  return (
    <ItemWrapper header={header} isTopLayer={isTopLayer}>
      <ChainIcon chainName={chainName} />
      <div>
        <div className="text14Medium capitalize m-0 text-textPrimary">
          {chainName}
        </div>
      </div>
    </ItemWrapper>
  );
};

export default ChainItem;
