import styled from "styled-components";
import Notification, {
  notification,
  useNotification,
  NotificationContainer,
} from "../../lib/Notification";
import Button from "../../lib/styled/Button";

export default {
  title: "Notification",
  component: Notification,
};

const DemoWrapper = styled.div`
  .osn-notification {
    margin-bottom: 1rem;
  }
`;

const DemoCallApiWrapper = styled.div`
  button {
    margin-bottom: 1rem;
  }
`;

export const primary = () => {
  return (
    <DemoWrapper>
      <Notification message="Message" />
      <Notification type="info" closable={false} message="Closable false" />
      <Notification type="success" message="Message" />
      <Notification type="notice" message="Message" />
      <Notification type="error" message="Message" />
    </DemoWrapper>
  );
};

export const hooks = () => {
  const notification = useNotification();

  return (
    <DemoCallApiWrapper>
      <NotificationContainer />
      <Button
        onClick={() => {
          notification.open({
            message: "Sit sed nulla rhoncus pellentesque.",
          });
        }}
      >
        Default
      </Button>
      <br />
      <Button
        onClick={() => {
          notification.success({
            message: "Sit sed nulla rhoncus pellentesque.",
          });
        }}
      >
        Success
      </Button>
      <br />
      <Button
        onClick={() => {
          notification.pending({
            message: "Waiting for signing and syncing data...",
            timeout: false,
          });
        }}
      >
        Pending
      </Button>
      <br />
      <Button
        onClick={() => {
          notification.error({
            message: "Sit sed nulla rhoncus pellentesque.",
          });
        }}
      >
        Error
      </Button>
      <br />
      <Button
        onClick={() => {
          notification.info({
            message: "Sit sed nulla rhoncus pellentesque.",
          });
        }}
      >
        Info
      </Button>
      <br />
      <Button primary onClick={notification.destroyAll}>
        Destroy All
      </Button>
    </DemoCallApiWrapper>
  );
};
