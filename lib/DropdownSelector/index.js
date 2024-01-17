import React from "react";
import styled from "styled-components";
import Dropdown from "../styled/Dropdown";

const StyledDropdown = styled(Dropdown)`
  height: inherit !important;
`;

const OptionWrapper = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
`;

const Header = styled(OptionWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  padding: 8px 16px;
`;

const DropdownWrapper = styled.div`
  position: relative;
  height: 48px;

  &:has(.visible.menu) {
    ${Header} {
      z-index: 10;
    }
  }
`;

const DropdownSelector = ({
  options = [],
  value,
  onSelect = () => {},
  className = "",
}) => {
  return (
    <DropdownWrapper className={className}>
      <StyledDropdown
        selection
        options={options}
        onChange={(_, { value }) => {
          onSelect(value);
        }}
        className={className}
      />
      <Header>{options.find((item) => item.value === value)?.content}</Header>
    </DropdownWrapper>
  );
};

export default DropdownSelector;
