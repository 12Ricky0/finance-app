import { dbConnect } from "./dbConnect";
import Finance from "@/models/financeModel";
import { notFound } from "next/navigation";

export async function fetchAllData() {
  try {
    await dbConnect();
    const res = await Finance.find();
    return Response.json(res);
  } catch (error) {
    console.error(error);
    throw new Error(notFound());
  }
}
