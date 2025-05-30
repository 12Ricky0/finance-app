import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";
import Delete from "../ui/delete_modal";
import Budget_Edit_Form from "../forms/budget_edit_form";
import { BudgetProps, TransactionProps } from "@/libs/definitions";
import { FinanceContext } from "@/context";

export default function Budget_Plan_Card({
  budgetData,
  transactions,
  id,
}: {
  id: string;
  budgetData: BudgetProps[];
  transactions: TransactionProps[];
}) {
  const budgetNames = budgetData.map((budget) => budget.category);
  const { setCategory } = use(FinanceContext);
  const amountSpent = budgetNames.reduce<Record<string, number>>(
    (acc, name) => {
      acc[name] = transactions
        .filter((transaction) => transaction.category === name)
        .filter((cat) => new Date(cat.date).getMonth() > 6)
        .reduce((sum, transaction) => sum + transaction.amount, 0);
      return acc;
    },
    {}
  );
  function percentage(total: number, target: number) {
    const percentage = Math.min((total / target) * 100, 100);
    return percentage;
  }

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

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [defaultCategory, setDefaultCategory] = useState<string>("");
  const [defaultTheme, setDefaultTheme] = useState<string>("");
  const [maxAmount, setMaxAmount] = useState<number>(0);

  function toggleDropdown(index: number) {
    setActiveDropdown(activeDropdown === index ? null : index);
  }

  const categories = new Set<string>();
  transactions.forEach((transaction: TransactionProps) =>
    categories.add(transaction.category)
  );
  const categoriesArray = Array.from(categories);

  const budgetCategories = new Set<string>();
  budgetData.forEach((budget: BudgetProps) =>
    budgetCategories.add(budget.category)
  );
  const budgetCategoriesArray = Array.from(budgetCategories);

  const themes = new Set<string>();
  budgetData.forEach((budget: BudgetProps) => themes.add(budget.theme));
  const themesArray = Array.from(themes);

  return (
    <div className="flex flex-col gap-6 ">
      {budgetData.map((budget, index) => (
        <section
          key={index}
          className="bg-white rounded-lg mx-4 md:mx-10 lg:ml-0 md:py-8 px-[20px] py-6"
        >
          <div className="flex relative justify-between items-center mb-[20px]">
            <div className="flex gap-4 items-center">
              <div
                style={{ backgroundColor: budget.theme }}
                className="size-4 rounded-full"
              />
              <h1 className="text-gray-900 font-bold text-[20px]">
                {budget.category}
              </h1>
            </div>
            <Image
              src="/assets/images/icon-ellipsis.svg"
              alt="ellipsis"
              width={32}
              height={32}
              className=" w-auto hover:scale-125 h-auto cursor-pointer "
              onClick={() => {
                toggleDropdown(index);
                setSelectedBudget(budget.category);
              }}
            />
            {activeDropdown === index && (
              <div className=" cursor-pointer absolute top-6 right-0 z-50 flex flex-col py-3 px-[20px] rounded-lg text-[14px] bg-white drop-shadow-2xl">
                <span
                  onClick={() => {
                    setDisplayEditForm(!displayEditForm);
                    setActiveDropdown(null);
                    setDefaultCategory(budget.category);
                    setDefaultTheme(budget.theme);
                    setMaxAmount(budget.maximum);
                  }}
                  className="border-b hover:text-gray-500 border-gray-100 text-gray-900 pb-3"
                >
                  Edit Budget
                </span>
                <span
                  onClick={() => {
                    setDeleteModal(!deleteModal);
                    setActiveDropdown(null);
                  }}
                  className="pt-3 hover:text-red-500 text-[#C94736]"
                >
                  Delete Budget
                </span>
              </div>
            )}
          </div>

          <div className="w-full">
            <div className="flex justify-between items-center text-sm font-semibold mb-4">
              <span className="text-gray-500 text-[14px] font-normal">
                Maximum of {formatCurrency.format(budget.maximum)}
              </span>
            </div>
            <div className="w-full bg-[#F8F4F0] px-1 flex items-center rounded-lg h-8 relative">
              <div
                className="h-6 rounded-lg  transition-all duration-500"
                style={{
                  width: `${percentage(
                    Math.abs(amountSpent[budget.category]),
                    budget.maximum
                  )}%`,
                  backgroundColor: budget.theme,
                }}
              ></div>
            </div>
            <div className="flex justify-between mt-[13px]">
              <div className=" flex gap-4">
                <div
                  style={{ backgroundColor: budget.theme }}
                  className="w-1 rounded-t-full rounded-b-full"
                />
                <div className=" flex flex-col gap-1 mx-1">
                  <span className="font-normal text-[12px] text-gray-500">
                    Spent
                  </span>
                  <span className="font-bold text-[14px] text-gray-900">
                    ${Math.abs(amountSpent[budget.category])}
                  </span>
                </div>
              </div>
              <div className=" flex flex-col gap-1 ">
                <span className="font-normal text-[12px] text-gray-500">
                  Remaining
                </span>

                <span className="font-bold text-[14px] text-gray-900">
                  $
                  {budget.maximum - Math.abs(amountSpent[budget.category]) < 0
                    ? 0
                    : budget.maximum - Math.abs(amountSpent[budget.category])}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-beige-100 rounded-lg px-[20px] py-[20px] mt-[20px]">
            <div className="flex justify-between mb-[20px]">
              <h1 className="text-gray-900 font-bold text-[16px]">
                Latest Spending
              </h1>

              <Link
                href="/finance/transactions"
                className="inline-flex items-center gap-3"
              >
                <h2
                  onClick={() => setCategory(budget.category)}
                  className="font-normal text-[14px] hover:text-gray-900 text-gray-500"
                >
                  See All
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

            <section className="flex flex-col gap-3">
              {transactions
                .filter(
                  (transaction) => transaction.category === budget.category
                )
                .slice(-3)
                .map((info, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b pb-3 border-gray-300"
                  >
                    <div className="inline-flex items-center gap-3">
                      <Image
                        src={info.avatar.slice(1)}
                        alt="right"
                        width={32}
                        height={32}
                        className=" w-auto h-auto rounded-full cursor-pointer hidden md:block"
                      />
                      <h2 className="font-bold text-[12px] text-gray-900">
                        {info.name}
                      </h2>
                    </div>

                    <div className="inline-flex items-end  gap-1 flex-col ">
                      <h2 className="font-bold text-[12px] text-gray-900">
                        {formatCurrency.format(info.amount)}
                      </h2>
                      <span className="font-normal text-[12px] text-gray-500">
                        {setDate(info.date)}
                      </span>
                    </div>
                  </div>
                ))}
            </section>
          </div>
        </section>
      ))}
      {deleteModal && (
        <Delete
          toDelete="Budget"
          setDeleteModal={setDeleteModal}
          header={selectedBudget}
          id={id}
        />
      )}
      {displayEditForm && (
        <Budget_Edit_Form
          id={id}
          budgetTheme={themesArray}
          defaultCategory={defaultCategory}
          defaultTheme={defaultTheme}
          budgetCategories={budgetCategoriesArray}
          allCategories={categoriesArray}
          maxAmount={maxAmount}
          setDisplayEditForm={() => setDisplayEditForm(false)}
        />
      )}
    </div>
  );
}
