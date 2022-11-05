import { useConnect } from "wagmi";

export function ConnectModal() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect({
      onError(error) {
        console.log("Error:", error);
      },
    });

  if (connectors) {
    return (
      <div className="flex flex-col gap-y-4">
        {connectors.map((connector) => {
          return (
            <button
              // disabled={!connector.ready}
              key={connector.id}
              onClick={() => connect({ connector })}
              className="btn-primary"
            >
              {connector.name}
              {/* {!connector.ready && " (unsupported)"} */}
              {isLoading &&
                connector.id === pendingConnector?.id &&
                " (connecting)"}
            </button>
          );
        })}

        {error && <p>{error.message}</p>}
      </div>
    );
  }
}
