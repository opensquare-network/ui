import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as CaretLeft } from "../imgs/icons/caret-left.svg";
import { ReactComponent as CaretRight } from "../imgs/icons/caret-right.svg";

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
  :hover {
    background: #f0f3f8;
  }
  ${(p) =>
    p.active &&
    css`
      background: #f0f3f8;
      color: #2e343d;
      cursor: auto;
      pointer-events: none;
    `}
`;

const LargeItem = styled(Item)`
  min-width: 40px;
  line-height: 40px;
`;

const Ellipsis = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #a1a8b3;
  & + & {
    display: none;
  }
`;

const noop = () => {};

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
  const PageItem = large ? LargeItem : Item;

  const handleChange = (currentPage) => {
    setPage(currentPage);
    onChange(currentPage, pageSize);
  };

  const prevPage = itemRender(page - 1, "prev", <CaretLeft />);
  const nextPage = itemRender(page + 1, "next", <CaretRight />);

  return (
    <Wrapper>
      <Nav disabled={page === 1} onClick={() => handleChange(page - 1)}>
        {prevPage}
      </Nav>
      {Array.from(Array(totalPages)).map((_, index) =>
        index + 1 > 1 &&
        index + 1 < totalPages &&
        Math.abs(index + 1 - page) >= 2 ? (
          <Ellipsis key={index}>...</Ellipsis>
        ) : (
          <PageItem
            key={index}
            active={page === index + 1}
            onClick={() => handleChange(index + 1)}
          >
            {itemRender(index + 1, "page", <a>{index + 1}</a>)}
          </PageItem>
        )
      )}
      <Nav disabled={page >= totalPages} onClick={() => handleChange(page + 1)}>
        {nextPage}
      </Nav>
    </Wrapper>
  );
}
