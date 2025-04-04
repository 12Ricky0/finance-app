import Finance from "@/models/financeModel";
import { dbConnect } from "@/libs/dbConnect";

export async function POST(request: Request) {
  const res = await request.json();
  await dbConnect();
  await Finance.create(res);
  return Response.json(
    { message: "Data Inserted Sucessfully" },
    { status: 200 }
  );
}
