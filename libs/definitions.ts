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

// SCHEMEA
import { z } from "zod";

export const budgetSchema = z.object({
  category: z.string(),
  maximum: z
    .number({ required_error: "Amount is required" })
    .positive({ message: "Max spend must be greater than 0" }),
  theme: z.string(),
});
