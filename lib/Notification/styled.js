import styled, { css } from "styled-components";
import FlexBetween from "../styled/FlexBetween";

const BORDER_COLOR_MAP = {
  success: "var(--textFeedbackSuccess)",
  info: "var(--textBrandPrimary)",
  pending: "var(--textBrandPrimary)",
  error: "var(--textFeedbackError)",
  notice: "var(--textBrandSecondary)",
  warning: "var(--textFeedbackWarning)",
};

export const NotificationWrapper = styled.div`
  border-left: 4px solid var(--strokeActionDefault);
  padding: 16px;
  width: 100%;
  background-color: var(--fillBgPrimary);
  box-shadow: var(--shadowPopup);

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
    p.$slideIn &&
    css`
      transform: translateX(0)
        ${p.$sortedIndex
          ? `translateY(calc(${p.$sortedIndex * 100}% + ${
              p.$sortedIndex * 20
            }px))`
          : ""} !important;
    `}
`;

export const NotificationHead = styled(FlexBetween)`
  margin-bottom: 4px;
`;

export const NotificationTitle = styled.div.attrs({
  className: "text16Semibold",
})`
  color: var(--textPrimary);
`;

export const NotificationMessage = styled.div.attrs({
  className: "text14Medium",
})`
  color: var(--textSecondary);
  word-wrap: break-word;
  word-break: break-all;
`;

export const CloseIconWrapper = styled.div`
  svg {
    cursor: pointer;
    fill: var(--textTertiary);

    path {
      fill: var(--textTertiary);
    }

    :hover {
      fill: var(--textSecondary);

      path {
        fill: var(--textSecondary);
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
