import { useAtomValue, useSetAtom } from "jotai";
import React from "react";
import { notificationItemsAtom } from "./atom";
import Notification from "./Notification";
import { NotificationContainerWrapper } from "./styled";

export default function NotificationContainer() {
  const notificationItems = useAtomValue(notificationItemsAtom);
  const setNotificationItems = useSetAtom(notificationItemsAtom);

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
