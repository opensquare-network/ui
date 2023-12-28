import styled from "styled-components";
import { Dropdown as DropdownBase } from "semantic-ui-react";
import { ArrowCaretDown } from "@osn/icons/opensquare";
import { cn } from "../utils";

const StyledDropdown = styled(DropdownBase)`
  width: 100%;
  height: 64px !important;
  border-radius: 0 !important;
  :active,
  :hover,
  :focus {
    border-color: #cccccc !important;
  }
  &.active,
  & .menu {
    border-color: #cccccc !important;
  }
  .ui.selection.dropdown {
    min-height: 48px !important;
  }
  &.ui.dropdown .menu {
    border-radius: 0 !important;

    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      width: 10px;
      padding: 0px;
      background-color: var(--strokeActionActive);
      border: 2px solid transparent;
      background-clip: padding-box;
    }

    > .item {
      border-top: none !important;

      &.selected,
      &:hover {
        background-color: $var(--fillBgTertiary);
      }
    }
  }
  .icon {
    top: 50% !important;
    transform: translate(0, -50%) !important;
    right: 16px !important;
    margin: 0 !important;
  }

  &.active {
    .icon {
      transform: translate(0, -50%) rotate(180deg) !important;
    }
  }
`;

/**
 * @param {import("semantic-ui-react").DropdownProps} props
 */
export default function Dropdown(props = {}) {
  return (
    <StyledDropdown
      {...props}
      icon={
        props?.icon || (
          <ArrowCaretDown
            className={cn("icon absolute", "[&_path]:fill-textPrimary")}
          />
        )
      }
    />
  );
}

Dropdown.Divider = DropdownBase.Divider;
Dropdown.Header = DropdownBase.Header;
Dropdown.Item = DropdownBase.Item;
Dropdown.Menu = DropdownBase.Menu;
Dropdown.SearchInput = DropdownBase.SearchInput;
