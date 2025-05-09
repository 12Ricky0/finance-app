import Image from "next/image";
import Chart from "../containers/charts";
import Link from "next/link";
import { BudgetProps, TransactionProps } from "@/libs/definitions";

export default function Budget_Card({
  budgetData,
  transactions,
}: {
  budgetData: BudgetProps[];
  transactions: TransactionProps[];
}) {
  const budgets = budgetData.slice(0, 4);
  const budgetNames = budgetData.map((budget) => budget.category);
  const maxAmounts = budgetData.map((budget) => budget.maximum);
  const colors = budgetData.map((budget) => budget.theme);
  const totalSpent = transactions
    .filter((transaction) => budgetNames.includes(transaction.category))
    .filter((cat) => new Date(cat.date).getMonth() > 6)
    .reduce((sum, transaction) => sum + transaction.amount, 0);
  const totalMaxAmount = budgetData.reduce(
    (superTotal, budget) => superTotal + budget.maximum,
    0
  );
  return (
    <section className="bg-white py-6 px-[20px] relative rounded-lg md:gap-6 mx-4 md:mx-[40px] md:p-[32px] lg:ml-0 mt-4 md:mt-6">
      {" "}
      <div className="flex justify-between mb-[32px]">
        <h1 className="text-gray-900 font-bold text-[20px]">Budgets</h1>

        <Link href="/finance/budget" className="inline-flex items-center gap-3">
          <h2 className="font-normal text-[14px] hover:text-gray-900 text-gray-500">
            See Details
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
      <div className="flex flex-col gap-4 md:flex-row ">
        <div className="mx-auto">
          <Chart
            budgetNames={budgetNames}
            budgetMaxAmounts={maxAmounts}
            budgetColors={colors}
            totalAmount={totalSpent}
            budgetsMaxAmount={totalMaxAmount}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-1 grid-cols-2">
          {budgets.map((budget, index) => (
            <div key={index} className="flex gap-4 shrink-0">
              <div
                style={{ backgroundColor: budget.theme }}
                className={`w-1  h-[43px] rounded-t-full rounded-b-full`}
              />

              <article className="flex flex-col gap-[4px]">
                <p className="font-normal text-[12px] text-gray-500">
                  {budget.category}
                </p>
                <h1 className="text-gray-900 font-bold text-[14px]">
                  ${budget.maximum}
                </h1>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
