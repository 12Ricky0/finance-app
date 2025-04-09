import Budget_Form from "@/components/forms/budget_form";
import { fetchAllData } from "@/libs/data";
import { TransactionProps, BudgetProps } from "@/libs/definitions";

export default async function Create_Budget() {
  const data = await fetchAllData();
  const res = await data?.json();

  const categories = new Set<string>();
  res[0].transactions.forEach((transaction: TransactionProps) =>
    categories.add(transaction.category)
  );
  const categoriesArray = Array.from(categories);

  const budgetCategories = new Set<string>();
  res[0].budgets.forEach((budget: BudgetProps) =>
    budgetCategories.add(budget.category)
  );
  const budgetCategoriesArray = Array.from(budgetCategories);

  const themes = new Set<string>();
  res[0].budgets.forEach((budget: BudgetProps) => themes.add(budget.theme));
  const themesArray = Array.from(themes);

  return (
    <Budget_Form
      allCategories={categoriesArray}
      budgetCategories={budgetCategoriesArray}
      budgetTheme={themesArray}
      id={res[0]._id}
    />
  );
}
