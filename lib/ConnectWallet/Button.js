import React from "react";
import Button from "../styled/Button";

/**
 * @param {Pick<import("./types").ConnectWalletModalProps, 'setVisible'>} props
 */
export default function ConnectWalletButton(props) {
  const { setVisible } = props ?? {};

  return (
    <Button block primary onClick={() => setVisible((v) => !v)}>
      Connect Wallet
    </Button>
  );
}
