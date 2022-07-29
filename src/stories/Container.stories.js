import Container from "../../lib/styled/Container";

export default {
  title: "Container",
  component: Container,
  parameters: {
    docs: {
      description: {
        component: "max-width: 1080px;",
      },
    },
  },
};

export const primary = () => <Container>Container</Container>;
