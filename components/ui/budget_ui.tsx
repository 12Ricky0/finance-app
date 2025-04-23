"use client";
import Budget_Plan_Card from "../cards/budget_plan";
import Budget_Summary_Card from "../cards/budget_summary";
import { use, useState } from "react";
import { FinanceContext } from "@/context";
import { BudgetProps, TransactionProps } from "@/libs/definitions";
import Budget_Form from "../forms/budget_form";

export default function Budget_UI({
  budget,
  transactions,
  id,
}: {
  budget: BudgetProps[];
  transactions: TransactionProps[];
  id: string;
}) {
  const { isMinimized } = use(FinanceContext);
  const [displayBudgetForm, setDisplayBudgetForm] = useState(false);

  const categories = new Set<string>();
  transactions.forEach((transaction: TransactionProps) =>
    categories.add(transaction.category)
  );
  const categoriesArray = Array.from(categories);

  const budgetCategories = new Set<string>();
  budget.forEach((budget: BudgetProps) =>
    budgetCategories.add(budget.category)
  );
  const budgetCategoriesArray = Array.from(budgetCategories);

  const themes = new Set<string>();
  budget.forEach((budget: BudgetProps) => themes.add(budget.theme));
  const themesArray = Array.from(themes);

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
        <button
          className="p-4 cursor-pointer rounded-lg hover:bg-gray-500 bg-gray-900 text-white font-bold text-[14px]"
          onClick={() => setDisplayBudgetForm(!displayBudgetForm)}
        >
          + Add New Budget
        </button>
      </div>

      <div className="flex gap-6 lg:flex-row justify-between  flex-col">
        <div className="flex-1">
          <Budget_Summary_Card
            budgetData={budget}
            transactions={transactions}
          />
        </div>
        <div className="flex-1/6">
          <Budget_Plan_Card
            id={id}
            budgetData={budget}
            transactions={transactions}
          />
        </div>
      </div>
      {displayBudgetForm && (
        <Budget_Form
          setDisplayForm={() => setDisplayBudgetForm(false)}
          allCategories={categoriesArray}
          budgetCategories={budgetCategoriesArray}
          budgetTheme={themesArray}
          id={id}
        />
      )}
    </main>
  );
}
