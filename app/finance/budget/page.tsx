import Budget_UI from "@/components/ui/budget_ui";
import { fetchAllData } from "@/libs/data";

export default async function Budget() {
  const data = await fetchAllData();
  const res = await data?.json();

  return (
    <Budget_UI budget={res[0].budgets} transactions={res[0].transactions} />
  );
}
