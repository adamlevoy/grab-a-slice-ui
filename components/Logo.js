import logo from "../public/logo.png";
import Image from "next/image";

export function Logo() {
  return (
    <Image
      src={logo}
      alt="pizza pie missing a slice"
      width={150}
      height={150}
    />
  );
}
