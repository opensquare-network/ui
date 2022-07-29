type ToastType = "success" | "error" | "info" | "pending";

export type ToastOptions = {
  title?: string;
  message?: string;
  type?: ToastType;
  /**
   * @default 5000
   * unit ms
   */
  timeout?: false | number;
  appendTo?: HTMLElement;
};

export type ToastItemProps = Omit<ToastOptions, "appendTo"> & {
  seed: number;
  sortedIndex: number;
  destroy?(seed?: number): void;
};

export type ToastCreateOption = ToastOptions & {
  seed: number;
};

export type ToastCreate = (options: ToastCreateOption) => DestroyCallback;

export type DestroyCallback = () => void;

export declare function createToast(options: ToastOptions): DestroyCallback;
export declare function destroyAllToasts(): void;
