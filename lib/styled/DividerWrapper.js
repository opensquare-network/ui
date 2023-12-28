import styled from "styled-components";

const DividerWrapper = styled.div`
  display: flex;
  align-items: center;
  > :not(:last-child)::after {
    content: "·";
    margin: 0 8px;
    color: var(--textTertiary);
  }
`;

export default DividerWrapper;
