import styled from "styled-components";
import CountDown from "../../lib/CountDown";

export default {
  title: "CountDown",
  component: CountDown,
};

const DemoWrapper = styled.div`
  margin: 100px 0 0 150px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 5px;
  }
`;

export const primary = () => {
  return (
    <DemoWrapper>
      <Text>
        <CountDown
          blockTime={12000}
          blockHeight={11353045}
          startBlockHeight={11220214}
          endBlockHeight={11404800}
        />
        <p>Some description</p>
      </Text>
    </DemoWrapper>
  );
};

export const color = () => {
  return (
    <DemoWrapper>
      <CountDown
        blockTime={12000}
        blockHeight={11353045}
        startBlockHeight={11220214}
        endBlockHeight={11404800}
        foregroundColor="#2196F3"
        backgroundColor="rgba(33, 150, 243, 0.1)"
      />
    </DemoWrapper>
  );
};

export const noTooltip = () => {
  return (
    <DemoWrapper>
      <CountDown
        blockTime={12000}
        blockHeight={11353045}
        startBlockHeight={11220214}
        endBlockHeight={11404800}
        showTooltip={false}
      />
    </DemoWrapper>
  );
};
