import Transaction from "@/components/containers/transactions";
import { fetchAllData } from "@/libs/data";

export default async function Transaction_Page() {
  const data = await fetchAllData();
  const res = await data?.json();

  return <Transaction transactionData={res[0].transactions} />;
}
