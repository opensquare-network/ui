import React from "react";
import styled from "styled-components";
import BreadcrumbItem from "./BreadcrumbItem";
import { ReactComponent as CaretLeft } from "../imgs/icons/caret-left.svg";
import {
  netural_grey_200,
  netural_grey_300,
  text_dark_major,
} from "../styles/colors";
import { p_16_semibold } from "../styles/textStyles";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  ${p_16_semibold}
  color: ${text_dark_major};
`;

const BackButton = styled.span`
  width: 36px;
  height: 36px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--fillBgPrimary);
  border: 1px solid ${netural_grey_200};
  border-radius: 18px;
  cursor: pointer;
  box-shadow: 0px 4px 31px rgba(26, 33, 44, 0.04),
    0px 0.751293px 3.88168px rgba(26, 33, 44, 0.03);

  &:hover {
    border: 1px solid ${netural_grey_300};
    box-shadow: 0px 4px 31px rgba(26, 33, 44, 0.06),
      0px 0.751293px 8px rgba(26, 33, 44, 0.04);
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
    <Wrapper {...rest} className="breadcrumb">
      {showBackButton &&
        backButtonRender(
          <BackButton onClick={onBack}>
            <CaretLeft />
          </BackButton>,
        )}

      <CrumbsWrapper>{crumbs}</CrumbsWrapper>
    </Wrapper>
  );
}

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
