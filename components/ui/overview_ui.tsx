"use client";
import Balance_Card from "../cards/overview_header";
import Pots_Card from "../cards/overview_pots";
import Transaction_Card from "../cards/overview_transaction";
import Budget_Card from "../cards/overview_budget";
import Recurring_Card from "../cards/overview_recurring";
import { use } from "react";
import { FinanceContext } from "@/context";
import {
  BalanceProps,
  PotProps,
  TransactionProps,
  BudgetProps,
} from "@/libs/definitions";

export function Overview_Ui({
  balance,
  pots,
  transactions,
  budgets,
}: {
  balance: BalanceProps;
  pots: PotProps[];
  transactions: TransactionProps[];
  budgets: BudgetProps[];
}) {
  const { isMinimized } = use(FinanceContext);
  return (
    <section
      className={`transition-all duration-500 mb-8 ${
        isMinimized ? "lg:ml-[80px]" : "lg:ml-[300px]"
      }`}
    >
      <h1 className="font-bold md:mx-[40px] text-[32px] text-gray-900 mx-4 mt-6 pb-8">
        Overview
      </h1>

      <Balance_Card balance={balance} />
      <div className="lg:flex gap-6">
        <div className="flex-1/12">
          <Pots_Card potsData={pots} />
          <Transaction_Card transactionData={transactions} />
        </div>
        <div className="flex-1">
          <Budget_Card transactions={transactions} budgetData={budgets} />
          <Recurring_Card transactions={transactions} />
        </div>
      </div>
    </section>
  );
}
