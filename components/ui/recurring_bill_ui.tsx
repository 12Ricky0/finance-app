"use client";
import Budget_Summary_Card from "../cards/budget_summary";
import Total_Bill_Card from "../cards/total_bill";
import Recurring_Bill_Card from "../cards/recurring_bill";
import { use } from "react";
import { FinanceContext } from "@/context";
import Link from "next/link";

export default function Recurring_Bill_UI() {
  const { isMinimized } = use(FinanceContext);

  return (
    <main
      className={`transition-all duration-500 mb-[76px] md:mb-[84px] lg:mb-8  ${
        isMinimized ? "lg:ml-[80px]" : "lg:ml-[300px]"
      }`}
    >
      <h1 className={`font-bold text-[32px] text-gray-900 mx-3.5 mt-6 pb-8`}>
        Recurring Bills
      </h1>

      <div className="flex gap-6 lg:flex-row justify-between  flex-col">
        <div className="flex-1">
          <Total_Bill_Card />
        </div>
        <div className="flex-1/6">
          <Recurring_Bill_Card />
        </div>
      </div>
    </main>
  );
}
