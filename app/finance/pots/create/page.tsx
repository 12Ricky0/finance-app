import Pot_Form from "@/components/forms/pot_form";
import { fetchAllData } from "@/libs/data";
import { PotProps } from "@/libs/definitions";

export default async function Create_Pot() {
  const data = await fetchAllData();
  const res = await data?.json();

  const themes = new Set<string>();
  res[0].pots.forEach((pot: PotProps) => themes.add(pot.theme));
  const themesArray = Array.from(themes);

  return <Pot_Form id={res[0]._id} potTheme={themesArray} />;
}
