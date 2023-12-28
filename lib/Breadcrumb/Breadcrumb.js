import React from "react";
import styled from "styled-components";
import BreadcrumbItem from "./BreadcrumbItem";
import { cn } from "../utils";
import { ArrowCaretLeft } from "@osn/icons/opensquare";

const Wrapper = styled.nav.attrs({ className: "text16Semibold" })`
  display: flex;
  align-items: center;
  color: var(--textPrimary);
`;

const BackButton = styled.span`
  width: 36px;
  height: 36px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--fillBgPrimary);
  border: 1px solid var(--strokeActionDisable);
  border-radius: 18px;
  cursor: pointer;
  box-shadow: var(--shadowCardDefault);

  &:hover {
    border: 1px solid var(--strokeActionDefault);
    box-shadow: var(--shadowCardHover);
  }
`;

const CrumbsWrapper = styled.ul`
  padding-left: 0;
  display: flex;
  margin: 0;
`;

function noop() {}

function defaultBackButtonRender(button) {
  return button;
}

function defaultItemRender(route, _routeIndex, _routes, isLast) {
  return isLast ? (
    <span>{route.name}</span>
  ) : (
    <a href={`#/${getRouteLink(route.link)}`}>{route.name}</a>
  );
}

function getRouteLink(link) {
  link = link.replace(/^\//, "");
  return link;
}

/**
 * @param {import('./types').BreadcrumbProps} props
 */
function Breadcrumb(props) {
  const {
    children,
    routes,
    showBackButton = true,
    backButtonRender = defaultBackButtonRender,
    onBack = noop,
    separator = "/",
    itemRender = defaultItemRender,
    className,
    ...rest
  } = props;

  let crumbs;
  if (routes && routes.length > 0) {
    crumbs = routes.map((route, index) => {
      const isLast = routes.indexOf(route) === routes.length - 1;

      return (
        <BreadcrumbItem
          key={route.link || index}
          disabled={isLast}
          separator={separator}
        >
          {itemRender(route, index, routes, isLast)}
        </BreadcrumbItem>
      );
    });
  } else if (children) {
    crumbs = React.Children.toArray(children).map(
      (element, index, elements) => {
        if (!element) {
          return element;
        }

        const isLast = index === elements.length - 1;

        const crumb = React.cloneElement(element, {
          separator,
          disabled: isLast,
          key: index,
        });

        return crumb;
      },
    );
  }

  return (
    <Wrapper {...rest} className={cn("breadcrumb", className)}>
      {showBackButton &&
        backButtonRender(
          <BackButton onClick={onBack}>
            <ArrowCaretLeft className="[&_path]:fill-textPrimary" />
          </BackButton>,
        )}

      <CrumbsWrapper>{crumbs}</CrumbsWrapper>
    </Wrapper>
  );
}

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
