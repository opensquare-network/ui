import Input from "../../lib/styled/Input";

export default {
  title: "Input",
  component: Input,
};

export const primary = () => <Input />;
export const placeholder = () => <Input placeholder="Input your name" />;
export const typeNumber = () => <Input type="number" />;
