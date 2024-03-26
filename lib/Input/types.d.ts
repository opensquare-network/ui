import { ReactNode } from "react";

export type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  /**
   * @description Suffix area
   */
  suffix?: ReactNode;
};
