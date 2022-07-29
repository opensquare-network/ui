import React from "react";
import { CardProps } from "../Card/types";

export type CollapseProps = React.HTMLAttributes<HTMLDivElement> & {
  ghost?: boolean;
} & Pick<CardProps, "title" | "size" | "head">;
