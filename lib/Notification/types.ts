export type NotificationType =
  | "notification"
  | "success"
  | "error"
  | "info"
  | "pending"
  | "notice";

export type NotificationOptions = {
  title?: string;
  message?: string;
  type?: NotificationType;
  /**
   * @default 5000
   * unit ms
   */
  timeout?: false | number;
  appendTo?: HTMLElement;
};

export type NotificationProps = Omit<NotificationOptions, "appendTo"> & {
  seed: number;
  sortedIndex: number;
  destroy?(seed?: number): void;
  onClose?(): void;
  closable?: boolean;
  size?: "large";
};

export type CreateNotificationOptions = NotificationOptions & {
  seed: number;
};

export type CreateNotification = (
  options: CreateNotificationOptions,
) => DestroyCallback;

export type DestroyCallback = () => void;

export type NotificationShortcuts = {
  open: CreateNotification;
  destroyAll(): void;
} & Omit<Record<NotificationType, CreateNotification>, "notification">;
