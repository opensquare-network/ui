import styled from "styled-components";
import { text_dark_major, secondary_red_500 } from "../styles/colors";
import Flex from "../styled/Flex";

export const Title = styled.h4.attrs({ className: "text20Semibold" })`
  color: ${text_dark_major};
  margin-bottom: 8px;
  margin-top: 0;
`;

export const Text = styled.p.attrs({ className: "text16Semibold" })`
  color: ${text_dark_major};
`;

export const Description = styled.p.attrs({ className: "text14Medium" })`
  color: ${secondary_red_500};
`;

export const ActionBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 20px;
`;

export const ConnectButton = styled(Flex)`
  svg {
    margin-right: 8px;
  }
`;
