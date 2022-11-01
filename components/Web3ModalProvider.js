import { chains, providers } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";

const config = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  theme: "dark",
  accentColor: "orange",
  ethereum: {
    appName: "web3modal",
    chains: [chains.hardhat],
    providers: [
      providers.walletConnectProvider({
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
      }),
    ],
  },
};

export function Web3ModalProvider() {
  return <Web3Modal config={config} />;
}
