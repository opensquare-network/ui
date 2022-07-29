import React from "react";
import styled from "styled-components";
import Dropdown from "../styled/Dropdown";

const Wrapper = styled.div``;

const DropdownWrapper = styled.div`
  position: relative;
  height: 48px;
`;

const StyledDropdown = styled(Dropdown)`
  height: 48px !important;
`;

const OptionWrapper = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
`;

const Header = styled(OptionWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 10;
  padding: 0 16px;
`;

const DropdownSelector = ({ options = [], value, onSelect = () => {} }) => {
  return (
    <Wrapper>
      <DropdownWrapper>
        <StyledDropdown
          selection
          options={options}
          onChange={(_, { value }) => {
            onSelect(value);
          }}
        />
        <Header>{options.find((item) => item.value === value)?.content}</Header>
      </DropdownWrapper>
    </Wrapper>
  );
};

export default DropdownSelector;
