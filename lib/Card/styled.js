import styled from "styled-components";
import { cn } from "../utils";

export const CardHeadTitle = styled.div.attrs((props) => {
  return {
    className: cn("text16Semibold", props?.size === "small" && "text14Medium"),
  };
})`
  margin: 0;
`;
