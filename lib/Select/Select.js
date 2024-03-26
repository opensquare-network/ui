import { useOnClickOutside } from "@osn/common";
import { useMemo, useRef, useState } from "react";
import { noop } from "../utils";
import {
  SelectCaretDownIconWrapper,
  SelectOption,
  SelectOptionsWrapper,
  SelectWrapper,
} from "./styled";
import { ArrowCaretDown } from "@osn/icons/opensquare";

const SIZES_STYLES = {
  small: {
    height: 32,
    paddingX: 8,
    paddingY: 6,
    count: 4,
  },
  default: {
    height: 48,
    paddingX: 16,
    paddingY: 12,
    count: 4,
  },
  large: {
    height: 72,
    paddingX: 16,
    paddingY: 12,
    count: 3,
  },
};

/**
 * @param {import("./types").SelectProps} props
 */
function Select(props) {
  const {
    value,
    options = [],
    size = "default",
    onSelect = noop,
    className = "",
    width,
    ...restProps
  } = props ?? {};

  const ref = useRef();
  const [active, setActive] = useState(false);

  const selectedOption = useMemo(() => {
    return options.find((option) => option.value === value) ?? {};
  }, [value]);

  const sizeStyle = SIZES_STYLES[size];

  useOnClickOutside(ref, () => setActive(false));

  return (
    <SelectWrapper
      ref={ref}
      className={`osn-select ${className}`}
      $active={active}
      onClick={() => setActive(!active)}
      height={sizeStyle.height}
      width={width}
      {...restProps}
    >
      <SelectCaretDownIconWrapper right={sizeStyle.paddingX}>
        <ArrowCaretDown className="[&_path]:fill-textPrimary" />
      </SelectCaretDownIconWrapper>

      <SelectOption
        className="osn-select-value"
        height={sizeStyle.height}
        $paddingX={sizeStyle.paddingX}
        $paddingY={sizeStyle.paddingY}
      >
        {selectedOption.content ?? selectedOption.value}
      </SelectOption>

      {active && (
        <SelectOptionsWrapper height={sizeStyle.height} count={sizeStyle.count}>
          {options.map((option, index) => (
            <SelectOption
              key={index}
              className="osn-select-option"
              selected={option.value === value}
              onClick={() => onSelect(option.value)}
              height={sizeStyle.height}
              $paddingX={sizeStyle.paddingX}
              $paddingY={sizeStyle.paddingY}
            >
              {option.content}
            </SelectOption>
          ))}
        </SelectOptionsWrapper>
      )}
    </SelectWrapper>
  );
}

export default Select;
