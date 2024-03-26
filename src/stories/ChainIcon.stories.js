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
      <ChainIcon showTooltip chainName="default" />
      <ChainIcon showTooltip chainName="kusama" />
      <ChainIcon showTooltip chainName="statemine" />
      <ChainIcon showTooltip chainName="polkadot" />
      <ChainIcon showTooltip chainName="statemint" />
      <ChainIcon showTooltip chainName="westend" />
      <ChainIcon showTooltip chainName="westmint" />
      <ChainIcon showTooltip chainName="karura" />
      <ChainIcon showTooltip chainName="khala" />
      <ChainIcon showTooltip chainName="moonriver" />
      <ChainIcon showTooltip chainName="moonbeam" />
      <ChainIcon showTooltip chainName="bifrost" />
      <ChainIcon showTooltip chainName="kintsugi" />
      <ChainIcon showTooltip chainName="polkadex" />
      <ChainIcon showTooltip chainName="centrifuge" />
      <ChainIcon showTooltip chainName="interlay" />
      <ChainIcon showTooltip chainName="chrwna" />
      <ChainIcon showTooltip chainName="acala" />
      <ChainIcon showTooltip chainName="crust" />
      <ChainIcon showTooltip chainName="ethereum" />
      <ChainIcon showTooltip chainName="zeitgeist" />
      <ChainIcon showTooltip chainName="shiden" />
      <ChainIcon showTooltip chainName="altair" />
      <ChainIcon showTooltip chainName="parallel" />
    </Flex>
  );
};
