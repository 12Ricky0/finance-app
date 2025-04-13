import Pot_Container from "@/components/containers/pots_container";
import { fetchAllData } from "@/libs/data";

export default async function Pots() {
  const data = await fetchAllData();
  const res = await data?.json();

  return (
    <main className="mx-4 md:mx-[40px]">
      <Pot_Container id={res[0]._id} pots={res[0].pots} />
    </main>
  );
}
