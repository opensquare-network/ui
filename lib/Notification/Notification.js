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
import { capitalize, noop } from "../utils";
import {
  NotificationHead,
  NotificationMessage,
  NotificationTitle,
  NotificationWrapper,
  CloseIconWrapper,
} from "./styled";

/**
 * @param {import('./types').NotificationProps} props
 */
function Notification(props = {}) {
  const {
    title,
    message,
    type,
    seed,
    size,
    timeout = 5000,
    sortedIndex,
    closable = true,
    destroy = noop,
    onClose = noop,
    ...restProps
  } = props;

  const [slideIn, setSlideIn] = useState(false);
  const [timer, setTimer] = useState(null);

  const resolvedTitle = capitalize((title ? title : type) || "notification");

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
    <NotificationWrapper
      className="osn-notification"
      type={type}
      sortedIndex={sortedIndex}
      slideIn={slideIn}
      size={size}
      onMouseEnter={clearTimer}
      onMouseLeave={startTimer}
      {...restProps}
    >
      <NotificationHead>
        <NotificationTitle>{resolvedTitle}</NotificationTitle>
        <div>
          {type === "pending" ? (
            <PendingIcon />
          ) : (
            closable && (
              <CloseIconWrapper>
                <CloseIcon onClick={onClose} />
              </CloseIconWrapper>
            )
          )}
        </div>
      </NotificationHead>

      <NotificationMessage>{message}</NotificationMessage>
    </NotificationWrapper>
  );
}

export default Notification;
