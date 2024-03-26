import React from "react";
import styled from "styled-components";
import FlexCenter from "../styled/FlexCenter";
import Card from "../Card";

const Message = styled(FlexCenter)`
  color: var(--textTertiary);
  height: 66px;
`;

/**
 * @param {import("./types").NoDataProps} props
 * @description Wrapped `Card` component
 */
export default function NoData(props) {
  const { message = "No current data", ...restProps } = props ?? {};

  return (
    <Card {...restProps}>
      <Message>{message}</Message>
    </Card>
  );
}
