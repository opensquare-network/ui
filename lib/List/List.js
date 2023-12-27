import React from "react";
import ListItem from "./ListItem";
import NoData from "../NoData";
import ListLoader from "../Skeleton/ListLoader";
import { cn } from "../utils";

/**
 * @param {import('./types').ListProps} props
 */
function List(props) {
  const {
    data = [],
    itemKey,
    gap,
    itemRender,
    noDataMessage,
    noDataProps = {},
    loading = false,
    loadingComponent = <ListLoader />,
    className = "",
    style,
    ...restProps
  } = props ?? {};

  if (loading) {
    return loadingComponent;
  }

  if (!data?.length) {
    return <NoData {...noDataProps} message={noDataMessage} />;
  }

  if (typeof itemRender !== "function") {
    return null;
  }

  return (
    <ul
      {...restProps}
      className={cn(
        "m-0 p-0 list-none",
        gap && "space-y-[var(--list-gap)]",
        className,
      )}
      style={{ "--list-gap": gap ? `${gap}px` : null, ...style }}
    >
      {data?.map((item, index) =>
        React.cloneElement(itemRender(item, index), {
          key: itemKey ? itemKey(item) : index,
          gap,
        }),
      )}
    </ul>
  );
}

List.Item = ListItem;

export default List;
