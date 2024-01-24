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

  const currentThemeButton =
    themeButtons.find((button) => button.value === mode) || themeButtons[0];

  return (
    <Button
      ref={refs.setReference}
      className={cn(
        "!px-2 !border-strokeActionDefault hover:!border-strokeActionActive",
        "w-full",
        "max-sm:!px-4",
      )}
      onClick={() => {
        setVisible(true);
      }}
    >
      <span className="[&_svg_path]:fill-textSecondary text14Medium w-full inline-flex items-center justify-between gap-x-2">
        <span className="flex items-center gap-x-2">
          {currentThemeButton.icon}
          <span className="sm:hidden">Theme</span>
        </span>

        <span className="capitalize text-textTertiary sm:hidden">
          {currentThemeButton.value}
        </span>
      </span>

      {visible && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className={cn(
            "w-80 max-w-full",
            "py-2",
            "bg-fillBgPrimary shadow-shadowPopup",
          )}
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
