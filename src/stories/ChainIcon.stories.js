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
      <ChainIcon chainName="default" showTooltip />
      <ChainIcon chainName="kusama" showTooltip />
      <ChainIcon chainName="statemine" showTooltip />
      <ChainIcon chainName="polkadot" showTooltip />
      <ChainIcon chainName="statemint" showTooltip />
      <ChainIcon chainName="westend" showTooltip />
      <ChainIcon chainName="westmint" showTooltip />
      <ChainIcon chainName="karura" showTooltip />
      <ChainIcon chainName="khala" showTooltip />
      <ChainIcon chainName="moonriver" showTooltip />
      <ChainIcon chainName="moonbeam" showTooltip />
      <ChainIcon chainName="bifrost" showTooltip />
      <ChainIcon chainName="kintsugi" showTooltip />
      <ChainIcon chainName="polkadex" showTooltip />
      <ChainIcon chainName="centrifuge" showTooltip />
      <ChainIcon chainName="interlay" showTooltip />
      <ChainIcon chainName="chrwna" showTooltip />
      <ChainIcon chainName="acala" showTooltip />
      <ChainIcon chainName="crust" showTooltip />
      <ChainIcon chainName="ethereum" showTooltip />
      <ChainIcon chainName="zeitgeist" showTooltip />
      <ChainIcon chainName="shiden" showTooltip />
      <ChainIcon chainName="altair" showTooltip />
      <ChainIcon chainName="parallel" showTooltip />
    </Flex>
  );
};
