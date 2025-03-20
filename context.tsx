"use client";
import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface FinanceContextProps {
  isMinimized: boolean;
  setIsMinimized: Dispatch<SetStateAction<boolean>>;
}

export const FinanceContext = createContext<FinanceContextProps>(
  {} as FinanceContextProps
);

export default function FinanceProvider({ children }: { children: ReactNode }) {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <FinanceContext.Provider
      value={{
        isMinimized,
        setIsMinimized,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}
