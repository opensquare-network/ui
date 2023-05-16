// @ts-check

import { createRef } from "react";
import { createRoot } from "react-dom/client";
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
  const div = document.createElement("div");
  div.className = "osn-notifications";
  appendTo?.appendChild(div);
  const root = createRoot(div);
  root.render(<NotificationContainer ref={notificationContainerRef} />);
};

/**
 * @param {NotificationOptions} options
 * @type {CreateNotification}
 */
async function createNotification(options = {}) {
  seed += 1;

  const { title, message, type, timeout, appendTo = document.body } = options;

  // FIXME: not expected behaviour
  const container = document.querySelector(`.osn-notifications`);
  if (!container && !notificationContainerRef.current) {
    prepareNotificationContainer(appendTo);
  }

  // FIXME: temporary fix react 18 new render
  await Promise.resolve();

  const destroy = notificationContainerRef.current?.create({
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
  warning: (options) => createNotification({ ...options, type: "warning" }),
  destroyAll: destroyAllNotifications,
};

export { Notification, notification };
export default Notification;
