import { SystemLoading2 } from "@osn/icons/opensquare";
import React, { forwardRef } from "react";
import { cn } from "../utils";

function Button(
  {
    children,
    disabled,
    primary,
    large,
    isLoading,
    block,
    onClick = () => {},
    className = "",
    ...rest
  },
  ref,
) {
  const handleClick = (e) => {
    if (isLoading || disabled) {
      e.preventDefault();
      return;
    }
    onClick(e);
  };

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      {...rest}
      onClick={handleClick}
      className={cn(
        "text14Medium",
        "h-10",
        "inline-flex items-center justify-center",
        "py-2 px-4",
        "border border-strokeActionDefault hover:border-strokeActionActive",
        "bg-fillBgPrimary",

        large && "py-3 px-6",
        block && "w-full",

        "disabled:text-textTertiary disabled:border-strokeActionDefault disabled:cursor-not-allowed",
        isLoading && "!cursor-wait",

        primary &&
          cn(
            "!text-textPrimaryContrast",
            "border-fillBgBrandSecondary bg-fillBgBrandSecondary",
            "disabled:border-strokeActionDefault disabled:bg-fillBgBrandDisable",
          ),

        className,
      )}
    >
      {isLoading ? <SystemLoading2 /> : children}
    </button>
  );
}

export default forwardRef(Button);
