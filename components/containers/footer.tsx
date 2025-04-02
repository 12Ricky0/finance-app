"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-gray-900 z-50 lg:hidden fixed bottom-0 w-full pt-2 px-4 md:px-10">
      <nav className="flex justify-between items-center">
        <div
          className={`${
            pathname == "/finance/overview"
              ? "bg-beige-100 text-gray-900 shadow-[0_4px_0_0_rgb(39,124,120,1)] transition-colors delay-150 duration-300 mb-1"
              : "text-gray-300"
          } pt-2 rounded-t-lg px-[22px] md:px-0 w-[104px] hover:bg-beige-100 hover:mb-1 hover:shadow-[0_4px_0_0_rgb(39,124,120,1)] hover:text-gray-900`}
        >
          <Link href="/finance/overview" className="flex flex-col items-center">
            <Image
              src={`/assets/images/icon-nav-overview${
                pathname == "/finance/overview" ? "-green" : ""
              }.svg`}
              alt="overview"
              width={32}
              height={32}
              className="h-auto w-auto pb-2 "
            />
            <span
              className={` font-bold text-[12px] px-[25px] hidden md:block pb-3`}
            >
              Overview
            </span>

            {/* <div className="h-1 bg-[#277C78] w-full" /> */}
          </Link>
        </div>
        <div
          className={`${
            pathname == "/finance/transactions"
              ? "bg-beige-100 text-gray-900 shadow-[0_4px_0_0_rgb(39,124,120,1)] transition-colors delay-150 duration-300 mb-1"
              : "text-gray-300"
          } pt-2 rounded-t-lg px-[22px] md:px-0 w-[104px] hover:bg-beige-100 hover:mb-1 hover:shadow-[0_4px_0_0_rgb(39,124,120,1)] hover:text-gray-900`}
        >
          <Link
            href="/finance/transactions"
            className="flex flex-col items-center"
          >
            <Image
              src={`/assets/images/icon-nav-transactions${
                pathname == "/finance/transactions" ? "-green" : ""
              }.svg`}
              alt="transactions"
              width={32}
              height={32}
              className="h-auto w-auto pb-2 "
            />
            <span className={` hidden md:block pb-3  font-bold text-[12px]`}>
              Transactions
            </span>
            {/* <div className={`h-1 bg-[#277C78] w-full hidden`} /> */}
          </Link>
        </div>
        <div
          className={`${
            pathname == "/finance/budget"
              ? "bg-beige-100 text-gray-900 shadow-[0_4px_0_0_rgb(39,124,120,1)] transition-colors delay-150 duration-300 mb-1"
              : "text-gray-300"
          } pt-2 rounded-t-lg px-[22px] md:px-0 w-[104px] hover:bg-beige-100 hover:mb-1 hover:shadow-[0_4px_0_0_rgb(39,124,120,1)] hover:text-gray-900`}
        >
          <Link href="/finance/budget" className="flex flex-col items-center">
            <Image
              src={`/assets/images/icon-nav-budgets${
                pathname == "/finance/budget" ? "-green" : ""
              }.svg`}
              alt="budgets"
              width={32}
              height={32}
              className="h-auto w-auto pb-2 "
            />
            <span className={` hidden md:block pb-3  font-bold text-[12px]`}>
              Budget
            </span>

            {/* <div className={`h-1 bg-[#277C78] w-full hidden`} /> */}
          </Link>
        </div>
        <div
          className={`${
            pathname == "/finance/pots"
              ? "bg-beige-100 text-gray-900 shadow-[0_4px_0_0_rgb(39,124,120,1)] transition-colors delay-150 duration-300 mb-1"
              : "text-gray-300"
          } pt-2 rounded-t-lg px-[22px] md:px-0 w-[104px] hover:bg-beige-100 hover:mb-1 hover:shadow-[0_4px_0_0_rgb(39,124,120,1)] hover:text-gray-900 `}
        >
          <Link href="/finance/pots" className="flex flex-col items-center">
            <Image
              src={`/assets/images/icon-nav-pots${
                pathname == "/finance/pots" ? "-green" : ""
              }.svg`}
              alt="pots"
              width={32}
              height={32}
              className="h-auto w-auto pb-2"
            />
            <span className={` hidden md:block pb-3  font-bold text-[12px]`}>
              Pots
            </span>

            {/* <div className={`h-1 bg-[#277C78] w-full hidden`} /> */}
          </Link>
        </div>
        <div
          className={`${
            pathname == "/finance/recurring"
              ? "bg-beige-100 text-gray-900 shadow-[0_4px_0_0_rgb(39,124,120,1)] transition-colors delay-150 duration-300 mb-1"
              : "text-gray-300"
          } pt-2 rounded-t-lg px-[22px] md:px-0 w-[104px] hover:bg-beige-100 hover:mb-1 hover:shadow-[0_4px_0_0_rgb(39,124,120,1)] hover:text-gray-900`}
        >
          <Link href="" className="flex flex-col items-center">
            <Image
              src="/assets/images/icon-nav-recurring-bills.svg"
              alt="recurring"
              width={32}
              height={32}
              className="h-auto w-auto pb-2 "
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
