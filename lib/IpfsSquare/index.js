import React from "react";
import styled, { css } from "styled-components";

const Square = styled.div`
  width: 20px;
  height: 20px;
  background: url("/imgs/icons/ipfs.svg");
  ${(p) =>
    !p.noHover &&
    css`
      cursor: pointer;
      :hover {
        background: url("/imgs/icons/ipfs-active.svg");
      }
    `}
`;

export default function IpfsSquare({ href }) {
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Square />
    </a>
  ) : (
    <Square noHover={true} />
  );
}
