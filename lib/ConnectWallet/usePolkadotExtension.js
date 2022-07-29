import { useMemo } from "react";
import { isWeb3Injected, web3Enable } from "@polkadot/extension-dapp";
import { polkadotWeb3Accounts } from "@osn/common/src/extension";
import { useAsyncState } from "@osn/common/es/state/useAsyncState";

export function usePolkadotExtension(projectName) {
  const { state, isReady, execute } = useAsyncState(
    async () => {
      const p = Promise.all([web3Enable(projectName), polkadotWeb3Accounts()]);

      const [web3Apps, accounts] = await p;
      return { web3Apps, accounts };
    },
    { web3Apps: [], accounts: [] },
    { immediate: false }
  );

  const hasExtension = useMemo(() => isWeb3Injected, [state]);

  const isPolkadotExtensionAccessible = useMemo(
    () => state.web3Apps.length,
    [state]
  );

  return {
    isReady,
    accounts: state.accounts,
    hasExtension,
    isPolkadotExtensionAccessible,
    execute,
  };
}
