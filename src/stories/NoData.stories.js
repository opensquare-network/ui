import NoData from "../../lib/NoData";
import styled from "styled-components";

export default {
  title: "NoData",
  component: NoData,
};

export const primary = () => <NoData />;

export const customMessage = () => <NoData message="No current posts" />;
