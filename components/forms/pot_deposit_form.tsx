"use client";
import Image from "next/image";
import { Overlay } from "../skeletons/overlay";
import { useState } from "react";

export default function Pot_Deposit() {
  const [deposit, setDeposit] = useState<number>();

  const percentage = Math.min((159 / 2000) * 100, 100); // Ensure it doesn't exceed 100%
  const savedPercentage = Math.min((deposit! / 2000) * 100, 100);

  return (
    <Overlay>
      <section className="bg-white rounded-xl md:p-8 p-5 w-full lg:w-[560px] md:mx-[100px] lg:mx-0 mx-4">
        <article className="relative">
          {" "}
          <div className="flex justify-between mb-[20px]">
            <h1 className="text-gray-900 font-bold md:text-[32px] text-[20px]">
              Add to ‘Savings’{" "}
            </h1>
            <Image
              src="/assets/images/icon-close-modal.svg"
              alt="close"
              width={32}
              height={32}
              className=" w-auto h-auto cursor-pointer "
            />
          </div>
          <p className="text-[14px] font-normal my-[20px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet.{" "}
          </p>
          <div className="w-full">
            <div className="flex justify-between items-center text-sm font-semibold mb-4">
              <span className="text-gray-500 text-[14px] font-normal">
                Total Saved{" "}
              </span>
              <span className="text-gray-900 font-bold text-[32px]">
                $ {deposit ? deposit + 159 : 159}
              </span>
            </div>
            <div className="w-full bg-[#F8F4F0] flex rounded-full h-2 relative">
              <div
                className="h-2 rounded-l-full  bg-gray-900 mr-0.5 relative transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
              <div
                className="h-2 rounded-r-full bg-[#277C78] transition-all duration-500"
                style={{ width: `${savedPercentage}%` }}
              />
            </div>
            <div className="flex justify-between mt-[13px]">
              <span className="font-bold text-[12px] text-[#277C78]">
                {savedPercentage
                  ? Number(percentage.toFixed(2)) +
                    Number(savedPercentage.toFixed(2))
                  : Number(percentage.toFixed(2))}
                %
              </span>
              <span className="font-normal text-[12px] text-gray-500">
                Target of $2000{" "}
              </span>
            </div>
          </div>
          <form className="mt-[20px]">
            <label
              htmlFor="pot-name"
              className="text-gray-500 font-bold text-[12px]"
            >
              Amount to Add
            </label>
            <input
              value={deposit}
              name="amount"
              onChange={(e) => {
                if (Number(e.target.value) > 2000) {
                  return;
                }
                const v = Number(e.target.value);
                setDeposit(v);
              }}
              type="number"
              className="border w-full cursor-pointer hover:border-gray-900 border-[#98908B] px-[20px] mt-1 rounded-lg h-[45px] text-[14px] focus:outline-none"
              placeholder="e.g. Rainy Days"
            />
            <button
              type="submit"
              className="w-full py-4 text-white bg-gray-900 mt-[20px] text-[14px] hover:bg-gray-600 cursor-pointer rounded-lg font-bold"
            >
              Confirm Addition
            </button>
          </form>
        </article>
      </section>
    </Overlay>
  );
}
