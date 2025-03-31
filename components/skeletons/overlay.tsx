"use client";
import { ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

export function Overlay({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  function handleClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget && pathname != "/finance/pots") {
      router.back();
    }
  }
  return (
    <div
      onClick={handleClick}
      className={`overlay min-w-full z-100 flex items-center justify-center `}
    >
      {children}
    </div>
  );
}
