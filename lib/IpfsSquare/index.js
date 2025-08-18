import React from "react";
import {
  LogoIpfsActive,
  LogoIpfsNewLight,
  LogoIpfsNewDark,
} from "@osn/icons/opensquare";
import { cn } from "../utils";

function LogoIpfsInActive({ className = "" }) {
  return (
    <div className={className}>
      <LogoIpfsNewLight className="dark:hidden w-5 h-5" />
      <LogoIpfsNewDark className="hidden dark:inline-flex w-5 h-5" />
    </div>
  );
}

export default function IpfsSquare({ href, className = "" }) {
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group/ipfs-square", "inline-flex", className)}
    >
      <span className="inline-flex">
        <LogoIpfsInActive className="group-hover/ipfs-square:hidden" />
        <LogoIpfsActive
          className={cn(
            "hidden group-hover/ipfs-square:inline-flex",
            "w-5 h-5",
          )}
        />
      </span>
    </a>
  ) : (
    <LogoIpfsInActive className="group-hover/ipfs-square:hidden" />
  );
}
