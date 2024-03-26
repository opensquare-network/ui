import styled from "styled-components";
import Flex from "../styled/Flex";

export const Title = styled.h4.attrs({ className: "text20Semibold" })`
  color: var(--textPrimary);
  margin-bottom: 8px;
  margin-top: 0;
`;

export const Text = styled.p.attrs({ className: "text16Semibold" })`
  color: var(--textPrimary);
`;

export const Description = styled.p.attrs({ className: "text14Medium" })`
  color: var(--textFeedbackError);
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
