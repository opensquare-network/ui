import React from "react";
import { Svg } from "./styled";

export default function LoadingIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5,10.5765L6.9,10.5765L6.9,13.9765L3.5,13.9765L3.5,10.5765Z"
        fill="var(--textTertiary)"
        opacity="1"
        transform="translate(5.2,12.28) translate(-5.2,-12.2765)"
        style={{ animation: "2s linear infinite both a0_o" }}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3,10.5765L13.7,10.5765L13.7,13.9765L10.3,13.9765L10.3,10.5765Z"
        fill="var(--textTertiary)"
        opacity="1"
        transform="translate(12,12.2765) translate(-12,-12.2765)"
        style={{ animation: "2s linear infinite both a1_o" }}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1,10.5765L20.5,10.5765L20.5,13.9765L17.1,13.9765L17.1,10.5765Z"
        fill="var(--textTertiary)"
        opacity="1"
        transform="translate(18.8,12.2765) translate(-18.8,-12.2765)"
        style={{ animation: "2s linear infinite both a2_o" }}
      />
    </Svg>
  );
}
