import Header from "../../lib/Header";
import styled from "styled-components";

export default {
  title: "Header",
  component: Header,
};

export const primary = () => <Header />;
export const content = () => {
  const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `;

  return (
    <Header>
      <Content>
        <div>left content</div>
        <div>right content</div>
      </Content>
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
