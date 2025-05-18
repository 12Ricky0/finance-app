/* eslint-disable @typescript-eslint/no-explicit-any*/
"use server";
import { dbConnect } from "./dbConnect";
import Finance from "@/models/financeModel";
import User from "@/models/userModel";
import {
  budgetSchema,
  BudgetProps,
  potDepositSchema,
  PotProps,
  potSchema,
  credentialsSchema,
} from "./definitions";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcryptjs from "bcryptjs";
import { notFound } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import data from "../data.json";

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
  const toDelete = formData.get("to_delete");

  try {
    const key = formData.get("key");

    await dbConnect();
    const doc = await Finance.findById(id);

    if (!doc) {
      throw new Error("Note not found");
    }
    if (toDelete === "Budget") {
      doc.budgets = doc.budgets.filter(
        (budget: BudgetProps) => budget.category !== key
      );
    } else {
      doc.pots = doc.pots.filter((pot: PotProps) => pot.name !== key);
    }
    await doc.save();
  } catch (error) {
    console.error(error);
  }
  if (toDelete === "Budget") {
    revalidatePath("/finance/budget");
    redirect("/finance/budget");
  } else {
    revalidatePath("/finance/pots");
    redirect("/finance/pots");
  }
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

export async function editPot(id: string, prev: any, formData: FormData) {
  const name = formData.get("pot-name");
  const target = formData.get("target");
  const theme = formData.get("theme");
  const defaultName = formData.get("default_theme");

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
    const { name, target, theme } = validatePotData.data;

    const toEdit = doc.pots.find(
      (pot: PotProps) => pot.name.toLowerCase() == defaultName
    );
    const potNames = doc.pots
      .filter((pot: PotProps) => pot.name.toLowerCase() !== defaultName)
      .map((pot: PotProps) => pot.name.toLowerCase());

    if (potNames.includes(name.toLowerCase())) {
      return { message: "Pot name already in use" };
    }

    toEdit.name = name;
    toEdit.target = target;
    toEdit.theme = theme;
    await doc.save();
  } catch (error) {
    console.error(error);
  }
  revalidatePath("/finance/pots");
  redirect("/finance/pots");
}

export async function getUser(email: string) {
  await dbConnect();

  return await User.findOne({ email: email });
}

export async function registerUser(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const name = formData.get("name");
  await dbConnect();

  const validateCredentials = credentialsSchema.safeParse({
    name: name,
    email: email,
    password: password,
  });

  const user = await getUser(email!.toString());
  if (user) {
    return { message: "Email already in use" };
  }

  if (!validateCredentials.success) {
    return {
      errors: validateCredentials.error.flatten().fieldErrors,
    };
  }
  try {
    const salt = bcryptjs.genSaltSync(10);

    const { email, password, name } = validateCredentials.data;
    const hashedPassword = await bcryptjs.hash(password, salt);
    const user = { name: name, email: email, password: hashedPassword };
    await User.create(user);

    const userData = {
      user: email,
      balance: data?.balance,
      transactions: data.transactions,
      budgets: data.budgets,
      pots: data.pots,
    };
    await Finance.create(userData);
  } catch (error) {
    console.error(error);
    throw new Error(notFound());
  }

  redirect("/");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
  redirect("/");
}
