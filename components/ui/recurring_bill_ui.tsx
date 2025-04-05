"use client";
import Total_Bill_Card from "../cards/total_bill";
import Recurring_Bill_Card from "../cards/recurring_bill";
import { use } from "react";
import { FinanceContext } from "@/context";
import { TransactionProps } from "@/libs/definitions";

export default function Recurring_Bill_UI({
  transactions,
}: {
  transactions: TransactionProps[];
}) {
  const { isMinimized } = use(FinanceContext);

  return (
    <main
      className={`transition-all duration-500 mb-[76px] md:mb-[84px] lg:mb-8  ${
        isMinimized ? "lg:ml-[80px]" : "lg:ml-[300px]"
      }`}
    >
      <h1
        className={`font-bold text-[32px] text-gray-900 mx-6 md:mx-[40px] mt-6 pb-8`}
      >
        Recurring Bills
      </h1>

      <div className="flex gap-6 lg:flex-row justify-between md:mx-[40px] flex-col">
        <div className="flex-1">
          <Total_Bill_Card transactionData={transactions} />
        </div>
        <div className="flex-1/6">
          <Recurring_Bill_Card transactionData={transactions} />
        </div>
      </div>
    </main>
  );
}
