"use client";
import { Skeleton } from "@mui/material";
import { use } from "react";
import { FinanceContext } from "@/context";

export default function Pot_Loading() {
  const { isMinimized } = use(FinanceContext);

  return (
    <section
      className={`transition-all duration-500 mb-[76px] md:mb-[84px] lg:mb-8  ${
        isMinimized ? "lg:ml-[80px]" : "lg:ml-[300px]"
      }`}
    >
      <div
        className={`mx-6 md:mx-[40px] flex gap-6 justify-between items-center`}
      >
        <Skeleton variant="text" width="200px" sx={{ fontSize: "3rem" }} />
        <Skeleton variant="text" width="200px" sx={{ fontSize: "5rem" }} />
      </div>

      <div
        className={`grid gap-6 mx-6 md:mx-[40px] grid-cols-1 lg:grid-cols-2 transition-all duration-500`}
      >
        <Skeleton variant="rounded" width="100%" height="303px" />
        <Skeleton variant="rounded" width="100%" height="303px" />
        <Skeleton variant="rounded" width="100%" height="303px" />
        <Skeleton variant="rounded" width="100%" height="303px" />
      </div>
    </section>
  );
}
