import styled from "styled-components";
import FlexCenter from "../styled/FlexCenter";
import { netural_grey_100, netural_grey_500 } from "../styles/colors";

export const InputWrapper = styled(FlexCenter)`
  height: 48px;
  box-sizing: border-box;
  background: ${netural_grey_100};
  border-bottom: 1px solid var(--strokeActionDefault);
  padding: 0 16px;

  :hover,
  :focus,
  :focus-within,
  :active {
    border-color: ${netural_grey_500};
  }
`;

export const StyledInput = styled.input.attrs({ className: "text14Medium" })`
  color: var(--textPrimary);
  box-sizing: border-box;
  padding: 12px 0;
  width: 100%;
  border: none;
  background: none;
  outline: none;

  ::placeholder {
    color: var(--textTertiary);
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Suffix = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;
