import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import Notification from "./Notification";
import { NotificationContainerWrapper } from "./styled";

function NotificationContainer(_, ref) {
  const [notificationItems, setNotificationItems] = useState([]);

  useImperativeHandle(ref, () => ({
    create(options) {
      setNotificationItems((items) => [...items, options]);
      return () => destroy(options.seed);
    },
    destroyAll() {
      setNotificationItems([]);
    },
  }));

  function destroy(seed) {
    if (!seed) return;

    setNotificationItems((items) => {
      return items.filter((item) => item.seed !== seed);
    });
  }

  return (
    <NotificationContainerWrapper className="osn-notification-container">
      {notificationItems.map((item, index) => (
        <Notification
          key={item.seed}
          seed={item.seed}
          sortedIndex={notificationItems.length - index - 1}
          title={item.title}
          message={item.message}
          type={item.type}
          timeout={item.timeout}
          destroy={destroy}
          onClose={() => destroy(item.seed)}
        />
      ))}
    </NotificationContainerWrapper>
  );
}

export default forwardRef(NotificationContainer);
