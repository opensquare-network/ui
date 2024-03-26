import React, { cloneElement } from "react";
import styled, { css } from "styled-components";
import { MOBILE_SIZE } from "@osn/constants";
import Flex from "../styled/Flex";
import Divider from "../Divider";
import CardHead from "./CardHead";

const CardWrapper = styled(Flex).attrs({ className: "text14Medium" })`
  padding: 32px;
  background-color: var(--fillBgPrimary);

  ${(p) =>
    p.$bordered &&
    css`
      border: 1px solid var(--strokeActionDisable);
    `}

  ${(p) =>
    p.size === "small" &&
    css`
      padding: 24px;
    `}

  ${(p) =>
    p.$shadow &&
    css`
      box-shadow: var(--shadowCardDefault);
    `}

  ${(p) =>
    p.$hoverable &&
    css`
      &:hover {
        box-shadow: var(--shadowCardHover);
      }
    `}

  @media screen and (max-width: ${MOBILE_SIZE}px) {
    padding: 16px;
  }

  .osn-card-prefix {
    margin-right: 32px;

    ${(p) =>
      p.size === "small" &&
      css`
        margin-right: 24px;
      `}

    .osn-card-suffix {
      margin-left: 32px;

      ${(p) =>
        p.size === "small" &&
        css`
          margin-left: 24px;
        `}
    }
  }
`;

const CardBody = styled.div`
  flex: 1;
  max-width: 100%;
`;

/**
 * @param {import('./types').CardProps} props
 */
function Card(props) {
  const {
    children,
    title,
    extra,
    head: customizeHead,
    size,
    shadow = true,
    bordered = true,
    prefix,
    suffix,
    hoverable = false,
    ...restProps
  } = props ?? {};

  const head =
    customizeHead ||
    ((title ?? extra) && <CardHead size={size} title={title} extra={extra} />);

  return (
    <CardWrapper
      {...restProps}
      size={size}
      $shadow={shadow}
      $bordered={bordered}
      $hoverable={hoverable}
      className="osn-card"
    >
      {prefix &&
        cloneElement(prefix, {
          className: "osn-card-prefix",
        })}
      <CardBody className="osn-card-body">
        {head}
        {head && children && <Divider my={16} />}
        {children}
      </CardBody>
      {suffix &&
        cloneElement(suffix, {
          className: "osn-card-suffix",
        })}
    </CardWrapper>
  );
}

Card.Head = CardHead;

export default Card;
