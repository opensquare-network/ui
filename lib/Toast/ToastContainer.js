import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import ToastItem from "./ToastItem";

const ToastWrapper = styled.div`
  position: fixed;
  top: 90px;
  right: 80px;
  z-index: 99999;

  @media screen and (max-width: 500px) {
    width: 100%;
    top: 40px;
    right: 0;
    padding: 0 20px;
  }
`;

function ToastContainer(_, ref) {
  const [toastItems, setToastItems] = useState([]);

  useImperativeHandle(ref, () => ({
    create(options) {
      setToastItems((items) => [...items, options]);
      return () => destroy(options.seed);
    },
    destroyAll() {
      setToastItems([]);
    },
  }));

  function destroy(seed) {
    if (!seed) return;

    setToastItems((items) => {
      return items.filter((item) => item.seed !== seed);
    });
  }

  return (
    <ToastWrapper className="osn-toast">
      {toastItems.map((item, index) => (
        <ToastItem
          key={item.seed}
          seed={item.seed}
          $sortedIndex={toastItems.length - index - 1}
          title={item.title}
          message={item.message}
          type={item.type}
          timeout={item.timeout}
          destroy={destroy}
        />
      ))}
    </ToastWrapper>
  );
}

export default forwardRef(ToastContainer);
