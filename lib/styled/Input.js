import styled from "styled-components";

const styledInput = styled.input.attrs({ className: "text14Medium" })`
  all: unset;
  box-sizing: border-box;
  padding: 12px 16px;
  width: 100%;
  background-color: var(--fillBgInputDefault);
  border-bottom: 1px solid var(--strokeActionDefault);
  :hover,
  :focus,
  :active {
    border-color: var(--strokeActionActive);
  }
  color: var(--textPrimary);
  ::placeholder {
    color: var(--textSecondary);
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

/**
 * @deprecated use Input
 */
export default styledInput;
