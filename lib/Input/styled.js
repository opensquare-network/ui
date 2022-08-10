import styled from "styled-components";
import FlexCenter from "../styled/FlexCenter";
import {
  netural_grey_100,
  netural_grey_300,
  netural_grey_500,
  text_dark_accessory,
  text_dark_major,
} from "../styles/colors";
import { p_14_normal } from "../styles/textStyles";

export const InputWrapper = styled(FlexCenter)`
  height: 48px;
  box-sizing: border-box;
  background: ${netural_grey_100};
  border-bottom: 1px solid ${netural_grey_300};
  padding: 0 16px;

  :hover,
  :focus,
  :focus-within,
  :active {
    border-color: ${netural_grey_500};
  }
`;

export const StyledInput = styled.input`
  ${p_14_normal};

  color: ${text_dark_major};
  box-sizing: border-box;
  padding: 12px 0;
  width: 100%;
  border: none;
  background: none;
  outline: none;

  ::placeholder {
    color: ${text_dark_accessory};
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
