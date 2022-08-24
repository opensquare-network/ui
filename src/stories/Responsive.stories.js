import OnlyDesktop from "../../lib/Responsive/OnlyDesktop";
import OnlyMobile from "../../lib/Responsive/OnlyMobile";

export default {
  title: "Responsive",
};

export const onlyDesktop = () => {
  return <OnlyDesktop>Desktop Content</OnlyDesktop>;
};

export const onlyMobile = () => {
  return <OnlyMobile>Mobile Content</OnlyMobile>;
};
