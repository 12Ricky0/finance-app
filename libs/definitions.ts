export interface PaginationProps {
  totalPages: number;
  activePage: number;
  setActivePage: (value: number) => void;
}

export interface TransactionProps {
  id: string;

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
  current: number;
  income: number;
  expenses: number;
}
