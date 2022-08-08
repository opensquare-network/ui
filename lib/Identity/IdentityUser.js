// low-level component

import styled from "styled-components";
import IdentityIcon from "./IdentityIcon";
import ChainIcon from "../Chain/ChainIcon";
import Avatar from "../Account/Avatar";
import React, { useEffect, useState } from "react";
import { fetchIdentity } from "@osn/common/es/services/identity";
import { useIsMounted } from "@osn/common/es/utils/hooks";
import { identityChainMap, evmChains } from "@osn/constants";
import {
  addressEllipsis,
  encodeNetworkAddress,
} from "@osn/common/es/utils/address";
import Popover from "../Popover";
import Card from "../Card";

const Wrapper = styled.span`
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  max-width: 100%;
`;

const AvatarIconWrapper = styled.span`
  display: inline-flex;
  margin-right: 8px;
`;
const NetworkIconWrapper = styled.span`
  margin-right: 4px;
`;
const IdentityIconWrapper = styled.span`
  margin-right: 4px;
`;
const TextWrapper = styled.span`
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const PopoverAddress = styled.p`
  word-wrap: break-word;
`;

function defaultTextRender(text) {
  return text;
}

export default function IdentityUser({
  address,
  network,
  items = ["avatarIcon", "networkIcon", "identityIcon", "text"],
  textRender = defaultTextRender,
  avatarIconSize = 20,
  networkIconSize = 16,
  identityIconSize = 12,
  identityTooltipPosition,
  // FIXME: DON'T use this for now
  hoverAddressForDetail,
}) {
  const isMounted = useIsMounted();
  const [identity, setIdentity] = useState({});

  let ss58Address = address;
  if (address && network) {
    ss58Address = encodeNetworkAddress(address, network);
  }

  const isEvm = evmChains.includes(network);

  const assertItems = (key) => items.includes(key);

  useEffect(() => {
    if (!address || !network || isEvm) {
      return;
    }
    const identityChain = identityChainMap[network] || network;
    fetchIdentity(identityChain, address)
      .then((identity) => {
        if (isMounted.current) {
          setIdentity(identity);
        }
      })
      .catch(console.error);
  }, [network, address, isMounted]);

  let avatarIcon;
  if (assertItems("avatarIcon")) {
    avatarIcon = (
      <AvatarIconWrapper>
        <Avatar address={address} size={avatarIconSize} />
      </AvatarIconWrapper>
    );
  }
  let networkIcon;
  if (assertItems("networkIcon")) {
    networkIcon = network && (
      <NetworkIconWrapper>
        <ChainIcon chainName={network} size={networkIconSize} />
      </NetworkIconWrapper>
    );
  }
  let identityIcon;
  if (assertItems("identityIcon")) {
    if (identity?.info && identity?.info?.status !== "NO_ID") {
      identityIcon = (
        <IdentityIconWrapper>
          <IdentityIcon
            status={identity?.info?.status}
            showTooltip
            size={identityIconSize}
            position={identityTooltipPosition}
          />
        </IdentityIconWrapper>
      );
    }
  }
  let text;
  if (assertItems("text")) {
    text = (
      <TextWrapper>
        {textRender(identity?.info?.display ?? addressEllipsis(ss58Address))}
      </TextWrapper>
    );

    if (hoverAddressForDetail) {
      text = (
        <Popover
          content={
            <Card
              size="small"
              head={<IdentityUser network={network} address={address} />}
            >
              <PopoverAddress>{ss58Address}</PopoverAddress>
            </Card>
          }
        >
          {text}
        </Popover>
      );
    }
  }

  return (
    <Wrapper>
      {avatarIcon}
      {networkIcon}
      {identityIcon}
      {text}
    </Wrapper>
  );
}
