import Time from "../../lib/Time";

export default {
  title: "Time",
  component: Time,
};

export const primary = () => <Time time="2022-04-13" />;
export const yearsAgo = () => <Time time="2012-12-21" />;
