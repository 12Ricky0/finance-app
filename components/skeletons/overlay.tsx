"use client";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export function Overlay({ children }: { children: ReactNode }) {
  const router = useRouter();
  function handleClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
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
