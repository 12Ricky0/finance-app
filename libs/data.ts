import { dbConnect } from "./dbConnect";
import Finance from "@/models/financeModel";
import { notFound } from "next/navigation";
import { auth } from "@/auth";

export async function fetchAllData() {
  try {
    await dbConnect();
    const session = await auth();
    const res = await Finance.find({ user: session?.user?.email });
    return Response.json(res);
  } catch (error) {
    console.error(error);
    throw new Error(notFound());
  }
}
