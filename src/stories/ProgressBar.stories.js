import React from "react";

import ProgressBar from "../../lib/styled/ProgressBar";

export default {
  title: "ProgressBar",
  component: ProgressBar,
};
export const Primary = () => <ProgressBar percent={3} />;
export const Fulfilled = () => <ProgressBar percent={100} />;
