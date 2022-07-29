import React from "react";

export type ConnectWalletModalProps = {
  projectName: string;
  availableNetworks: string[];
  visible: boolean;
  setVisible: React.SetStateAction<boolean>;
  onConnect: () => void;
};
