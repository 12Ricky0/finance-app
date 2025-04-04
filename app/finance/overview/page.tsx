import { Overview_Ui } from "@/components/ui/overview_ui";
import { fetchAllData } from "@/libs/data";

export default async function Overview() {
  const data = await fetchAllData();
  const res = await data?.json();
  return (
    <>
      <Overview_Ui balance={res[0].balance} />
      {/* <Overview_Loading /> */}
    </>
  );
}
