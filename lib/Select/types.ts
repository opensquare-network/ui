import { ReactNode, HTMLAttributes } from "react";

type Value = any;

type Size = "small" | "default" | "large";

type Option = {
  content: ReactNode | string | number;
  value: Value;
};

export type SelectProps = HTMLAttributes<HTMLDivElement> & {
  value: Value;

  options: Option[];

  /**
   * @default "default"
   */
  size?: Size;

  onSelect?: (value: Value) => void;
};
