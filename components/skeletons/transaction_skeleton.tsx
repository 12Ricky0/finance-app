"use client";
import { Skeleton } from "@mui/material";
import { use } from "react";
import { FinanceContext } from "@/context";

export default function Transaction_Skeleton() {
  const { isMinimized } = use(FinanceContext);

  return (
    <section
      className={`transition-all duration-500 ${
        isMinimized ? "lg:ml-[80px]" : "lg:ml-[300px]"
      }`}
    >
      <div className="mx-4 md:mx-[40px] mt-6">
        <Skeleton variant="text" width="200px" sx={{ fontSize: "3rem" }} />
        <Skeleton variant="rounded" width="100%" height="650px" />
      </div>
    </section>
  );
}
