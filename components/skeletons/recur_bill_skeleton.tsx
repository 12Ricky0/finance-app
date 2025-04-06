"use client";
import { Skeleton } from "@mui/material";
import { use } from "react";
import { FinanceContext } from "@/context";

export default function Rec_Bill_Loading() {
  const { isMinimized } = use(FinanceContext);

  return (
    <main
      className={`transition-all duration-500 mb-[76px] md:mb-[84px] lg:mb-8  ${
        isMinimized ? "lg:ml-[80px]" : "lg:ml-[300px]"
      }`}
    >
      <div className="mx-4 md:mx-[40px] mt-6">
        <Skeleton variant="text" width="200px" sx={{ fontSize: "3rem" }} />
      </div>

      <div className="flex gap-6 mx-4 lg:flex-row justify-between md:mx-[40px] flex-col">
        <div className="flex-1 ">
          <Skeleton variant="rounded" width="100%" height="190px" />
          <Skeleton
            variant="rounded"
            width="100%"
            height="190px"
            sx={{ marginTop: "2rem" }}
          />
        </div>
        <div className="flex-1/6">
          <Skeleton variant="rounded" width="100%" height="700px" />
        </div>
      </div>
    </main>
  );
}
