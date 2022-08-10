import Input from "../../lib/Input";
import styled from "styled-components";
import Button from "../../lib/styled/Button";
import { useState } from "react";
import { LoadingIcon } from "../../lib/Icon";

export default {
  title: "Input",
  component: Input,
};

const DemoWrapper = styled.div`
  width: 400px;
`;

export const primary = () => (
  <DemoWrapper>
    <Input />
  </DemoWrapper>
);
export const placeholder = () => <Input placeholder="Input your name" />;
export const typeNumber = () => <Input type="number" />;
export const suffixLoading = () => {
  const [loading, setLoading] = useState(false);

  return (
    <DemoWrapper>
      <Input suffix={loading && <LoadingIcon />} />

      <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>
    </DemoWrapper>
  );
};
