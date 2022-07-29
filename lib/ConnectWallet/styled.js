import styled from "styled-components";
import {
  p_14_normal,
  p_16_semibold,
  p_20_semibold,
} from "../styles/textStyles";
import { text_dark_major, secondary_red_500 } from "../styles/colors";
import Flex from "../styled/Flex";

export const Title = styled.h4`
  ${p_20_semibold};
  color: ${text_dark_major};
  margin-bottom: 8px;
  margin-top: 0;
`;

export const Text = styled.p`
  ${p_16_semibold};
  color: ${text_dark_major};
`;

export const Description = styled.p`
  ${p_14_normal};
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
