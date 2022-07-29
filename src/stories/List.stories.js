import { useState } from "react";
import List from "../../lib/List";
import Button from "../../lib/styled/Button";
import Card from "../../lib/Card";

export default {
  title: "List",
  component: List,
};

export const primary = () => {
  const data = ["OpenSquare Network", "Paid Qa", "Votes"];

  return (
    <List
      data={data}
      itemRender={(item) => <List.Item>{item}</List.Item>}
    ></List>
  );
};
export const gap = () => {
  const data = ["OpenSquare Network", "Paid Qa", "Votes"];

  return (
    <List
      gap={20}
      data={data}
      itemRender={(item) => <List.Item>{item}</List.Item>}
    ></List>
  );
};
export const loading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const data = [
    {
      title: "OpenSquare Network",
      content: "Empower Web3 Collaboration with Blockchain",
    },
    {
      title: "Paid QA",
      content: "A decentralized paid QA platform.",
    },
    {
      title: "Votes",
      content: "An off-chain voting system for Polkadot ecosystem.",
    },
  ];

  function emulateFetch() {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }

  return (
    <>
      <Button onClick={emulateFetch}>loading 1000 ms</Button>

      <List
        gap={20}
        data={data}
        loading={isLoading}
        itemRender={(item) => (
          <List.Item>
            <Card size="small" title={item.title}>
              {item.content}
            </Card>
          </List.Item>
        )}
      ></List>
    </>
  );
};
export const noDataMessage = () => {
  return (
    <List data={[]} noDataMessage="No data" itemRender={(item) => item}></List>
  );
};
