// @ts-check

import { createRef } from "react";
import { render } from "react-dom";
import Notification from "./Notification";
import NotificationContainer from "./NotificationContainer";

/**
 * @typedef {import('./types').NotificationOptions} NotificationOptions
 * @typedef {import('./types').DestroyCallback} DestroyCallback
 * @typedef {import('./types').CreateNotification} CreateNotification
 */

let seed = 1;

const notificationContainerRef = createRef();

/**
 * @param {NotificationOptions['appendTo']} appendTo
 */
const prepareNotificationContainer = (appendTo) => {
  const container = document.querySelector(`.osn-notifications`);
  // FIXME: not expected behaviour
  if (container && notificationContainerRef.current) {
    return { create };
  }

  /** @type CreateNotification */
  function create(options) {
    return notificationContainerRef.current?.create(options);
  }

  const div = document.createElement("div");
  div.className = "osn-notifications";
  appendTo?.appendChild(div);
  render(<NotificationContainer ref={notificationContainerRef} />, div);

  return { create };
};

/**
 * @param {NotificationOptions} options
 */
function createNotification(options = {}) {
  seed += 1;

  const { title, message, type, timeout, appendTo = document.body } = options;
  const { create } = prepareNotificationContainer(appendTo);

  const destroy = create({
    seed,
    title,
    message,
    type,
    timeout,
  });

  return destroy;
}

function destroyAllNotifications() {
  notificationContainerRef.current?.destroyAll();
}

/**
 * @type {import("./types").NotificationShortcuts}
 * @description shortcuts for all types
 */
const notification = {
  open: (options) => createNotification({ ...options, type: "notification" }),
  success: (options) => createNotification({ ...options, type: "success" }),
  error: (options) => createNotification({ ...options, type: "error" }),
  info: (options) => createNotification({ ...options, type: "info" }),
  pending: (options) => createNotification({ ...options, type: "pending" }),
  notice: (options) => createNotification({ ...options, type: "notice" }),
  destroyAll: destroyAllNotifications,
};

export { Notification, notification };
export default Notification;
