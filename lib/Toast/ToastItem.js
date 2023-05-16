// not a sharable component

import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import {
  primary_purple_500,
  secondary_green_500,
  secondary_red_500,
  text_dark_accessory,
  text_dark_major,
  text_dark_minor,
} from "../styles/colors";
import { shadow_200 } from "../styles/effects";
import { p_16_semibold, p_14_normal } from "../styles/textStyles";
import { ReactComponent as PendingIcon } from "../imgs/icons/pending.svg";
import { CloseIcon } from "../Icon";

const borderColors = {
  success: secondary_green_500,
  info: primary_purple_500,
  pending: primary_purple_500,
  error: secondary_red_500,
};

const ToastItemWrapper = styled.div`
  border-left: 4px solid ${text_dark_accessory};
  padding: 16px;
  width: 296px;
  background-color: #ffffff;
  box-shadow: ${shadow_200};

  transform: translateX(200%);
  transition: transform 0.25s ease-out;

  position: absolute;
  top: 0;
  right: 0;

  ${(p) =>
    p.$slideIn &&
    css`
      transform: translateX(0)
        ${p.$sortedIndex
          ? `translateY(calc(${p.$sortedIndex * 100}% + ${
              p.$sortedIndex * 20
            }px))`
          : ""};
    `}

  ${(p) =>
    p.type &&
    css`
      border-left-color: ${borderColors[p.type]};
    `}

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const ToastHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;
const ToastTitle = styled.div`
  ${p_16_semibold};
  color: ${text_dark_major};
`;
const ToastMessage = styled.p`
  ${p_14_normal};
  color: ${text_dark_minor};
  word-wrap: break-word;
  word-break: break-all;
`;
const CloseIconWrapper = styled.div`
  svg {
    cursor: pointer;
    fill: ${text_dark_accessory};

    path {
      fill: ${text_dark_accessory};
    }

    :hover {
      fill: ${text_dark_minor};

      path {
        fill: ${text_dark_minor};
      }
    }
    `;

/**
 * @param {import('./types').ToastItemProps} props
 */
function ToastItem(props = {}) {
  const {
    title,
    message,
    type,
    seed,
    timeout = 5000,
    sortedIndex,
    destroy = () => {},
    ...restProps
  } = props;
  const [slideIn, setSlideIn] = useState(false);
  const [timer, setTimer] = useState(null);

  setTimeout(() => setSlideIn(true));

  function startTimer() {
    if (timeout === false || timer) return;
    setTimer(
      setTimeout(() => {
        destroy(seed);
      }, timeout),
    );
  }

  function clearTimer() {
    if (!timer) return;
    setTimer(clearTimeout(timer));
  }

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, []);

  return (
    <ToastItemWrapper
      className="osn-toast-item"
      type={type}
      $sortedIndex={sortedIndex}
      $slideIn={slideIn}
      onMouseEnter={clearTimer}
      onMouseLeave={startTimer}
      {...restProps}
    >
      <ToastHead>
        <ToastTitle>{title}</ToastTitle>
        <div>
          {type === "pending" ? (
            <PendingIcon />
          ) : (
            <CloseIconWrapper>
              <CloseIcon onClick={() => destroy(seed)} />
            </CloseIconWrapper>
          )}
        </div>
      </ToastHead>

      <ToastMessage>{message}</ToastMessage>
    </ToastItemWrapper>
  );
}

export default ToastItem;
