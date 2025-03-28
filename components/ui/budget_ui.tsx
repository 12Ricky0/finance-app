"use client";
import Budget_Plan_Card from "../cards/budget_plan";
import Budget_Summary_Card from "../cards/budget_summary";
import { use } from "react";
import { FinanceContext } from "@/context";
import Link from "next/link";

export default function Budget_UI() {
  const { isMinimized } = use(FinanceContext);

  return (
    <main
      className={`transition-all duration-500 mb-[76px] md:mb-[84px] lg:mb-8  ${
        isMinimized ? "lg:ml-[80px]" : "lg:ml-[300px]"
      }`}
    >
      <div className={`mx-6 md:mx-[40px] flex justify-between items-center`}>
        <h1 className={`font-bold text-[32px] text-gray-900  mt-6 pb-8`}>
          Budgets
        </h1>
        <Link
          href=""
          className="p-4 rounded-lg bg-gray-900 text-white font-bold text-[14px]"
        >
          + Add New Pot
        </Link>
      </div>

      <div className="flex gap-6 lg:flex-row justify-between  flex-col">
        <div className="flex-1">
          <Budget_Summary_Card />
        </div>
        <div className="flex-1/6">
          <Budget_Plan_Card />
        </div>
      </div>
    </main>
  );
}
