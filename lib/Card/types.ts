import { ReactNode } from "react";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  title?: ReactNode;
  extra?: ReactNode;
  head?: ReactNode;
  size?: "small" | undefined;
  shadow?: boolean;
  bordered?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;

  /**
   * @default false
   * @description Lift up when hovering card
   */
  hoverable?: boolean;
};
