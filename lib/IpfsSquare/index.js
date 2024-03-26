import {
  LogoIpfsActive,
  LogoIpfsNewLight,
  LogoIpfsNewDark,
} from "@osn/icons/opensquare";
import React from "react";
import { cn } from "../utils";

export default function IpfsSquare({ href, className = "" }) {
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group/ipfs-square", "inline-flex", className)}
    >
      <span className="inline-flex">
        <LogoIpfsNewLight
          className={cn(
            "group-hover/ipfs-square:hidden",
            "dark:hidden",
            "w-5 h-5",
          )}
        />
        <LogoIpfsNewDark
          className={cn(
            "group-hover/ipfs-square:hidden",
            "hidden dark:inline-flex",
            "w-5 h-5",
          )}
        />
        <LogoIpfsActive
          className={cn(
            "hidden group-hover/ipfs-square:inline-flex",
            "w-5 h-5",
          )}
        />
      </span>
    </a>
  ) : (
    <LogoIpfsActive className="w-5 h-5 inline-flex" />
  );
}
