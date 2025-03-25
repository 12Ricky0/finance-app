import Image from "next/image";
import { useState, use } from "react";
import { FinanceContext } from "@/context";

export function Category_Dropdown({
  categoryLists,
}: {
  categoryLists: string[];
}) {
  const [displayCatogory, setDisplayCategory] = useState(false);
  const { category, setCategory } = use(FinanceContext);

  return (
    <>
      <div className="relative hidden md:block">
        <div
          onClick={() => setDisplayCategory(!displayCatogory)}
          className="flex gap-2 items-center cursor-pointer"
        >
          <span className="font-normal text-gray-500 text-[14px]">
            Category
          </span>
          <div className="border-gray-500 border px-[20px] justify-between w-[177px] flex gap-4 py-3 rounded-lg">
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
    </>
  );
}

export function Sort_Dropdown() {
  const { sort, setSort } = use(FinanceContext);
  const [displaySort, setDisplaySort] = useState(false);

  const sortLists = [
    "Latest",
    "Oldest",
    "A to Z",
    "Z to A",
    "Highest",
    "Lowest",
  ];

  return (
    <>
      <div className="relative hidden md:block">
        <div
          onClick={() => setDisplaySort(!displaySort)}
          className="flex  gap-2 items-center  cursor-pointer"
        >
          <span className="font-normal text-gray-500 text-[14px]">Sort By</span>
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
    </>
  );
}
