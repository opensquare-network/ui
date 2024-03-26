export type DividerProps = React.HTMLAttributes<HTMLHRElement> & {
  /**
   * @deprecated use `my` instead
   */
  gap?: number;

  /**
   * @default 20
   * @description css margin top and bottom
   */
  my?: number;

  mt?: number;

  mb?: number;
};
