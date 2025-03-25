"use client";
import React, { createContext, useState, ReactNode } from "react";
import { FinanceContextProps } from "./libs/definitions";

export const FinanceContext = createContext<FinanceContextProps>(
  {} as FinanceContextProps
);

export default function FinanceProvider({ children }: { children: ReactNode }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [category, setCategory] = useState("All Transactions");
  const [sort, setSort] = useState("Latest");

  return (
    <FinanceContext.Provider
      value={{
        isMinimized,
        setIsMinimized,
        category,
        setCategory,
        sort,
        setSort,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}
