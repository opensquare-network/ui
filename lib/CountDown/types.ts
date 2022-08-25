export type CountDownProps = {
  blockHeight?: number;
  startBlockHeight?: number;
  endBlockHeight?: number;
  size?: number;
  foregroundColor?: string;
  backgroundColor?: string;

  /**
   * @default true
   */
  showTooltip?: boolean;
};
