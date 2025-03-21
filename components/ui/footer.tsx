"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 z-50 lg:hidden fixed bottom-0 w-full pt-2 px-4 md:px-10">
      <nav className="flex justify-between items-center">
        <div
          className={`bg-white pt-2 mb-1 rounded-t-lg shadow-[0_4px_0_0_rgb(39,124,120,1)]`}
        >
          <Link href="" className="flex flex-col items-center">
            <Image
              src="/assets/images/icon-nav-overview.svg"
              alt="overview"
              width={32}
              height={32}
              className="h-auto w-auto pb-2 px-[22px]"
            />
            <span
              className={`text-gray-900 font-bold text-[12px] px-[25px] hidden md:block pb-3`}
            >
              Overview
            </span>

            {/* <div className="h-1 bg-[#277C78] w-full" /> */}
          </Link>
        </div>
        <div className={` pt-2 rounded-t-lg `}>
          <Link href="" className="flex flex-col items-center">
            <Image
              src="/assets/images/icon-nav-transactions.svg"
              alt="transactions"
              width={32}
              height={32}
              className="h-auto w-auto pb-2 px-[22px]"
            />
            <span
              className={`text-gray-300 hidden md:block pb-3  font-bold text-[12px]`}
            >
              Transactions
            </span>
            {/* <div className={`h-1 bg-[#277C78] w-full hidden`} /> */}
          </Link>
        </div>
        <div className={` pt-2 rounded-t-lg `}>
          <Link href="" className="flex flex-col items-center">
            <Image
              src="/assets/images/icon-nav-budgets.svg"
              alt="budgets"
              width={32}
              height={32}
              className="h-auto w-auto pb-2 px-[22px]"
            />
            <span
              className={`text-gray-300 hidden md:block pb-3  font-bold text-[12px]`}
            >
              Budget
            </span>

            {/* <div className={`h-1 bg-[#277C78] w-full hidden`} /> */}
          </Link>
        </div>
        <div className={` pt-2 rounded-t-lg `}>
          <Link href="" className="flex flex-col items-center">
            <Image
              src="/assets/images/icon-nav-pots.svg"
              alt="pots"
              width={32}
              height={32}
              className="h-auto w-auto pb-2 px-[22px]"
            />
            <span
              className={`text-gray-300 hidden md:block pb-3  font-bold text-[12px]`}
            >
              Pots
            </span>

            {/* <div className={`h-1 bg-[#277C78] w-full hidden`} /> */}
          </Link>
        </div>
        <div className={`pt-2 rounded-t-lg `}>
          <Link href="" className="flex flex-col items-center">
            <Image
              src="/assets/images/icon-nav-recurring-bills.svg"
              alt="recurring"
              width={32}
              height={32}
              className="h-auto w-auto pb-2 px-[22px]"
            />
            <span
              className={`text-gray-300 hidden md:block pb-3  font-bold text-[12px]`}
            >
              Recurring bills
            </span>

            {/* <div className={`h-1 bg-[#277C78] w-full hidden`} /> */}
          </Link>
        </div>
      </nav>
    </footer>
  );
}
