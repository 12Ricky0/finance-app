"use server";
import { dbConnect } from "./dbConnect";
import Finance from "@/models/financeModel";
import { budgetSchema, BudgetProps } from "./definitions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createBudget(id: string, prev: any, formData: FormData) {
  const category = formData.get("budgetCategory");
  const theme = formData.get("theme");
  const maximum = Number(formData.get("max_spend"));

  const validateBudgetData = budgetSchema.safeParse({
    category: category,
    maximum: maximum,
    theme: theme,
  });

  if (!validateBudgetData.success) {
    return {
      errors: validateBudgetData.error.flatten().fieldErrors,
    };
  }
  try {
    await dbConnect();
    const doc = await Finance.findById(id);
    if (!doc) {
      throw new Error("Note not found");
    }
    doc.budgets.push(validateBudgetData.data);
    doc.save();
  } catch (error) {
    console.error(error);
  }
  revalidatePath("/finance/budget");
  redirect("/finance/budget");
}
export async function editBudget(id: string, prev: any, formData: FormData) {
  const category = formData.get("budgetCategory");
  const theme = formData.get("theme");
  const maximum = Number(formData.get("max_spend"));

  const validateBudgetData = budgetSchema.safeParse({
    category: category,
    maximum: maximum,
    theme: theme,
  });

  if (!validateBudgetData.success) {
    return {
      errors: validateBudgetData.error.flatten().fieldErrors,
    };
  }

  try {
    const { category, maximum, theme } = validateBudgetData.data;
    await dbConnect();
    const doc = await Finance.findById(id);

    if (!doc) {
      throw new Error("Note not found");
    }
    const toEdit = doc.budgets.find(
      (budget: BudgetProps) => budget.category == category
    );

    toEdit.category = category;
    toEdit.maximum = maximum;
    toEdit.theme = theme;
    doc.save();
  } catch (error) {
    console.error(error);
  }
  revalidatePath("/finance/budget");
  redirect("/finance/budget");
}
