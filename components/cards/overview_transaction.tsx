"use client";
import Image from "next/image";
import Link from "next/link";
import { TransactionProps } from "@/libs/definitions";

export default function Transaction_Card({
  transactionData,
}: {
  transactionData: TransactionProps[];
}) {
  const transactions = transactionData.slice(0, 5);

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

  return (
    <section className="bg-white pt-6 px-[20px] rounded-lg md:gap-6 mx-4 lg:mr-0 md:mx-[40px] md:px-[32px] md:pt-[22px]">
      <div className="flex justify-between mb-[12px]">
        <h1 className="text-gray-900 font-bold text-[20px]">Transactions</h1>

        <Link
          href="/finance/transactions"
          className="inline-flex items-center gap-3"
        >
          <h2 className="font-normal text-[14px] hover:text-gray-900 text-gray-500">
            View All
          </h2>
          <Image
            src="/assets/images/icon-caret-right.svg"
            alt="right"
            width={32}
            height={32}
            className=" w-auto h-auto cursor-pointer "
          />
        </Link>
      </div>
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className="flex justify-between border-b py-[20px] last:border-b-0 border-gray-300"
        >
          <div className="inline-flex items-center gap-4">
            <Image
              src={transaction.avatar.slice(1)}
              alt="right"
              width={32}
              height={32}
              className=" w-auto h-auto rounded-full cursor-pointer"
            />
            <h2 className="font-bold text-[14px] text-gray-900">
              {transaction.name}
            </h2>
          </div>

          <div className="inline-flex items-end  gap-2 flex-col ">
            <h2
              className={`font-bold text-[14px] ${
                Number(transaction.amount) > 0
                  ? "text-[#277C78]"
                  : "text-gray-900"
              } `}
            >
              {formatCurrency.format(transaction.amount)}
            </h2>
            <span className="font-normal text-[12px] text-gray-500">
              {setDate(transaction.date)}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
