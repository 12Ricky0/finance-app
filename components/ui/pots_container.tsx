"use client";
import Image from "next/image";
import { FinanceContext } from "@/context";
import { use, useState } from "react";
import data from "../../data.json";
import Link from "next/link";
import Delete from "./delete_modal";

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
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedPot, setSelectedPot] = useState<string>("");

  function toggleDropdown(index: number) {
    setActiveDropdown(activeDropdown === index ? null : index);
  }

  return (
    <section className="mb-[76px] md:mb-[106px] lg:mb-8">
      <div
        className={` ${
          isMinimized ? "lg:ml-[80px]" : "lg:ml-[300px]"
        } flex justify-between items-center`}
      >
        <h1 className={`font-bold text-[32px] text-gray-900  mt-6 pb-8`}>
          Pots
        </h1>
        <Link
          href="/finance/pots/create"
          className="p-4 rounded-lg bg-gray-900 text-white font-bold text-[14px]"
        >
          + Add New Pot
        </Link>
      </div>
      <div
        className={`grid ${
          isMinimized ? "lg:ml-[80px]" : "lg:ml-[300px]"
        } gap-6 grid-cols-1 lg:grid-cols-2 transition-all duration-500`}
      >
        {data.pots.map((pot, index) => (
          <section
            key={index}
            className={`bg-white  px-[20px] pt-6 pb-[38px] relative rounded-xl`}
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
                onClick={() => {
                  toggleDropdown(index);
                  setSelectedPot(pot.name);
                }}
              />
              {activeDropdown === index && (
                <div className="w-[114px] cursor-pointer absolute right-[20px] top-[50px] flex flex-col py-3 px-[20px] rounded-lg text-[14px] bg-white drop-shadow-2xl">
                  <span className="border-b border-gray-100 text-gray-900 pb-3">
                    Edit Pot
                  </span>
                  <span
                    onClick={() => {
                      setDeleteModal(!deleteModal);
                      setActiveDropdown(null);
                    }}
                    className="pt-3 text-[#C94736]"
                  >
                    Delete Pot
                  </span>
                </div>
              )}
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
      {deleteModal && (
        <Delete setDeleteModal={setDeleteModal} header={selectedPot} />
      )}
    </section>
  );
}
