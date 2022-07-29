import { useState } from "react";
import DropdownSelector from "../../lib/DropdownSelector";

export default {
  title: "DropdownSelector",
  component: DropdownSelector,
  parameters: {
    docs: {
      description: {
        component: "requires semantic-ui-css",
      },
    },
  },
};

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

export const primary = () => {
  const [value, setValue] = useState("option-2");

  return (
    <DropdownSelector options={options} value={value} onSelect={setValue} />
  );
};
