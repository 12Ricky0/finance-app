import Pot_Form from "@/components/forms/pot_form";
import { fetchAllData } from "@/libs/data";
import { TransactionProps, PotProps } from "@/libs/definitions";

export default async function Create_Pot() {
  const data = await fetchAllData();
  const res = await data?.json();

  // const categories = new Set<string>();
  // res[0].transactions.forEach((transaction: TransactionProps) =>
  //   categories.add(transaction.category)
  // );
  // const categoriesArray = Array.from(categories);

  // const budgetCategories = new Set<string>();
  // res[0].budgets.forEach((budget: BudgetProps) =>
  //   budgetCategories.add(budget.category)
  // );
  // const budgetCategoriesArray = Array.from(budgetCategories);

  const themes = new Set<string>();
  res[0].pots.forEach((pot: PotProps) => themes.add(pot.theme));
  const themesArray = Array.from(themes);

  return <Pot_Form id={res[0]._id} potTheme={themesArray} />;
}
