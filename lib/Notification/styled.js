import styled, { css } from "styled-components";
import FlexBetween from "../styled/FlexBetween";
import {
  primary_purple_500,
  primary_turquoise_500,
  secondary_green_500,
  secondary_red_500,
  text_dark_accessory,
  text_dark_major,
  text_dark_minor,
  primary_yellow_500,
} from "../styles/colors";
import { shadow_200 } from "../styles/effects";
import { p_14_normal, p_16_semibold } from "../styles/textStyles";

const BORDER_COLOR_MAP = {
  success: secondary_green_500,
  info: primary_purple_500,
  pending: primary_purple_500,
  error: secondary_red_500,
  notice: primary_turquoise_500,
  warning: primary_yellow_500,
};

export const NotificationWrapper = styled.div`
  border-left: 4px solid ${text_dark_accessory};
  padding: 16px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: ${shadow_200};

  ${(p) =>
    p.type &&
    css`
      border-left-color: ${BORDER_COLOR_MAP[p.type]};
    `}

  ${(p) =>
    p.size === "large" &&
    css`
      padding: 32px;
    `}


  /* Combine NotificationContainerWrapper to use */
  ${(p) =>
    p.slideIn &&
    css`
      transform: translateX(0)
        ${p.sortedIndex
          ? `translateY(calc(${p.sortedIndex * 100}% + ${
              p.sortedIndex * 20
            }px))`
          : ""} !important;
    `}
`;

export const NotificationHead = styled(FlexBetween)`
  margin-bottom: 4px;
`;

export const NotificationTitle = styled.div`
  ${p_16_semibold};
  color: ${text_dark_major};
`;

export const NotificationMessage = styled.div`
  ${p_14_normal};
  color: ${text_dark_minor};
  word-wrap: break-word;
  word-break: break-all;
`;

export const CloseIconWrapper = styled.div`
  svg {
    cursor: pointer;
    fill: ${text_dark_accessory};

    path {
      fill: ${text_dark_accessory};
    }

    :hover {
      fill: ${text_dark_minor};

      path {
        fill: ${text_dark_minor};
      }
    }
  }
`;

export const NotificationContainerWrapper = styled.div`
  position: fixed;
  top: 90px;
  right: 80px;
  z-index: 99999;

  @media screen and (max-width: 500px) {
    width: 100%;
    top: 40px;
    right: 0;
    padding: 0 20px;
  }

  ${NotificationWrapper} {
    width: 296px;
    transform: translateX(200%);
    transition: transform 0.25s ease-out;

    position: absolute;
    top: 0;
    right: 0;
  }
`;
