import { WagmiConfig, createClient, chain, configureChains } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.hardhat,
    chain.localhost,
    chain.polygonMumbai,
    chain.goerli,
    chain.mainnet,
  ],
  [
    // jsonRpcProvider({
    //   rpc: (chain) => {
    //     if (chain.id == 31337 || chain.id === 1337) {
    //       return { http: "http://127.0.0.1:8545" };
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
    // alchemyProvider({
    //   apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    // }),
    publicProvider(),
  ]
);

const client = createClient({
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: false,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

export const WagmiProvider = ({ children }) => {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
};
