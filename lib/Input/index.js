import { InputWrapper, StyledInput, Suffix } from "./styled";

/**
 * @param {import("./types").InputProps} props
 */
function Input(props) {
  const { suffix, ...restProps } = props ?? {};

  return (
    <InputWrapper>
      <StyledInput {...restProps} />

      {suffix && <Suffix>{suffix}</Suffix>}
    </InputWrapper>
  );
}

export default Input;
