/**
 * @typedef {import('./types').NotificationOptions} NotificationOptions
 * @typedef {import('./types').DestroyCallback} DestroyCallback
 * @typedef {import('./types').CreateNotification} CreateNotification
 */

import { useSetAtom } from "jotai";
import { notificationItemsAtom } from "./atom";

let seed = 1;

export function useNotification() {
  const setNotificationItems = useSetAtom(notificationItemsAtom);

  function createNotification(options = {}) {
    seed += 1;
    setNotificationItems((items) => {
      return [...items, { seed, ...options }];
    });

    return () => destroyNotification(seed);
  }

  /**
   * @param {number} seed
   */
  function destroyNotification(seed) {
    if (!seed) return;

    setNotificationItems((items) => {
      return items.filter((item) => item.seed !== seed);
    });
  }

  function destroyAllNotifications() {
    setNotificationItems([]);
  }

  /**
   * @type {import("./types").NotificationShortcuts}
   * @description shortcuts for all types
   */
  const api = {
    open: (options) => createNotification({ ...options, type: "notification" }),
    success: (options) => createNotification({ ...options, type: "success" }),
    error: (options) => createNotification({ ...options, type: "error" }),
    info: (options) => createNotification({ ...options, type: "info" }),
    pending: (options) => createNotification({ ...options, type: "pending" }),
    notice: (options) => createNotification({ ...options, type: "notice" }),
    warning: (options) => createNotification({ ...options, type: "warning" }),
    destroyAll: destroyAllNotifications,
  };

  return api;
}
