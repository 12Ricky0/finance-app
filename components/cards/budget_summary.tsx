import Chart from "../ui/charts";
import data from "../../data.json";

export default function Budget_Summary_Card() {
  const budgetNames = data.budgets.map((budget) => budget.category);
  const maxAmounts = data.budgets.map((budget) => budget.maximum);
  const colors = data.budgets.map((budget) => budget.theme);

  const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const totalSpent = data.transactions
    .filter((transaction) => budgetNames.includes(transaction.category))
    .filter((cat) => new Date(cat.date).getMonth() > 6) // Check if category exists in budgetNames
    .reduce((sum, transaction) => sum + transaction.amount, 0); // Sum up the amounts
  const totalMaxAmount = data.budgets.reduce(
    (superTotal, budget) => superTotal + budget.maximum,
    0
  );

  const amountSpent = budgetNames.reduce<Record<string, number>>(
    (acc, name) => {
      acc[name] = data.transactions
        .filter((transaction) => transaction.category === name)
        .filter((cat) => new Date(cat.date).getMonth() > 6)
        .reduce((sum, transaction) => sum + transaction.amount, 0);
      return acc;
    },
    {}
  );
  console.log(amountSpent);
  return (
    <section className="flex flex-col pt-6 bg-white rounded-lg mx-4 md:mx-[40px] lg:mr-0 px-[20px]">
      <div className="flex justify-center ">
        <Chart
          budgetNames={budgetNames}
          budgetMaxAmounts={maxAmounts}
          budgetColors={colors}
          totalAmount={totalSpent}
          budgetsMaxAmount={totalMaxAmount}
        />
      </div>
      <article className="mt-8">
        <h1 className="font-bold text-[20px] text-gray-900">
          Spending Summary
        </h1>
        <>
          {data.budgets.map((budget, index) => (
            <div
              key={index}
              className="flex justify-between mt-6 border-b last:border-b-0 pb-4 border-gray-100"
            >
              <div className="flex justify-center gap-4">
                <div
                  style={{ backgroundColor: budget.theme }}
                  className={`h-[20px] w-1 rounded-t-full rounded-b-full`}
                />
                <p className="font-normal text-[14px] text-gray-500">
                  {budget.category}
                </p>
              </div>
              <div>
                <span className="font-bold text-[16px] text-gray-900">
                  {formatCurrency.format(
                    Math.abs(amountSpent[budget.category])
                  )}
                </span>
                <span className="font-normal text-[12px] text-gray-500">
                  {" "}
                  of {formatCurrency.format(budget.maximum)}
                </span>
              </div>
            </div>
          ))}
        </>
      </article>
    </section>
  );
}
