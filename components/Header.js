import { Logo } from "./Logo";
import {
  useConnect,
  useDisconnect,
  useAccount,
  useBalance,
  useProvider,
  useNetwork,
} from "wagmi";
import { useEffect, useState } from "react";

function abbreviateAddress(address) {
  const arr = address.split("");
  const prefix = arr.splice(0, 4).join("");
  const suffix = arr.splice(arr.length - 5, 4).join("");
  const abbreviated = `${prefix}...${suffix}`;
  return abbreviated;
}

export function Header() {
  // wagmi hooks
  const provider = useProvider();
  const { chain } = useNetwork();
  const { address, isConnecting, isConnected } = useAccount();
  const ethBalance = useBalance({
    addressOrName: address,
    watch: true,
  });
  const maticBalance = useBalance({
    addressOrName: address,
    token: "0x0000000000000000000000000000000000001010",
    watch: true,
  });
  const { disconnect } = useDisconnect();

  useEffect(() => {
    maticBalance && console.log(maticBalance);
  }, []);

  return (
    <header className="flex justify-between items-center p-2">
      <div className="w-14 h-14">
        <Logo />
      </div>

      {isConnected ? (
        <div>
          <span className="mr-4 font-semibold">{chain.name}</span>
          <div className="bg-red-500 py-2 pr-2 pl-3 inline-flex items-center rounded-full">
            <span className="font-normal text-white">
              {chain.id === 80001
                ? `${parseFloat(maticBalance?.data.formatted).toFixed(3)} ${
                    maticBalance?.data.symbol
                  }`
                : `${parseFloat(ethBalance.formatted).toFixed(3)} ${
                    ethBalance?.symbol
                  }`}
            </span>
            <button
              className="bg-white rounded-full text-black px-2 py-1 ml-2 font-semibold"
              onClick={disconnect}
            >
              {abbreviateAddress(address)}
            </button>
          </div>
        </div>
      ) : (
        <button className="btn-primary" onClick={() => connect}>
          {isConnecting ? (
            <>
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              Connecting...
            </>
          ) : (
            "Connect"
          )}
        </button>
      )}
    </header>
  );
}
