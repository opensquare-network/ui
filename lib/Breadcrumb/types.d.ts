import React from "react";

export type Route = {
  link: string;
  name: string;
};

export type BreadcrumbProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  routes?: Route[];
  /**
   * @default true
   */
  showBackButton?: boolean;
  backButtonRender?: (button: React.ReactNode) => React.ReactNode;
  onBack?: () => void;
  /**
   * @default "/"
   */
  separator?: React.ReactNode;
  itemRender?: (
    route: Route,
    index: number,
    routes: Route[],
    isLast: boolean
  ) => React.ReactNode;
};

export type BreadcrumbItemProps = Pick<
  BreadcrumbProps,
  "children" | "separator" | "style" | "className"
> & {
  /**
   * @default undefined
   */
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
};
