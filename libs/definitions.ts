import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
  totalPages: number;
  activePage: number;
  setActivePage: (value: number) => void;
}

export interface FinanceContextProps {
  isMinimized: boolean;
  setIsMinimized: Dispatch<SetStateAction<boolean>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  sort: string;
  setSort: Dispatch<SetStateAction<string>>;
}

export interface CategoryProps {
  category: string;
  setCategory: (value: string) => void;
}

export interface TransactionProps {
  id?: string;
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
}

export interface PotProps {
  id: string;
  name: string;
  target: number;
  total: number;
  theme: string;
}

export interface BudgetProps {
  category: string;
  maximum: number;
  theme: string;
}

export interface BudgetFormProps {
  setDisplayForm: (value: boolean) => void;
  allCategories: string[];
  budgetCategories: string[];
  budgetTheme: string[];
  id: string;
}

export interface budgetEditProps {
  setDisplayEditForm: (value: boolean) => void;
  allCategories: string[];
  budgetCategories: string[];
  defaultCategory: string;
  defaultTheme: string;
  maxAmount: number;
  budgetTheme: string[];
  id: string;
}

export interface DeleteProps {
  header: string;
  id: string;
  toDelete: string;
  setDeleteModal: (value: boolean) => void;
}

export interface ChartProps {
  budgetNames: string[];
  budgetMaxAmounts: number[];
  budgetColors: string[];
  totalAmount: number;
  budgetsMaxAmount: number;
}

export interface BalanceProps {
  id: string;
  current: number;
  income: number;
  expenses: number;
}

export interface FinanceProps {
  id: string;

  balance: BalanceProps;
  transactions: TransactionProps[];
  budgets: BudgetProps[];
  pots: PotProps[];
}

export type UserProps = {
  _id?: string;
  name: string;
  email: string;
  password: string;
};

// SCHEMEA
import { z } from "zod";

export const budgetSchema = z.object({
  category: z.string(),
  maximum: z
    .number({ required_error: "Amount is required" })
    .positive({ message: "Max spend must be greater than 0" }),
  theme: z.string(),
});

export const potSchema = z.object({
  name: z.string().min(1, { message: "Pot name is required" }),
  target: z
    .number({ required_error: "Amount is required" })
    .positive({ message: "Amount spend must be greater than 0" }),
  total: z.number(),
  theme: z.string(),
});

export const potDepositSchema = z.object({
  amount: z
    .number({ required_error: "Amount is required" })
    .positive({ message: "Amount spend must be greater than 0" }),
});

export const credentialsSchema = z.object({
  name: z.string().min(1, { message: "Enter a Name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 character(s)" }),
});
