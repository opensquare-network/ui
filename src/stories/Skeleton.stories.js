import ListLoader from "../../lib/Skeleton/ListLoader";
import DetailLoader from "../../lib/Skeleton/DetailLoader";

export default {
  title: "Skeleton",
  subcomponents: {
    DetailLoader,
    ListLoader,
  },
};

export const detailLoader = () => <DetailLoader />;
export const listLoader = () => <ListLoader />;
