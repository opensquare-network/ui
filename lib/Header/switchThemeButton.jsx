import { SystemComputer, SystemMoon, SystemSun } from "@osn/icons/opensquare";
import Button from "../styled/Button";
import { useFloating } from "@floating-ui/react";
import { useState } from "react";
import { cn } from "../utils";
import { useThemeMode } from "../hooks/theme";
import { useClickAway } from "react-use";

export default function HeaderSwitchThemeButton() {
  const [, setMode, mode] = useThemeMode();

  const [visible, setVisible] = useState(false);
  const { refs, floatingStyles } = useFloating({
    placement: "bottom-end",
  });

  useClickAway(refs.reference, () => {
    setVisible(false);
  });

  const themeButtons = [
    {
      icon: <SystemSun className="[&_path]:fill-textTertiary" />,
      value: "light",
    },
    {
      icon: <SystemMoon className="[&_path]:fill-textTertiary" />,
      value: "dark",
    },
    {
      icon: <SystemComputer className="[&_path]:fill-textTertiary" />,
      value: "system",
    },
  ];

  const currentIcon =
    themeButtons.find((button) => button.value === mode)?.icon ||
    themeButtons[0].icon;

  return (
    <Button
      ref={refs.setReference}
      className="!px-2 !border-strokeActionDefault hover:!border-strokeActionActive"
      onClick={() => {
        setVisible(true);
      }}
    >
      <div className="[&_svg_path]:fill-textSecondary">{currentIcon}</div>

      {visible && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className={cn("w-80", "py-2", "bg-fillBgPrimary shadow-shadowPopup")}
        >
          {themeButtons.map((button) => (
            <div
              role="button"
              key={button.value}
              className={cn(
                "flex items-center py-2 px-4",
                "text14Medium",
                "hover:bg-fillBgTertiary",
                mode === button.value && "bg-fillBgTertiary",
              )}
              onClick={(event) => {
                event.stopPropagation();
                setMode(button.value);
                setVisible(false);
              }}
            >
              {button.icon}
              <span className="capitalize ml-2">{button.value}</span>
            </div>
          ))}
        </div>
      )}
    </Button>
  );
}
