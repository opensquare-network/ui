import styled from "styled-components";
import { Dropdown as DropdownBase } from "semantic-ui-react";
import "semantic-ui-css/components/dropdown.min.css";
import "semantic-ui-css/components/transition.min.css";
import { ArrowCaretDown } from "@osn/icons/opensquare";
import { cn } from "../utils";

const StyledDropdown = styled(DropdownBase)`
  width: 100%;
  height: 64px !important;
  border-radius: 0 !important;
  background-color: var(--fillBgPrimary) !important;
  border-color: var(--strokeActionDefault) !important;
  :active,
  :hover,
  :focus {
    border-color: var(--strokeActionActive) !important;
  }
  &.active,
  & .menu {
    border-color: var(--strokeActionActive) !important;
    background-color: var(--fillBgPrimary) !important;
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
      font-size: inherit;
      border-top: none !important;
      color: var(--textPrimary) !important;
      padding: 8px 16px !important;

      &.selected,
      &:hover {
        background-color: var(--fillBgTertiary);
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
