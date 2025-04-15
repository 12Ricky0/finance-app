/* eslint-disable @typescript-eslint/no-explicit-any*/
"use server";
import { dbConnect } from "./dbConnect";
import Finance from "@/models/financeModel";
import {
  budgetSchema,
  BudgetProps,
  potDepositSchema,
  PotProps,
  potSchema,
} from "./definitions";
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
    await doc.save();
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
    await doc.save();
  } catch (error) {
    console.error(error);
  }
  revalidatePath("/finance/budget");
  redirect("/finance/budget");
}

export async function deleteBudget(id: string, prev: any, formData: FormData) {
  try {
    const key = formData.get("key");

    await dbConnect();
    const doc = await Finance.findById(id);

    if (!doc) {
      throw new Error("Note not found");
    }
    doc.budgets = doc.budgets.filter(
      (budget: BudgetProps) => budget.category !== key
    );
    await doc.save();
  } catch (error) {
    console.error(error);
  }
  revalidatePath("/finance/budget");
  redirect("/finance/budget");
}

export async function createPot(id: string, prev: any, formData: FormData) {
  const name = formData.get("pot-name");
  const target = formData.get("target");
  const theme = formData.get("theme");

  const validatePotData = potSchema.safeParse({
    name: name,
    target: Number(target),
    total: 0,
    theme: theme,
  });

  if (!validatePotData.success) {
    return {
      errors: validatePotData.error.flatten().fieldErrors,
    };
  }

  try {
    await dbConnect();
    const doc = await Finance.findById(id);
    const potHeading = doc.pots.map((pot: PotProps) => pot.name.toLowerCase());
    const { name } = validatePotData.data;
    if (potHeading.includes(name.toLowerCase())) {
      return { message: "Pot name already in use" };
    }
    doc.pots.push(validatePotData.data);
    await doc.save();
  } catch (error) {
    console.error(error);
  }
  revalidatePath("/finance/pots");
  redirect("/finance/pots");
}

export async function potDeposit(id: string, prev: any, formData: FormData) {
  const potID = formData.get("pot_id");
  const amount = formData.get("amount");

  const validatedDepositData = potDepositSchema.safeParse({
    amount: Number(amount),
  });

  if (!validatedDepositData.success) {
    return {
      errors: validatedDepositData.error.flatten().fieldErrors,
    };
  }

  try {
    await dbConnect();
    const doc = await Finance.findById(id);
    const { amount } = validatedDepositData.data;
    const toEdit = doc.pots.find((pot: PotProps) => pot.name == potID);
    if (toEdit.total + amount > toEdit.target) {
      toEdit.target = toEdit.total + amount;
      toEdit.total += amount;
    } else {
      toEdit.total += amount;
    }
    await doc.save();
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/finance/pots");
  redirect("/finance/pots");
}

export async function potWithdrawal(id: string, prev: any, formData: FormData) {
  const potID = formData.get("pot_id");
  const amount = formData.get("amount");
  console.log(potID, amount);

  const validatedWithdrawalData = potDepositSchema.safeParse({
    amount: Number(amount),
  });

  if (!validatedWithdrawalData.success) {
    return {
      errors: validatedWithdrawalData.error.flatten().fieldErrors,
    };
  }

  try {
    await dbConnect();
    const doc = await Finance.findById(id);
    const { amount } = validatedWithdrawalData.data;
    const toEdit = doc.pots.find((pot: PotProps) => pot.name == potID);
    if (toEdit.total - amount < 0) return;
    else {
      toEdit.total -= amount;
    }
    await doc.save();
  } catch (error) {
    console.error(error);
  }

  revalidatePath("/finance/pots");
  redirect("/finance/pots");
}
