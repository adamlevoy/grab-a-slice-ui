import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { address } from "../ContractConfig";
import GrabASlice from "../GrabASlice.json";
import { Logo } from "./Logo";

export function SliceGallery() {
  const [slices, setSlices] = useState(null);

  const getSlices = useContractRead({
    address: address,
    abi: GrabASlice.abi,
    functionName: "getSlices",
    onSuccess(data) {
      setSlices(data);
    },
    onError(error) {
      console.log("Error:", error);
    },
    onSettled(data) {
      // console.log("Slices:", data);
    },
    watch: true,
  });

  // useEffect(() => {
  //   slices
  // }, [getSlices]);

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    const formatted = date.toLocaleString("en-us");
    return formatted;
  }

  return (
    <div className="flex justify-center items-center flex-wrap-reverse gap-8 mt-8 mb-8 w-full">
      {slices
        ? slices.map((slice, i) => {
            return (
              <div
                key={i}
                className="relative rounded-2xl shadow-2xl p-4 overflow-hidden border-4 border-orange-500/50 bg-yellow-100 text-red-600"
              >
                <div className="w-20 absolute z-0 opacity-50 right-1 bottom-3">
                  <Logo />
                </div>
                <ul className="relative z-10">
                  <li className="truncate">
                    <span className="font-bold mr-1">From:</span> {slice[0]}
                  </li>
                  <li>
                    <span className="font-bold mr-1">Timestamp:</span>{" "}
                    {formatTimestamp(slice[1])}
                  </li>
                  <li>
                    <span className="font-bold mr-1">Crust:</span> {slice[2]}
                  </li>
                  <li>
                    <span className="font-bold mr-1">Toppings:</span>{" "}
                    {slice[3].map((topping, i) => {
                      return (
                        <span className="mr-2" key={i}>
                          {topping}
                        </span>
                      );
                    })}
                  </li>
                  <li>
                    <span className="font-bold mr-1">Sauce:</span> {slice[4]}
                  </li>
                  <li>
                    <span className="font-bold mr-1">Cheese:</span> {slice[5]}
                  </li>
                  <li>
                    <span className="font-bold mr-1">Name:</span> {slice[6]}
                  </li>
                  <li>
                    <span className="font-bold mr-1">Message:</span> {slice[7]}
                  </li>
                </ul>
              </div>
            );
          })
        : null}
    </div>
  );
}
