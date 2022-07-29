import Collapse from "../../lib/Collapse";

export default {
  title: "Collapse",
  component: Collapse,
};

export const primary = () => {
  return <Collapse title="Collapse title">content</Collapse>;
};

export const ghost = () => {
  return (
    <Collapse title="Collapse title" ghost>
      content
    </Collapse>
  );
};
