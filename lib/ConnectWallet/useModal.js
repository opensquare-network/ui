import React, { useEffect, useMemo, useState } from "react";
import Modal from "../Modal";
import ChainSelector from "../Chain/ChainSelector";
import AccountSelector from "../Account/AccountSelector";
import { Title, Text, Description, ConnectButton } from "./styled";
import PolkadotIcon from "../Icon/Polkadot";

export function useModal({
  availableNetworks,
  visible,
  setVisible = () => {},
  chain,
  setChain = () => {},
  address,
  setAddress = () => {},
  onConnect = () => {},
  accounts,
  hasExtension,
  isPolkadotExtensionAccessible,
  isReady,
}) {
  const [modalContent, setModalContent] = useState(null);
  const [modalProps, setModalProps] = useState({});

  function hideModal() {
    setVisible(false);
  }
  function newTabToPolkadotExtension() {
    const link = "https://polkadot.js.org/extension/";
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  }

  function noAccount() {
    const el = (
      <Description>
        Polkadot-js extension is connected, but no account found. Please create
        or import some accounts first.
      </Description>
    );

    const props = {
      okText: "Create/Import address",
      onOk() {
        newTabToPolkadotExtension();
        hideModal();
      },
      okButtonProps: { color: "orange" },
    };

    return {
      el,
      props,
    };
  }

  function noExtension() {
    const el = (
      <Description>
        Polkadot-js extension not detected. No web3 account could be found.
        Visit this page on a computer with polkadot-js extension.
      </Description>
    );

    const props = {
      okText: "Polkadot{.js} Extension",
      onOk() {
        newTabToPolkadotExtension();
        hideModal();
      },
    };

    return {
      el,
      props,
    };
  }

  function noAccessible() {
    const el = (
      <Description>
        Polkadot-js extension is detected but unaccessible, please go to
        Polkadot-js extension, settings, and check Manage Website Access
        section.
      </Description>
    );
    const props = {
      okText: "Got it.",
      onOk: hideModal,
      okButtonProps: { color: "orange" },
    };

    return { el, props };
  }

  useEffect(() => {
    if (!hasExtension) {
      const { el, props } = noExtension();
      setModalContent(el);
      setModalProps(props);
      return;
    }

    if (!isPolkadotExtensionAccessible) {
      const { el, props } = noAccessible();
      setModalContent(el);
      setModalProps(props);
      return;
    }

    if (!accounts.length) {
      const { el, props } = noAccount();
      setModalContent(el);
      setModalProps(props);
      return;
    }

    setModalContent(
      <>
        <Title>Connect Wallet</Title>

        <Text>Chain</Text>
        <ChainSelector chains={availableNetworks} onSelect={setChain} selected={chain} />

        <Text>Account</Text>
        <AccountSelector
          chain={chain}
          accounts={accounts}
          selected={address}
          onSelect={(account) => {
            setAddress(account?.address);
          }}
        />
      </>
    );
    setModalProps({
      okText: (
        <ConnectButton>
          <PolkadotIcon />
          Connect
        </ConnectButton>
      ),
      onOk() {
        onConnect({ address, network: chain.network });
        setVisible(false);
      },
      okButtonProps: {
        primary: true,
      },
    });
  }, [chain, accounts, address, hasExtension, isPolkadotExtensionAccessible]);

  const content = useMemo(() => modalContent, [modalContent]);
  const props = useMemo(() => modalProps, [modalProps]);

  const modal = isReady && (
    <Modal open={visible} setOpen={setVisible} {...props}>
      {content}
    </Modal>
  );

  return {
    modal,
  };
}
