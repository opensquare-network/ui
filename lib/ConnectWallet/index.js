import ConnectWalletModal from "./Modal";
import ConnectWalletButton from "./Button";
import React from "react";

/**
 * @param {import('./types').ConnectWalletModalProps} props
 */
export default function ConnectWallet(props = {}) {
  return (
    <>
      <ConnectWalletButton setVisible={props?.setVisible} />
      <ConnectWalletModal {...props} />
    </>
  );
}

export { ConnectWalletModal, ConnectWalletButton };
