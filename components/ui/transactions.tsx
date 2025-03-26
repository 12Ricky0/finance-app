"use client";
import Image from "next/image";
import Pagination from "./pagination";
import { useState, use, useEffect } from "react";
import { FinanceContext } from "@/context";
import data from "../../data.json";
import { Category_Dropdown, Sort_Dropdown } from "./dropdown";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Transaction() {
  const { isMinimized, category, sort } = use(FinanceContext);
  const [activePage, setActivePage] = useState(1);
  const [transactions, setTransactions] = useState(data.transactions);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchInput = searchParams.get("query")?.toString();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }

  useEffect(() => {
    let filteredTransactions = data.transactions;
    if (searchInput) {
      filteredTransactions = filteredTransactions.filter((transaction) =>
        transaction.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    if (category !== "All Transactions") {
      filteredTransactions = filteredTransactions.filter(
        (t) => t.category === category
      );
    }

    const sortedTransactions = [...filteredTransactions];

    if (sort === "Oldest") {
      sortedTransactions.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else if (sort === "A to Z") {
      sortedTransactions.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "Z to A") {
      sortedTransactions.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sort === "Highest") {
      sortedTransactions.sort((a, b) => b.amount - a.amount);
    } else if (sort === "Lowest") {
      sortedTransactions.sort((a, b) => a.amount - b.amount);
    } else {
      sortedTransactions.sort(
        (a, b) => new Date(b.date).getMonth() - new Date(a.date).getMonth()
      );
    }

    setTransactions(sortedTransactions);
    setActivePage(1);
  }, [category, searchInput, sort]);

  const totalPages = Math.ceil(transactions.length / 10);

  const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  function setDate(d: string) {
    const date = new Date(d);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  }

  const categories = new Set<string>(["All Transactions"]);
  data?.transactions.forEach((transaction) =>
    categories.add(transaction.category)
  );
  const categoriesArray = Array.from(categories);

  return (
    <section
      className={`${
        isMinimized ? "lg:ml-[80px]" : "lg:ml-[300px]"
      } transition-all duration-500 mb-[76px] md:mb-[84px] lg:mb-8`}
    >
      <h1
        className={`font-bold text-[32px] text-gray-900 mx-4 md:mx-10 mt-6 pb-8`}
      >
        Transactions
      </h1>

      <div
        className={`bg-white  mx-4 md:mx-10 md:py-8 pt-6 pb-8 px-[20px] md:px-8 relative rounded-lg`}
      >
        <div className="flex justify-between items-center gap-6">
          <div className="relative ">
            <input
              onChange={(e) => handleSearch(e.target.value)}
              type="search"
              className="py-3 border border-beige-500 rounded-lg px-[20px] lg:w-[320px] md:w-[160px]"
              placeholder="Search transaction"
              defaultValue={searchParams.get("query")?.toString()}
            />
            <Image
              src="/assets/images/icon-search.svg"
              alt="search"
              width={24}
              height={24}
              className="w-auto h-auto  cursor-pointer absolute right-[20px] top-1/3"
            />
          </div>
          <div className="flex gap-6 flex-row-reverse">
            <Category_Dropdown categoryLists={categoriesArray} />

            <Sort_Dropdown />
          </div>
        </div>
        {transactions
          .slice((activePage - 1) * 10, activePage * 10)
          .map((transaction, index) => (
            <div
              key={index}
              className="flex justify-between border-b pb-4 mt-6 md:hidden border-gray-300"
            >
              <div className="inline-flex items-center gap-3">
                <Image
                  src={transaction.avatar.slice(1)}
                  alt="right"
                  width={32}
                  height={32}
                  className=" rounded-full cursor-pointer"
                />
                <div className="inline-flex items-start  gap-1 flex-col ">
                  <h2 className="font-bold text-[12px] text-gray-900">
                    {transaction.name}
                  </h2>
                  <span className="font-normal text-[12px] text-gray-500">
                    {transaction.category}
                  </span>
                </div>
              </div>

              <div className="inline-flex items-end  gap-1 flex-col ">
                <h2
                  className={`font-bold text-[12px]  ${
                    transaction.amount > 0 ? "text-[#277C78]" : "text-gray-900"
                  } `}
                >
                  {" "}
                  {formatCurrency.format(transaction.amount)}
                </h2>
                <span className="font-normal text-[12px] text-gray-500">
                  {setDate(transaction.date)}
                </span>
              </div>
            </div>
          ))}
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
          <tbody className=" ">
            {transactions
              .slice((activePage - 1) * 10, activePage * 10)
              .map((transaction, index) => (
                <tr
                  key={index}
                  className=" mx-4 border-b border-gray-100 font-normal text-[12px] text-gray-500 mt-6 "
                >
                  <td className="flex items-center gap-4 text-left pl-4 py-3">
                    <Image
                      src={transaction.avatar.slice(1)}
                      alt="right"
                      width={40}
                      height={40}
                      className="  rounded-full cursor-pointer"
                    />
                    <h2 className="font-bold text-[14px] text-gray-900">
                      {transaction.name}
                    </h2>
                  </td>
                  <td className="text-center py-3">{transaction.category}</td>
                  <td className="text-center py-3">
                    {setDate(transaction.date)}
                  </td>
                  <td
                    className={`font-bold text-[14px] ${
                      transaction.amount > 0
                        ? "text-[#277C78]"
                        : "text-gray-900"
                    }  text-right pr-4 py-3`}
                  >
                    {formatCurrency.format(transaction.amount)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Pagination
          totalPages={totalPages}
          activePage={activePage}
          setActivePage={setActivePage}
        />
        {/* desktop viewport */}
      </div>
    </section>
  );
}
