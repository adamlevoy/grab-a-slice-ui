import { PolygonLogo } from "./PolygonLogo";
import { abbreviateAddress } from "../utils/utils";
import { InjectedConnector } from "wagmi/connectors/injected";
import {
  useNetwork,
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
} from "wagmi";
import { Logo } from "./Logo";

export function ConnectButton() {
  // wagmi hooks
  const { chain } = useNetwork();
  const { address, isConnecting, isConnected } = useAccount();
  const ethBalance = useBalance({
    addressOrName: address,
    watch: true,
    suspense: true,
  });
  const maticBalance = useBalance({
    addressOrName: address,
    token: "0x0000000000000000000000000000000000001010",
    watch: true,
  });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <div className="rounded-xl overflow-hidden">
      {isConnected ? (
        <div className="flex items-center gap-3 bg-gray-100 dark:bg-slate-800 pl-2 shadow">
          {chain?.id === 80001 && (
            <span>
              <PolygonLogo />
            </span>
          )}
          <div className="flex items-center gap-1">
            {maticBalance.data && chain.id === 80001 && (
              <>
                <span className="text-black dark:text-white">
                  {parseFloat(maticBalance?.data?.formatted).toFixed(3)}
                </span>
                <span className="text-black/60 dark:text-gray-400">
                  {maticBalance?.data?.symbol}
                </span>
              </>
            )}
            {ethBalance.data && chain.id != 80001 && (
              <>
                <span>
                  {parseFloat(ethBalance?.data?.formatted).toFixed(3)}
                </span>
                <span>{ethBalance?.data?.symbol}</span>
              </>
            )}
          </div>
          <button
            className="bg-red-500 text-white font-semibold rounded-xl py-2 px-3"
            onClick={() => disconnect()}
          >
            {abbreviateAddress(address)}
          </button>
        </div>
      ) : (
        <button className="btn-primary" onClick={connect}>
          {isConnecting ? <>Connecting...</> : "Connect"}
        </button>
      )}
    </div>
  );
}
