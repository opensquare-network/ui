import Header from "../../lib/Header";
import styled from "styled-components";
import Button from "../../lib/styled/Button";

export default {
  title: "Header",
  component: Header,
};

export const primary = () => <Header />;
export const content = () => {
  return (
    <Header>
      <div>content</div>
    </Header>
  );
};
export const prefix = () => {
  return (
    <Header prefix={<div>prefix</div>}>
      <div>content</div>
    </Header>
  );
};
export const logoRender = () => {
  const LogoWrapper = styled.a`
    cursor: pointer;
  `;

  const logoRender = (logo) => {
    return <LogoWrapper href="/">{logo}</LogoWrapper>;
  };

  return <Header logoRender={logoRender} />;
};

export const links = () => {
  return (
    <Header links={[{ content: "New Space" }, { content: "Discussions" }]} />
  );
};

export const connectButton = () => {
  return (
    <Header
      links={[{ content: "New Space" }, { content: "Discussions" }]}
      connectButton={
        <div>
          <Button primary>Connect Button</Button>
        </div>
      }
    />
  );
};
