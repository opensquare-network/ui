import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import NoData from "../NoData";
import ListLoader from "../Skeleton/ListLoader";

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

/**
 * @param {import('./types').ListProps} props
 */
function List(props) {
  const {
    children,
    data = [],
    itemKey,
    gap,
    itemRender,
    noDataMessage,
    noDataProps = {},
    loading = false,
    loadingComponent = <ListLoader />,
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
    <ListWrapper {...restProps}>
      {data?.map((item, index) =>
        React.cloneElement(itemRender(item, index), {
          key: itemKey ? itemKey(item) : index,
          gap,
        })
      )}
    </ListWrapper>
  );
}

List.Item = ListItem;

export default List;
