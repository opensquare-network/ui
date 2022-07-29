import styled from "styled-components";
import Button from "../../lib/styled/Button";
import { createToast, destroyAllToasts } from "../../lib/Toast";

export default {
  title: "Toast",
};

const DemoWrapper = styled.div`
  button {
    margin: 0 1rem 1rem 0;
  }
`;

export const primary = () => {
  return (
    <DemoWrapper>
      <Button
        onClick={() => {
          createToast({
            title: "Default",
            message: "Sit sed nulla rhoncus pellentesque.",
          });
        }}
      >
        Default
      </Button>
      <br />
      <Button
        onClick={() => {
          createToast({
            title: "Success",
            message: "Sit sed nulla rhoncus pellentesque.",
            type: "success",
          });
        }}
      >
        Success
      </Button>
      <br />
      <Button
        onClick={() => {
          createToast({
            title: "Pending",
            message: "Waiting for signing and syncing data...",
            type: "pending",
          });
        }}
      >
        Pending
      </Button>
      <br />
      <Button
        onClick={() => {
          createToast({
            title: "Error",
            message: "Sit sed nulla rhoncus pellentesque.",
            type: "error",
          });
        }}
      >
        Error
      </Button>
      <br />
      <Button
        onClick={() => {
          createToast({
            title: "Info",
            message: "Sit sed nulla rhoncus pellentesque.",
            type: "info",
          });
        }}
      >
        Info
      </Button>
      <br />
      <Button primary onClick={destroyAllToasts}>
        Destroy All
      </Button>
    </DemoWrapper>
  );
};
export const destroyTimeout = () => {
  return (
    <DemoWrapper>
      <Button
        onClick={() => {
          createToast({
            title: "Notice",
            message: "never auto destroy",
            timeout: false,
            type: "error",
          });
        }}
      >
        Never auto destroy
      </Button>
      <br />
      <Button
        onClick={() => {
          createToast({
            title: "Notice",
            message: "Destroy after 2 seconds",
            timeout: 2000,
            type: "error",
          });
        }}
      >
        Destroy after 2 seconds
      </Button>
    </DemoWrapper>
  );
};
