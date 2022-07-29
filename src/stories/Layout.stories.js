import Layout from "../../lib/styled/Layout";

export default {
  title: "Layout",
  component: Layout,
  parameters: {
    docs: {
      description: {
        component: "min-height: 100vh;",
      },
    },
  },
};

export const primary = () => <Layout>Layout</Layout>;
