import { useMemo } from "react";
import {
  isWeb3Injected,
  web3Enable,
  web3Accounts,
} from "@polkadot/extension-dapp";
import { useAsyncState } from "@osn/common/es/state/useAsyncState";

export function usePolkadotExtension(projectName) {
  const { state, isReady, execute } = useAsyncState(
    async () => {
      const web3Apps = await web3Enable(projectName);
      const allAccounts = await web3Accounts();
      const accounts = allAccounts.filter((i) => i.type !== "ethereum");

      return { web3Apps, accounts };
    },
    { web3Apps: [], accounts: [] },
    { immediate: false },
  );

  const hasExtension = useMemo(() => isWeb3Injected, [state]);

  const isPolkadotExtensionAccessible = useMemo(
    () => state.web3Apps.length,
    [state],
  );

  return {
    isReady,
    accounts: state.accounts,
    hasExtension,
    isPolkadotExtensionAccessible,
    execute,
  };
}
