import Tooltip from "../Tooltip";
import {
  ChainPlaceholderLight,
  ChainPlaceholderDark,
  ChainPolkadotLight,
  ChainPolkadotDark,
  ChainKhalaLight,
  ChainKhalaDark,
  ChainKusamaLight,
  ChainKusamaDark,
  ChainMoonriverLight,
  ChainMoonriverDark,
  ChainInterlayLight,
  ChainInterlayDark,
  ChainPolkadexLight,
  ChainPolkadexDark,
  ChainCrustLight,
  ChainCrustDark,
  ChainEthereumLight,
  ChainEthereumDark,
  ChainMoonbeamLight,
  ChainMoonbeamDark,
  ChainCentrifugeLight,
  ChainCentrifugeDark,
  ChainChrwnaLight,
  ChainChrwnaDark,
  ChainShidenLight,
  ChainShidenDark,
  ChainAltairLight,
  ChainAltairDark,
  ChainRococoLight,
  ChainRococoDark,
  ChainWestendLight,
  ChainWestendDark,
  ChainBifrostLight,
  ChainBifrostDark,
  ChainKintsugiLight,
  ChainKintsugiDark,
  ChainAcalaLight,
  ChainAcalaDark,
  ChainWestmintLight,
  ChainWestmintDark,
  ChainStatemineLight,
  ChainStatemineDark,
  ChainStatemintLight,
  ChainStatemintDark,
  ChainKaruraLight,
  ChainKaruraDark,
  ChainTuringLight,
  ChainTuringDark,
  ChainCrabLight,
  ChainCrabDark,
  ChainDarwiniaLight,
  ChainDarwiniaDark,
  ChainPhalaLight,
  ChainPhalaDark,
  ChainLitmusLight,
  ChainLitmusDark,
  ChainZeitgeistLight,
  ChainZeitgeistDark,
  ChainBasiliskLight,
  ChainBasiliskDark,
  ChainParallelLight,
  ChainParallelDark,
  ChainHydradxLight,
  ChainHydradxDark,
  ChainStafiLight,
  ChainStafiDark,
  ChainCreditcoinLight,
  ChainCreditcoinDark,
} from "@osn/icons/opensquare";
import { capitalize } from "../utils";

const icons = {
  DEFAULT: {
    light: ChainPlaceholderLight,
    dark: ChainPlaceholderDark,
  },
  Polkadot: {
    light: ChainPolkadotLight,
    dark: ChainPolkadotDark,
  },
  Khala: {
    light: ChainKhalaLight,
    dark: ChainKhalaDark,
  },
  Kusama: {
    light: ChainKusamaLight,
    dark: ChainKusamaDark,
  },
  Moonriver: {
    light: ChainMoonriverLight,
    dark: ChainMoonriverDark,
  },
  Interlay: {
    light: ChainInterlayLight,
    dark: ChainInterlayDark,
  },
  Polkadex: {
    light: ChainPolkadexLight,
    dark: ChainPolkadexDark,
  },
  Crust: {
    light: ChainCrustLight,
    dark: ChainCrustDark,
  },
  Ethereum: {
    light: ChainEthereumLight,
    dark: ChainEthereumDark,
  },
  Moonbeam: {
    light: ChainMoonbeamLight,
    dark: ChainMoonbeamDark,
  },
  Centrifuge: {
    light: ChainCentrifugeLight,
    dark: ChainCentrifugeDark,
  },
  Chrwna: {
    light: ChainChrwnaLight,
    dark: ChainChrwnaDark,
  },
  Shiden: {
    light: ChainShidenLight,
    dark: ChainShidenDark,
  },
  Altair: {
    light: ChainAltairLight,
    dark: ChainAltairDark,
  },
  Rococo: {
    light: ChainRococoLight,
    dark: ChainRococoDark,
  },
  Westend: {
    light: ChainWestendLight,
    dark: ChainWestendDark,
  },
  Bifrost: {
    light: ChainBifrostLight,
    dark: ChainBifrostDark,
  },
  Kintsugi: {
    light: ChainKintsugiLight,
    dark: ChainKintsugiDark,
  },
  Acala: {
    light: ChainAcalaLight,
    dark: ChainAcalaDark,
  },
  Westmint: {
    light: ChainWestmintLight,
    dark: ChainWestmintDark,
  },
  Statemine: {
    light: ChainStatemineLight,
    dark: ChainStatemineDark,
  },
  Statemint: {
    light: ChainStatemintLight,
    dark: ChainStatemintDark,
  },
  Karura: {
    light: ChainKaruraLight,
    dark: ChainKaruraDark,
  },
  Turing: {
    light: ChainTuringLight,
    dark: ChainTuringDark,
  },
  Crab: {
    light: ChainCrabLight,
    dark: ChainCrabDark,
  },
  Darwinia: {
    light: ChainDarwiniaLight,
    dark: ChainDarwiniaDark,
  },
  Phala: {
    light: ChainPhalaLight,
    dark: ChainPhalaDark,
  },
  Litmus: {
    light: ChainLitmusLight,
    dark: ChainLitmusDark,
  },
  Zeitgeist: {
    light: ChainZeitgeistLight,
    dark: ChainZeitgeistDark,
  },
  Basilisk: {
    light: ChainBasiliskLight,
    dark: ChainBasiliskDark,
  },
  Parallel: {
    light: ChainParallelLight,
    dark: ChainParallelDark,
  },
  Hydradx: {
    light: ChainHydradxLight,
    dark: ChainHydradxDark,
  },
  Stafi: {
    light: ChainStafiLight,
    dark: ChainStafiDark,
  },
  Creditcoin: {
    light: ChainCreditcoinLight,
    dark: ChainCreditcoinDark,
  },
};

function ChainIcon({ chainName, size = 24, className = "" }) {
  chainName = capitalize(chainName);

  const Icon = icons[chainName] || icons.DEFAULT;

  return (
    <Tooltip content={chainName || ""} className={className}>
      <div>
        <Icon.light width={size} height={size} className="dark:hidden" />
        <Icon.dark width={size} height={size} className="hidden dark:block" />
      </div>
    </Tooltip>
  );
}

export default ChainIcon;
