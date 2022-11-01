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

  useEffect(() => {
    getSlices;
  }, [getSlices]);

  return (
    <div className="flex justify-center items-center flex-wrap-reverse gap-8 mt-8 mb-8">
      {slices
        ? slices.map((slice, i) => {
            return (
              <div key={i} className="relative rounded-xl shadow-2xl p-4">
                <div className="w-20 absolute z-0 opacity-50 right-0 bottom-2">
                  <Logo />
                </div>
                <ul className="relative z-10">
                  <li>From: {slice[0]}</li>
                  <li>Timestamp:</li>
                  <li>Crust: {slice[2]}</li>
                  <li>
                    Toppings:{" "}
                    {slice[3].map((topping, i) => {
                      return (
                        <span className="mr-2" key={i}>
                          {topping}
                        </span>
                      );
                    })}
                  </li>
                  <li>Sauce: {slice[4]}</li>
                  <li>Cheese: {slice[5]}</li>
                  <li>Name: {slice[6]}</li>
                  <li>Message: {slice[7]}</li>
                </ul>
              </div>
            );
          })
        : null}
    </div>
  );
}
