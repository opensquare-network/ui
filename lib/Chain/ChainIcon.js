import React from "react";
import { ReactComponent as Polkadot } from "../imgs/icons/chain/polkadot.svg";
import { ReactComponent as Khala } from "../imgs/icons/chain/khala.svg";
import { ReactComponent as Kusama } from "../imgs/icons/chain/kusama.svg";
import { ReactComponent as Default } from "../imgs/icons/chain/default.svg";
import { ReactComponent as Moonriver } from "../imgs/icons/chain/moonriver.svg";
import { ReactComponent as Interlay } from "../imgs/icons/chain/interlay.svg";
import { ReactComponent as Polkadex } from "../imgs/icons/chain/polkadex.svg";
import { ReactComponent as Crust } from "../imgs/icons/chain/crust.svg";
import { ReactComponent as Ethereum } from "../imgs/icons/chain/ethereum.svg";
import { ReactComponent as Moonbeam } from "../imgs/icons/chain/moonbeam.svg";
import { ReactComponent as Centrifuge } from "../imgs/icons/chain/centrifuge.svg";
import { ReactComponent as Chrwna } from "../imgs/icons/chain/chrwna.svg";
import Westend from "../imgs/icons/chain/westend.png";
import Bifrost from "../imgs/icons/chain/bifrost.png";
import Kintsugi from "../imgs/icons/chain/kintsugi.png";
import Acala from "../imgs/icons/chain/acala.png";
import Turing from "../imgs/icons/chain/turing.png";
import Crab from "../imgs/icons/chain/crab.png";
import Darwinia from "../imgs/icons/chain/darwinia.png";
import Westmint from "../imgs/icons/chain/wesmint.png";
import Statemine from "../imgs/icons/chain/statemine.png";
import Statemint from "../imgs/icons/chain/statemint.png";
import Karura from "../imgs/icons/chain/karura.png";
import Phala from "../imgs/icons/chain/phala.png";
import Litmus from "../imgs/icons/chain/litmus.png";
import styled from "styled-components";
import Tooltip from "../Tooltip";

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const svgs = {
  Polkadot,
  Khala,
  Kusama,
  Moonriver,
  Interlay,
  Polkadex,
  Crust,
  Ethereum,
  Moonbeam,
  Centrifuge,
  Chrwna,
};
const pngs = {
  Westend,
  Bifrost,
  Kintsugi,
  Acala,
  Westmint,
  Statemine,
  Statemint,
  Karura,
  Turing,
  Crab,
  Darwinia,
  Phala,
  Litmus,
};

// since nextjs v11, import image assets will return an object { src, ... }
const resolvePngs = (png) => png.src ?? png;

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function ResolveChainIcon({ chainName = "", size = 24 }) {
  chainName = capitalize(chainName);

  let Icon = <Default viewBox="0 0 24 24" width={size} height={size} />;

  if (svgs[chainName]) {
    const SvgIcon = svgs[chainName];
    Icon = <SvgIcon viewBox="0 0 24 24" width={size} height={size} />;
  } else if (pngs[chainName]) {
    Icon = (
      <img src={resolvePngs(pngs[chainName])} width={size} alt={chainName} />
    );
  }

  return Icon;
}

function ChainIcon({
  chainName,
  position,
  offset,
  showTooltip = false,
  size = 24,
}) {
  const Icon = ResolveChainIcon({ chainName, size });
  return (
    <Wrapper>
      {Icon}
      {showTooltip && (
        <Tooltip
          content={capitalize(chainName)}
          position={position}
          offset={offset}
          size="full"
        >
          <></>
        </Tooltip>
      )}
    </Wrapper>
  );
}

export default ChainIcon;
