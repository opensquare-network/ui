import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import { ReactComponent as CaretLeft } from "../imgs/icons/caret-left.svg";
import { ReactComponent as CaretRight } from "../imgs/icons/caret-right.svg";
import { noop } from "../utils";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > :not(:first-child) {
    margin-left: 4px;
  }
`;

const Nav = styled.div`
  cursor: pointer;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background: #f0f3f8;
  }
  svg * {
    fill: #a1a8b3;
  }
  > * {
    display: flex;
  }
  ${(p) =>
    p.disabled &&
    css`
      cursor: auto;
      pointer-events: none;
      svg,
      svg * {
        fill: #e3e7ed;
      }
      :hover {
        background: none;
      }
    `}
`;

const Item = styled.div`
  cursor: pointer;
  min-width: 32px;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: #a1a8b3;
  &:hover {
    background: #f0f3f8;
  }
  ${(p) =>
    p.$active &&
    css`
      background: #f0f3f8;
      color: #2e343d;
      cursor: auto;
      pointer-events: none;
    `}

  ${(p) =>
    p.$large &&
    css`
      min-width: 40px;
      line-height: 40px;
    `}
`;

const Ellipsis = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #a1a8b3;
`;

const defaultItemRender = (_page, _type, element) => {
  return element;
};

export default function Pagination({
  page,
  pageSize,
  total,
  setPage = noop,
  large = false,
  itemRender = defaultItemRender,
  onChange = noop,
}) {
  const totalPages = Math.ceil(total / pageSize)
    ? Math.ceil(total / pageSize)
    : 1;

  const handleChange = (currentPage) => {
    setPage(currentPage);
    onChange(currentPage, pageSize);
  };

  const prevPage = itemRender(page - 1, "prev", <CaretLeft />);
  const nextPage = itemRender(page + 1, "next", <CaretRight />);

  const makePageItem = (targetPage) => (
    <Item
      key={targetPage}
      role="button"
      $active={page === targetPage}
      $large={large}
      onClick={() => handleChange(targetPage)}
    >
      {itemRender(targetPage, "page", <span>{targetPage}</span>)}
    </Item>
  );
  const makeEllipsisItem = (targetPage, keyName) => {
    return (
      Math.abs(page - targetPage) > 1 && <Ellipsis key={keyName}>...</Ellipsis>
    );
  };
  const items = useMemo(() => {
    // always display items
    const firstPageItem = makePageItem(1);
    const lastPageItem = totalPages > 1 && makePageItem(totalPages);

    const prev = page - 1;
    const next = page + 1;
    const prevPageItem = prev > 1 && makePageItem(prev);
    const nextPageItem = next < totalPages && makePageItem(next);

    const currentPageItem = page > 1 && page < totalPages && makePageItem(page);

    const prevEllipsisItem = makeEllipsisItem(1, "prev-ellipsis");
    const nextEllipsisItem = makeEllipsisItem(totalPages, "next-ellipsis");

    return [
      firstPageItem,
      prevEllipsisItem,
      prevPageItem,
      currentPageItem,
      nextPageItem,
      nextEllipsisItem,
      lastPageItem,
    ];
  }, [page, totalPages]);

  return (
    <Wrapper>
      <Nav
        role="button"
        disabled={page === 1}
        onClick={() => handleChange(page - 1)}
      >
        {prevPage}
      </Nav>

      {items}

      <Nav
        role="button"
        disabled={page >= totalPages}
        onClick={() => handleChange(page + 1)}
      >
        {nextPage}
      </Nav>
    </Wrapper>
  );
}
