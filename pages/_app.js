import { WagmiProvider } from "../components/WagmiProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <WagmiProvider>
        <Component {...pageProps} />
      </WagmiProvider>
    </>
  );
}

export default MyApp;
