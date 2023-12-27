import React from "react";
import { css } from "styled-components";
import { secondary_blue_100 } from "../styles/colors";
import LinkIdentityUser from "./LinkIdentityUser";

const styles = css`
  font-weight: 500;
  display: inline-flex;
  padding: 0 8px;
  color: var(--textLink);
  background-color: ${secondary_blue_100};
  border-radius: 4px;

  .mention {
    margin-right: 2px;
  }
`;

/**
 * @requires `hashRoute` or `explore` - boolean
 *
 * The `LinkIdentityUser(a)` component wrapped with mention styles
 */
export default function MentionIdentityUser({
  network,
  address,
  items = ["networkIcon", "identityIcon", "text"],
  explore,
  hashRoute,
  href,
  target,
  ...restProps
}) {
  return (
    <LinkIdentityUser
      prefix={<span className="mention">@</span>}
      items={items}
      network={network}
      address={address}
      extraCss={styles}
      explore={explore}
      hashRoute={hashRoute}
      href={href}
      target={target}
      {...restProps}
    />
  );
}
