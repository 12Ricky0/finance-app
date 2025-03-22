"use client";
import Image from "next/image";
import { FinanceContext } from "@/context";
import { use } from "react";
import data from "../../data.json";

export default function Pot_Container() {
  const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function percentage(total: number, target: number) {
    const percentage = Math.min((total / target) * 100, 100);
    return percentage;
  }
  const { isMinimized } = use(FinanceContext);
  return (
    <div className="lg:grid  gap-6 grid-cols-2">
      {data.pots.map((pot, index) => (
        <section
          key={index}
          className={`bg-white mb-6  ${
            isMinimized ? "lg:ml-[80px]" : "lg:ml-[300px]"
          } px-[20px] pt-6 pb-[38px] rounded-xl`}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-4 items-center">
              <div
                style={{ backgroundColor: `${pot.theme}` }}
                className="size-4 rounded-full bg-green-800"
              />
              <h1 className="text-gray-900 font-bold text-[20px]">
                {pot.name}
              </h1>
            </div>
            <Image
              src="/assets/images/icon-ellipsis.svg"
              alt="ellipsis"
              width={32}
              height={32}
              className=" w-auto h-auto cursor-pointer "
            />
          </div>

          <div className="w-full">
            <div className="flex justify-between items-center text-sm font-semibold mb-4">
              <span className="text-gray-500 text-[14px] font-normal">
                Total Saved{" "}
              </span>
              <span className="text-gray-900 font-bold text-[32px]">
                {formatCurrency.format(pot.total)}
              </span>
            </div>
            <div className="w-full bg-[#F8F4F0] rounded-full h-2 relative">
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${percentage(pot.total, pot.target)}%`,
                  backgroundColor: pot.theme,
                }}
              ></div>
            </div>
            <div className="flex justify-between mt-[13px]">
              <span className="font-bold text-[12px] text-gray-500">
                {percentage(pot.total, pot.target).toFixed(2)}%{" "}
              </span>
              <span className="font-normal text-[12px] text-gray-500">
                Target of ${pot.target}
              </span>
            </div>
          </div>

          <div className="mt-8 w-full flex justify-between gap-4">
            <button className="bg-[#F8F4F0] rounded-lg py-4 w-full text-[14px] font-bold text-gray-900">
              + Add Money
            </button>
            <button className="bg-[#F8F4F0] rounded-lg py-4 text-[14px] w-full font-bold text-gray-900">
              Withdraw
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}
