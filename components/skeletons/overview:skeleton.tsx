"use client";
import { Skeleton } from "@mui/material";
import { use } from "react";
import { FinanceContext } from "@/context";

export default function Overview_Loading() {
  const { isMinimized } = use(FinanceContext);
  return (
    <section
      className={`transition-all duration-500 ${
        isMinimized ? "lg:ml-[80px]" : "lg:ml-[300px]"
      }`}
    >
      <div className="flex flex-col md:flex-row mt-8 gap-3 md:gap-6 mx-4 md:mx-[40px]">
        <Skeleton variant="rounded" width="100%" height="120px" />
        <Skeleton variant="rounded" width="100%" height="120px" />
        <Skeleton variant="rounded" width="100%" height="120px" />
      </div>

      <div className="lg:flex">
        <div className=" mt-8 md:gap-6 lg:ml-[40px] mx-4 md:mx-[40px] flex-1">
          <Skeleton
            variant="rounded"
            width="100%"
            height="218px"
            sx={{ marginBottom: "20px" }}
          />
          <Skeleton variant="rounded" width="100%" height="520px" />
        </div>
        <div className="flex-1 mt-8 md:gap-6 mx-4 lg:ml-0 md:mx-[40px]">
          <Skeleton
            variant="rounded"
            width="100%"
            height="410px"
            sx={{ marginBottom: "20px" }}
          />
          <Skeleton variant="rounded" width="100%" height="320px" />
        </div>
      </div>
    </section>
  );
}
