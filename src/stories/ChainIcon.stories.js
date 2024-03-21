import React from "react";
import ChainIcon from "../../lib/Chain/ChainIcon";
import Flex from "../../lib/styled/Flex";

export default {
  title: "ChainIcon",
  component: ChainIcon,
};

export const Available = () => {
  return (
    <Flex style={{ gap: 8, padding: 40 }}>
      <ChainIcon />
      <ChainIcon chainName="default" />
      <ChainIcon chainName="kusama" />
      <ChainIcon chainName="statemine" />
      <ChainIcon chainName="polkadot" />
      <ChainIcon chainName="statemint" />
      <ChainIcon chainName="westend" />
      <ChainIcon chainName="westmint" />
      <ChainIcon chainName="karura" />
      <ChainIcon chainName="khala" />
      <ChainIcon chainName="moonriver" />
      <ChainIcon chainName="moonbeam" />
      <ChainIcon chainName="bifrost" />
      <ChainIcon chainName="kintsugi" />
      <ChainIcon chainName="polkadex" />
      <ChainIcon chainName="centrifuge" />
      <ChainIcon chainName="interlay" />
      <ChainIcon chainName="chrwna" />
      <ChainIcon chainName="acala" />
      <ChainIcon chainName="crust" />
      <ChainIcon chainName="ethereum" />
      <ChainIcon chainName="zeitgeist" />
      <ChainIcon chainName="shiden" />
      <ChainIcon chainName="altair" />
      <ChainIcon chainName="parallel" />
    </Flex>
  );
};
