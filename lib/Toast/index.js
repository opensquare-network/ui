// @ts-check

import React, { createRef } from "react";
import { render } from "react-dom";
import ToastContainer from "./ToastContainer";

/**
 * @typedef {import('./types').ToastOptions} ToastOptions
 * @typedef {import('./types').DestroyCallback} DestroyCallback
 * @typedef {import('./types').ToastCreate} ToastCreate
 */

let seed = 1;

const toastContainerRef = createRef();

// TODO: refactor this
/**
 * @param {ToastOptions['appendTo']} appendTo
 */
const prepareToastContainer = (appendTo) => {
  const container = document.querySelector(".osn-toast-container");
  // FIXME: not expected behaviour
  if (container && toastContainerRef.current) {
    return { create };
  }

  /** @type ToastCreate */
  function create(options) {
    return toastContainerRef.current?.create(options);
  }

  const div = document.createElement("div");
  div.className = "osn-toast-container";
  appendTo.appendChild(div);
  render(<ToastContainer ref={toastContainerRef} />, div);

  return { create };
};

/**
 * @param {ToastOptions} options
 */
export function createToast(options = {}) {
  seed += 1;

  const { title, message, type, timeout, appendTo = document.body } = options;
  const { create } = prepareToastContainer(appendTo);

  const destroy = create({
    seed,
    title,
    message,
    type,
    timeout,
  });

  return destroy;
}

export function destroyAllToasts() {
  toastContainerRef.current?.destroyAll();
}
