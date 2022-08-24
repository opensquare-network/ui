import { useIsScreen } from "@osn/common";

/**
 * @description Only render the DOM if in desktop
 */
export default function OnlyDesktop({ children }) {
  const { isDesktop } = useIsScreen();
  return <>{isDesktop && children}</>;
}
