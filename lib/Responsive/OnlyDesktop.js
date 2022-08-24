import { useIsScreen } from "@osn/common";

/**
 * @description Only render the DOM if in desktop
 */
export default function OnlyDesktop({ children }) {
  const { isDesktop } = useIsScreen();

  if (isDesktop) {
    return children;
  }

  return null;
}
