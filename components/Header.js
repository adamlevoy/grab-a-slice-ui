import { Logo } from "./Logo";
import {
  useConnect,
  useDisconnect,
  useAccount,
  useBalance,
  useNetwork,
} from "wagmi";
import { useEffect, useState } from "react";
import { ConnectButton } from "./ConnectButton";

export function Header() {
  return (
    <header className="flex justify-between items-center px-2 py-4">
      <div className="w-14 h-14">
        <Logo />
      </div>
      <ConnectButton />
    </header>
  );
}
