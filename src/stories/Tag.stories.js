import styled from "styled-components";
import Tag from "../../lib/Tag";

export default {
  title: "Tag",
  component: Tag,
};

export const primary = () => <Tag>default</Tag>;
export const presetColors = () => {
  const Wrapper = styled.div`
    > * {
      margin-right: 10px;
    }
  `;

  return (
    <Wrapper>
      <Tag color="purple">purple</Tag>
      <Tag color="gray">gray</Tag>
      <Tag color="turquoise">turquoise</Tag>
    </Wrapper>
  );
};
export const customColors = () => {
  const Wrapper = styled.div`
    > * {
      margin-right: 10px;
    }
  `;

  return (
    <Wrapper>
      <Tag color="orange">orange</Tag>
      <Tag color="#ff0055">#ff0055</Tag>
    </Wrapper>
  );
};
