"use client";
import Balance_Card from "../cards/overview_header";
import Pots_Card from "../cards/overview_pots";
import Transaction_Card from "../cards/overview_transaction";
import Budget_Card from "../cards/overview_budget";
import Recurring_Card from "../cards/overview_recurring";
import { useContext } from "react";
import { FinanceContext } from "@/context";
import data from "../../data.json";

export function Overview_Ui() {
  const { isMinimized } = useContext(FinanceContext);
  return (
    <section
      className={`transition-all duration-500 mb-8 ${
        isMinimized ? "lg:ml-[80px]" : "lg:ml-[300px]"
      }`}
    >
      <h1 className="font-bold md:mx-[40px] text-[32px] text-gray-900 mx-4 mt-6 pb-8">
        Overview
      </h1>

      <Balance_Card balance={data.balance} />
      <div className="lg:flex gap-6">
        <div className="flex-1/12">
          <Pots_Card />
          <Transaction_Card />
        </div>
        <div className="flex-1">
          <Budget_Card />
          <Recurring_Card />
        </div>
      </div>
    </section>
  );
}
