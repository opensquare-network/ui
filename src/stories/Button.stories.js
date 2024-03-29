import styled from "styled-components";
import Button from "../../lib/styled/Button";

export default {
  title: "Button",
  component: Button,
};

const DemoWrapper = styled.div`
  display: flex;
  button {
    margin-right: 10px;
    margin-bottom: 12px;
  }
`;

export const primary = () => (
  <DemoWrapper>
    <Button primary>primary</Button>
    <Button primary disabled>
      disabled
    </Button>
    <Button primary isLoading>
      isLoading
    </Button>
  </DemoWrapper>
);
export const Default = () => (
  <DemoWrapper>
    <Button>default</Button>
    <Button disabled>disabled</Button>
    <Button isLoading>isLoading</Button>
  </DemoWrapper>
);
export const block = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    <Button primary block>
      block
    </Button>
    <Button block>block</Button>
    <Button block disabled>
      disabled
    </Button>
  </div>
);
export const onClick = () => {
  const greeting = () => alert("Hello");

  return (
    <DemoWrapper>
      <Button onClick={greeting}>greeting</Button>
      <Button disabled onClick={greeting}>
        won't work
      </Button>
    </DemoWrapper>
  );
};
export const sizes = () => (
  <>
    <DemoWrapper>
      <Button primary large>
        primary large
      </Button>
      <Button large>detault large</Button>
    </DemoWrapper>
    <DemoWrapper>
      <Button primary>primary</Button>
      <Button>detault</Button>
    </DemoWrapper>
  </>
);
