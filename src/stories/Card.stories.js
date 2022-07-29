import Card from "../../lib/Card";
import styled from "styled-components";

export default {
  title: "Card",
  component: Card,
};

const DemoWrapper = styled.div`
  .osn-card {
    margin-bottom: 30px;
  }
`;

const Link = styled.a`
  color: #40a9ff;
  cursor: pointer;
  &:hover {
    color: #096dd9;
  }
`;

export const primary = () => (
  <DemoWrapper>
    <Card title="Default size card" extra={<Link href="/">Extra link</Link>}>
      <p>Card content</p>
    </Card>
    <Card
      title="Small size card"
      size="small"
      extra={<Link href="/">Extra link</Link>}
    >
      <p>Card content</p>
    </Card>
  </DemoWrapper>
);
export const noShadow = () => (
  <DemoWrapper>
    <Card
      title="Default size card"
      shadow={false}
      extra={<Link href="/">Extra link</Link>}
    >
      <p>Card content</p>
    </Card>
    <Card
      title="Small size card"
      size="small"
      shadow={false}
      extra={<Link href="/">Extra link</Link>}
    >
      <p>Card content</p>
    </Card>
  </DemoWrapper>
);
export const noBorder = () => (
  <DemoWrapper>
    <Card
      title="Default size card"
      bordered={false}
      extra={<Link href="/">Extra link</Link>}
    >
      <p>Card content</p>
    </Card>
    <Card
      title="Small size card"
      size="small"
      bordered={false}
      extra={<Link href="/">Extra link</Link>}
    >
      <p>Card content</p>
    </Card>
  </DemoWrapper>
);
export const onlyContent = () => (
  <Card>
    <p>Card content</p>
  </Card>
);
export const customizeHead = () => {
  const Heading = styled.h1`
    font-weight: lighter;
    color: #333;
    font-size: 3rem;
  `;

  return (
    <Card head={<Heading>Customized heading</Heading>}>
      <p>Card content</p>
    </Card>
  );
};
export const prefixAndSuffix = () => {
  const Box = styled.div`
    width: 80px;
    height: 80px;
    border: 1px solid #f0f3f8;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Card
      title="Card prefix and suffix"
      size="small"
      prefix={<Box>Prefix</Box>}
      suffix={<Box>Suffix</Box>}
    >
      <p>Card content</p>
    </Card>
  );
};
