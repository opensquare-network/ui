import Toggle from "../../lib/Toggle";
import { useState } from "react";

export default {
  title: "Toggle",
  component: Toggle,
};

export const primary = () => {
  const [on, setOn] = useState(false);

  return <Toggle on={on} setOn={setOn} />;
};
