"use client";
import Image from "next/image";
import { useState, useEffect, use } from "react";
import { Sort_Dropdown } from "../ui/dropdown";
import data from "../../data.json";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FinanceContext } from "@/context";

export default function Recurring_Bill_Card() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchInput = searchParams.get("query")?.toString();
  const { sort } = use(FinanceContext);
  const currentDefaultDate = new Date("August 19, 2024");

  const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1:
        return "1st";
      case 2:
        return "2nd";
      case 3:
        return "3rd";
      default:
        return `${day}th`;
    }
  };

  const recurringBills = data.transactions
    .filter((transaction) => transaction.recurring === true)
    .filter(
      (cat) => new Date(cat.date).getMonth() == currentDefaultDate.getMonth()
    );
  const [transactions, setTransactions] = useState(recurringBills);

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
    const recurring = data.transactions
      .filter((transaction) => transaction.recurring === true)
      .filter(
        (cat) => new Date(cat.date).getMonth() == currentDefaultDate.getMonth()
      );
    let filteredTransactions = recurring;
    if (searchInput) {
      filteredTransactions = filteredTransactions.filter((transaction) =>
        transaction.name.toLowerCase().includes(searchInput.toLowerCase())
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
  }, [searchInput, sort]);

  return (
    <section className="bg-white mx-4 md:mx-0 md:py-8 pt-6 pb-8 px-[20px] relative rounded-lg">
      <div className="flex justify-between items-center gap-6">
        <div className="relative w-full">
          <input
            onChange={(e) => handleSearch(e.target.value)}
            type="search"
            className="py-3 border md:w-[320px] w-full border-beige-500 rounded-lg px-[20px] "
            placeholder="Search bills"
            defaultValue={searchParams.get("query")?.toString()}
          />
          <Image
            src="/assets/images/icon-search.svg"
            alt="search"
            width={24}
            height={24}
            className="w-auto h-auto  cursor-pointer absolute right-[20px] md:left-[280px] top-1/3"
          />
        </div>
        <div className="md:flex md:w-full justify-end">
          <Sort_Dropdown />
        </div>
      </div>
      {transactions.map((bill, index) => (
        <div
          key={index}
          className="flex gap-2 flex-col border-b pb-[20px] mt-6 md:hidden border-gray-300"
        >
          <div className="inline-flex items-center gap-3">
            <Image
              src={bill.avatar.slice(1)}
              alt="right"
              width={32}
              height={32}
              className=" w-auto h-auto rounded-full cursor-pointer"
            />
            <h2 className="font-bold text-[14px] text-gray-900">{bill.name}</h2>
          </div>

          <div className="flex justify-between">
            <div className="inline-flex gap-2 items-center ">
              <span className="font-normal text-[12px] text-[#277C78]">
                Monthly - {getOrdinalSuffix(new Date(bill.date).getDate())}
              </span>

              <Image
                src="/assets/images/icon-selected.svg"
                alt="right"
                width={32}
                height={32}
                className=" w-auto h-auto cursor-pointer"
              />
            </div>
            <span className="font-bold text-[14px] text-gray-900">
              {formatCurrency.format(bill.amount)}
            </span>
          </div>
        </div>
      ))}
      {/* desktop viewport */}
      <table className="hidden md:table  w-full mt-6">
        <thead className=" border-b border-gray-100">
          <tr className=" font-normal text-[12px] text-gray-500  ">
            <th className="text-left pl-4 pb-3">Bill Title</th>
            <th className="pb-3 text-center">Due Date</th>
            <th className="text-right pr-4 pb-3">Amount</th>
          </tr>
        </thead>
        <tbody className="">
          {transactions.map((bill, index) => (
            <tr
              key={index}
              className=" mx-4 font-normal text-[12px] text-gray-500 mt-6  border-b border-gray-100"
            >
              <td className="flex items-center gap-4 text-left pl-4 py-3">
                <Image
                  src={bill.avatar.slice(1)}
                  alt="right"
                  width={32}
                  height={32}
                  className=" w-auto h-auto rounded-full cursor-pointer"
                />
                <h2 className="font-bold text-[14px] text-gray-900">
                  {bill.name}
                </h2>
              </td>
              <td className="text-center  text-[#277C78] py-3">
                <div className="flex justify-center gap-2">
                  <span>
                    Monthly - {getOrdinalSuffix(new Date(bill.date).getDate())}
                  </span>
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
                {formatCurrency.format(bill.amount)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pagination /> */}
      {/* desktop viewport */}
    </section>
  );
}
