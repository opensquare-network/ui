import { useState } from "react";
import styled from "styled-components";
import Select from "../../lib/Select";

export default {
  title: "Select",
  component: Select,
};

const DemoWrapper = styled.div`
  .osn-select {
    margin-bottom: 1rem;
  }
`;

export const primary = () => {
  const options = Array.from({ length: 10 })
    .fill(null)
    .map((_, index) => {
      const i = index + 1;

      return {
        id: i,
        content: `Option ${i}`,
        value: `option-${i}`,
      };
    });

  const [value, setValue] = useState("option-1");
  function onSelect(v) {
    setValue(v);
  }

  return <Select options={options} value={value} onSelect={onSelect} />;
};

export const sizes = () => {
  const options = Array.from({ length: 10 })
    .fill(null)
    .map((_, index) => {
      const i = index + 1;

      return {
        id: i,
        content: `Option ${i}`,
        value: `option-${i}`,
      };
    });

  const [value, setValue] = useState("option-1");
  function onSelect(v) {
    setValue(v);
  }

  return (
    <DemoWrapper>
      <Select
        size="large"
        options={options}
        value={value}
        onSelect={onSelect}
      />
      <Select options={options} value={value} onSelect={onSelect} />
      <Select
        size="small"
        options={options}
        value={value}
        onSelect={onSelect}
      />
    </DemoWrapper>
  );
};
