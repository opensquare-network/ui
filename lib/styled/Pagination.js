import React, { useMemo } from "react";
import styled, { css } from "styled-components";
import { noop } from "../utils";
import { ArrowCaretLeft, ArrowCaretRight } from "@osn/icons/opensquare";

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
    background-color: var(--fillBgTertiary);
  }
  svg * {
    fill: var(--textTertiary);
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
        fill: var(--strokeActionDisable);
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
  color: var(--textTertiary);
  &:hover {
    background-color: var(--fillBgTertiary);
  }
  ${(p) =>
    p.$active &&
    css`
      background-color: var(--fillBgTertiary);
      color: var(--textPrimary);
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
  color: var(--textTertiary);
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

  const prevPage = itemRender(page - 1, "prev", <ArrowCaretLeft />);
  const nextPage = itemRender(page + 1, "next", <ArrowCaretRight />);

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

  const items = useMemo(() => {
    // always display items
    const firstPageItem = makePageItem(1);
    const lastPageItem = totalPages > 1 && makePageItem(totalPages);

    const prev = page - 1;
    const next = page + 1;
    const prevPageItem = prev > 1 && makePageItem(prev);
    const nextPageItem = next < totalPages && makePageItem(next);

    const currentPageItem = page > 1 && page < totalPages && makePageItem(page);

    const prevEllipsisItem = prev - 1 > 1 && (
      <Ellipsis key="prev-ellipsis">...</Ellipsis>
    );
    const nextEllipsisItem = totalPages - next > 1 && (
      <Ellipsis key="next-ellipsis">...</Ellipsis>
    );

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
