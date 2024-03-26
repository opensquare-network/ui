import styled from "styled-components";
import { MOBILE_SIZE } from "@osn/constants";

/**
 * @deprecated use `OnlyMobile`
 */
const MobileVisible = styled.div`
  display: flex;
  @media screen and (min-width: ${MOBILE_SIZE}px) {
    display: none;
  }
`;

export default MobileVisible;
