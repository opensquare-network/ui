import Time from "../../lib/Time";

export default {
  title: "Time",
  component: Time,
};

export const primary = () => <Time time="2022-04-13" />;
export const yearsAgo = () => <Time time="2012-12-21" />;
export const fromNow = () => <Time time="2125-12-31" />;
