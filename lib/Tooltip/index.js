import React, { isValidElement } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { useState } from "react";
import { cn } from "../utils";

export default function Tooltip({
  defaultOpen = false,
  delayDuration = 0,
  content,
  children,
  side,
  sideOffset = 2,
  hideOnClick = true,
  className = "",
  asChild,
  ...restProps
}) {
  const [open, setOpen] = useState(defaultOpen);

  const shouldAsChild = asChild ?? isValidElement(children);

  const tooltipContent = content && (
    <RadixTooltip.Portal>
      <RadixTooltip.Content
        sideOffset={sideOffset}
        side={side}
        className={cn(
          "z-[10000] py-2 px-3",
          "text14Medium break-words text-textPrimaryContrast",
          "bg-fillBgPrimaryContrast",
        )}
      >
        {content}
        <RadixTooltip.Arrow className="fill-fillBgPrimaryContrast" />
      </RadixTooltip.Content>
    </RadixTooltip.Portal>
  );

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root
        delayDuration={delayDuration}
        defaultOpen={defaultOpen}
        open={!hideOnClick ? open : undefined}
        {...restProps}
      >
        <RadixTooltip.Trigger
          asChild={shouldAsChild}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className={className}
        >
          {children}
        </RadixTooltip.Trigger>

        {tooltipContent}
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
