"use client";
import Image from "next/image";
import { useState } from "react";
import { Sort_Dropdown } from "../ui/dropdown";

export default function Recurring_Bill_Card() {
  return (
    <section className="bg-white mx-4 md:mx-10 md:py-8 pt-6 pb-8 px-[20px] relative rounded-lg">
      <div className="flex lg:w-full justify-between items-center gap-6">
        <div className="relative w-full">
          <input
            type="search"
            className="py-3 border w-full border-beige-500 rounded-lg px-[20px] lg:w-[320px] md:w-[160px]"
            placeholder="Search bills"
          />
          <Image
            src="/assets/images/icon-search.svg"
            alt="search"
            width={24}
            height={24}
            className="w-auto h-auto  cursor-pointer absolute right-[20px] top-1/3"
          />
        </div>
        <Sort_Dropdown />
      </div>
      <div className="flex gap-2 flex-col border-b pb-[20px] mt-6 md:hidden border-gray-300">
        <div className="inline-flex items-center gap-3">
          <Image
            src="/assets/images/avatars/bytewise.jpg"
            alt="right"
            width={32}
            height={32}
            className=" w-auto h-auto rounded-full cursor-pointer"
          />
          <h2 className="font-bold text-[14px] text-gray-900">Papa Software</h2>
        </div>

        <div className="flex justify-between">
          <div className="inline-flex gap-2 items-center ">
            <span className="font-normal text-[12px] text-[#277C78]">
              Monthly - 1st
            </span>

            <Image
              src="/assets/images/icon-selected.svg"
              alt="right"
              width={32}
              height={32}
              className=" w-auto h-auto cursor-pointer"
            />
          </div>
          <span className="font-bold text-[14px] text-gray-900">$250.00</span>
        </div>
      </div>
      {/* desktop viewport */}
      <table className="hidden md:table  w-full mt-6">
        <thead className=" border-b border-gray-100">
          <tr className=" font-normal text-[12px] text-gray-500  ">
            <th className="text-left pl-4 pb-3">Bill Title</th>
            <th className="pb-3 text-center">Due Date</th>
            <th className="text-right pr-4 pb-3">Amount</th>
          </tr>
        </thead>
        <tbody className=" border-b border-gray-100">
          <tr className=" mx-4 font-normal text-[12px] text-gray-500 mt-6 ">
            <td className="flex items-center gap-4 text-left pl-4 py-3">
              <Image
                src="/assets/images/avatars/bytewise.jpg"
                alt="right"
                width={32}
                height={32}
                className=" w-auto h-auto rounded-full cursor-pointer"
              />
              <h2 className="font-bold text-[14px] text-gray-900">
                Papa Software
              </h2>
            </td>
            <td className="text-center  text-[#277C78] py-3">
              <div className="flex justify-center gap-2">
                <span>Monthly - 2nd</span>
                <Image
                  src="/assets/images/icon-selected.svg"
                  alt="right"
                  width={32}
                  height={32}
                  className=" w-auto h-auto cursor-pointer"
                />
              </div>
            </td>
            <td className="font-bold text-[14px] text-gray-900 text-right pr-4 py-3">
              +$75.50
            </td>
          </tr>
        </tbody>
      </table>
      {/* <Pagination /> */}
      {/* desktop viewport */}
    </section>
  );
}
