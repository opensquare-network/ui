import { useIsScreen } from "@osn/common";

/**
 * @description Only render the DOM if in mobile
 */
export default function OnlyMobile({ children }) {
  const { isMobile } = useIsScreen();
  return <>{isMobile && children}</>;
}
