import React, { useEffect, useState } from "react";
import { ReactComponent as PendingIcon } from "../imgs/icons/pending.svg";
import { CloseIcon } from "../Icon";
import { capitalize, noop, waitFor } from "../utils";
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

  waitFor(50).then(() => setSlideIn(true));

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
      $sortedIndex={sortedIndex}
      $slideIn={slideIn}
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
