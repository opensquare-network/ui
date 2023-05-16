import React from "react";
import styled from "styled-components";
import IdentityUser from "./IdentityUser";
import { encodeNetworkAddress } from "@osn/common/es/utils/address";
import { isExternalLink } from "@osn/common/es/utils/url";
import { getAddressLink } from "@osn/common/es/utils/blockExplorer";

const Link = styled.a`
  max-width: 100%;
  ${(p) => p.$extraCss}
`;

/**
 * @requires `hashRoute` or `explore` - boolean
 *
 * The `a` tag wrapped with identity user logic
 */
export default function LinkIdentityUser({
  network,
  address,
  items = ["networkIcon", "identityIcon", "text"],
  prefix,
  extraCss,
  explore,
  hashRoute,
  href = "",
  target,
  ...restProps
}) {
  let linkProps = {
    href,
  };

  let ss58Address = address;
  if (address && network) {
    ss58Address = encodeNetworkAddress(address, network);
  }

  // NOTE: not sure if universal usage, but now works in qa
  if (hashRoute) {
    linkProps.href = `/#/network/${network}/address/${ss58Address}`;
  }
  // open statescan/subscan
  else if (explore) {
    linkProps.href = getAddressLink(network, address);
  }

  if (isExternalLink(linkProps.href)) {
    linkProps = {
      ...linkProps,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: (e) => e.stopPropagation(),
    };
  }

  return (
    <Link target={target} {...linkProps} $extraCss={extraCss}>
      {prefix}
      <IdentityUser
        items={items}
        network={network}
        address={ss58Address}
        {...restProps}
      />
    </Link>
  );
}
