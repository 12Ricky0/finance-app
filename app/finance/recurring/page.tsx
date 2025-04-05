import Recurring_Bill_UI from "@/components/ui/recurring_bill_ui";
import { fetchAllData } from "@/libs/data";

export default async function Recurring() {
  const data = await fetchAllData();
  const res = await data?.json();

  return <Recurring_Bill_UI transactions={res[0].transactions} />;
}
