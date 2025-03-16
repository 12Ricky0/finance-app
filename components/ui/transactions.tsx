"use client";
import Image from "next/image";
import Pagination from "./pagination";
import { useState } from "react";

export default function Transaction() {
  const [sort, setSort] = useState("Latest");
  const [category, setCategory] = useState("All Transactions");
  const [displaySort, setDisplaySort] = useState(false);
  const [displayCatogory, setDisplayCategory] = useState(false);

  const sortLists = [
    "Latest",
    "Oldest",
    "A to Z",
    "Z to A",
    "Highest",
    "Lowest",
  ];

  const categoryLists = [
    "All Transactions",
    "Entertainment",
    "Bills",
    "Groceries",
    "Dinning Out",
    "Transportation",
    "Personal Care",
  ];
  return (
    <section className="bg-white mx-4 md:mx-10 md:py-8 pt-6 pb-8 px-[20px] relative rounded-lg">
      <div className="flex justify-between items-center gap-6">
        <div className="relative ">
          <input
            type="search"
            className="py-3 border border-beige-500 rounded-lg px-[20px] lg:w-[320px] md:w-[160px]"
            placeholder="Search transaction"
          />
          <Image
            src="/assets/images/icon-search.svg"
            alt="search"
            width={24}
            height={24}
            className="w-auto h-auto  cursor-pointer absolute right-[20px] top-1/3"
          />
        </div>
        <div className="md:flex gap-6 hidden">
          <div className="relative">
            <div
              onClick={() => setDisplaySort(!displaySort)}
              className="flex  gap-2 items-center  cursor-pointer"
            >
              <span className="font-normal text-gray-500 text-[14px]">
                Sort By
              </span>
              <div className="border-gray-500 border px-[20px] flex gap-4 py-3 rounded-lg">
                <span className="font-normal text-gray-900 text-[14px]">
                  {sort}
                </span>
                <Image
                  src="/assets/images/icon-caret-down.svg"
                  alt="down"
                  width={24}
                  height={24}
                  className="w-auto h-auto cursor-pointer"
                />
              </div>
            </div>
            {displaySort && (
              <ul
                className={`bg-white cursor-pointer transition-all duration-500 rounded-lg absolute right-0 drop-shadow-2xl px-[20px] mt-2 pt-3 flex flex-col gap-3 transform origin-top ${
                  displaySort
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {sortLists.map((list) => {
                  return (
                    <li
                      onClick={() => setSort(list)}
                      className={`border-b border-beige-100 text-gray-900 last:border-0 pb-3 text-[12px] ${
                        list == sort ? "font-bold" : "font-normal"
                      }`}
                      key={list}
                    >
                      {list}
                    </li>
                  );
                })}
              </ul>
            )}{" "}
          </div>

          <div className="relative">
            <div
              onClick={() => setDisplayCategory(!displayCatogory)}
              className="flex gap-2 items-center cursor-pointer"
            >
              <span className="font-normal text-gray-500 text-[14px]">
                Category
              </span>
              <div className="border-gray-500 border px-[20px] flex gap-4 py-3 rounded-lg">
                <span className="font-normal text-gray-900 text-[14px]">
                  {category}
                </span>
                <Image
                  src="/assets/images/icon-caret-down.svg"
                  alt="down"
                  width={24}
                  height={24}
                  className="w-auto h-auto cursor-pointer"
                />
              </div>
            </div>
            {displayCatogory && (
              <ul
                className={`bg-white cursor-pointer transition-all duration-500 rounded-lg absolute right-0 drop-shadow-2xl px-[20px] mt-2 pt-3 flex flex-col gap-3 transform origin-top ${
                  displayCatogory
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {categoryLists.map((list) => {
                  return (
                    <li
                      onClick={() => setCategory(list)}
                      className={`border-b border-beige-100 text-gray-900 last:border-0 pb-3 text-[12px] ${
                        list == category ? "font-bold" : "font-normal"
                      }`}
                      key={list}
                    >
                      {list}
                    </li>
                  );
                })}
              </ul>
            )}{" "}
          </div>
        </div>
        <div
          onClick={() => setDisplaySort(!displaySort)}
          className="relative shrink-0 md:hidden"
        >
          <Image
            src="/assets/images/icon-sort-mobile.svg"
            alt="search"
            width={24}
            height={24}
            className="w-auto h-auto cursor-pointer md:hidden"
          />
          {displaySort && (
            <ul
              className={`bg-white  cursor-pointer transition-all duration-500 rounded-lg absolute right-0 drop-shadow-2xl px-[20px] mt-2 pt-3 flex flex-col gap-3 transform origin-top ${
                displaySort
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {sortLists.map((list) => {
                return (
                  <li
                    onClick={() => setSort(list)}
                    className={`border-b border-beige-100 text-gray-900 last:border-0 pb-3 text-[12px] ${
                      list == sort ? "font-bold" : "font-normal"
                    }`}
                    key={list}
                  >
                    {list}
                  </li>
                );
              })}
            </ul>
          )}{" "}
        </div>
        <div
          onClick={() => setDisplayCategory(!displayCatogory)}
          className="relative shrink-0 md:hidden"
        >
          <Image
            src="/assets/images/icon-filter-mobile.svg"
            alt="filter"
            width={20}
            height={20}
            className="w-auto h-auto cursor-pointer "
          />
          {displayCatogory && (
            <ul
              className={`bg-white cursor-pointer transition-all duration-500 rounded-lg absolute right-0 drop-shadow-2xl px-[20px] mt-2 pt-3 flex flex-col gap-3 transform origin-top ${
                displayCatogory
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {categoryLists.map((list) => {
                return (
                  <li
                    onClick={() => setCategory(list)}
                    className={`border-b border-beige-100 text-gray-900 last:border-0 pb-3 text-[12px] ${
                      list == category ? "font-bold" : "font-normal"
                    }`}
                    key={list}
                  >
                    {list}
                  </li>
                );
              })}
            </ul>
          )}{" "}
        </div>
      </div>
      <div className="flex justify-between border-b pb-4 mt-6 md:hidden border-gray-300">
        <div className="inline-flex items-center gap-3">
          <Image
            src="/assets/images/avatars/bytewise.jpg"
            alt="right"
            width={32}
            height={32}
            className=" w-auto h-auto rounded-full cursor-pointer"
          />
          <div className="inline-flex items-start  gap-1 flex-col ">
            <h2 className="font-bold text-[12px] text-gray-900">
              Papa Software
            </h2>
            <span className="font-normal text-[12px] text-gray-500">
              16 Aug 2024
            </span>
          </div>
        </div>

        <div className="inline-flex items-end  gap-1 flex-col ">
          <h2 className="font-bold text-[12px] text-gray-900">-$10.00</h2>
          <span className="font-normal text-[12px] text-gray-500">
            16 Aug 2024
          </span>
        </div>
      </div>
      {/* desktop viewport */}
      <table className="hidden md:table  w-full mt-6">
        <thead className=" border-b border-gray-100">
          <tr className=" font-normal text-[12px] text-gray-500  ">
            <th className="text-left pl-4 pb-3">Recipient / Sender</th>
            <th className="pb-3 text-center">Category</th>
            <th className="pb-3">Transaction Date</th>
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
            <td className="text-center py-3">Personal Care</td>
            <td className="text-center py-3">29 Aug 2024</td>
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
