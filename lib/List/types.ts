import React from "react";
import { NoDataProps } from "../NoData/types";

export type ListProps = {
  /**
   * @requires
   */
  data: any[];
  /**
   * @requires
   */
  itemRender(item: any, index: number): React.ReactNode;
  /**
   * list item gap for <List.Item>
   */
  gap?: number;
  /**
   * if no data(data.length equals to 0)
   */
  noDataMessage?: string;
  /**
   * @default false
   */
  loading?: boolean;

  /**
   * @default <ListLoader />
   */
  loadingComponent?: React.ReactNode;

  /**
   * Props for `NoData` component
   */
  noDataProps?: NoDataProps;
};

export type ListItemProps = {
  gap?: ListProps["gap"];
  children?: React.ReactNode;
};
