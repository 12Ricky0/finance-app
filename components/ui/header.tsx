"use client";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { FinanceContext } from "@/context";
import { usePathname } from "next/navigation";

export default function Header() {
  const { setIsMinimized, isMinimized } = use(FinanceContext);
  const pathname = usePathname();
  return (
    <header
      className={`bg-gray-900 hidden lg:block fixed z-50 h-screen rounded-r-lg transition-all duration-500 ${
        isMinimized ? "w-[88px]" : "w-[300px]"
      }`}
    >
      <Image
        src={`/assets/images/logo-${isMinimized ? "small" : "large"}.svg`}
        alt="logo"
        width={32}
        height={32}
        className="h-auto w-auto transition-all pl-8 duration-500 py-10"
      />
      <nav className="flex flex-col mt-6">
        <div
          className={`${
            pathname == "/finance/overview"
              ? "bg-beige-100 ml-1 text-gray-900 shadow-[-4px_0_0_0_rgb(39,124,120,1)] transition-colors delay-150 duration-300"
              : "text-gray-300"
          } py-4 mr-6 rounded-r-lg hover:bg-beige-100 hover:ml-1 hover:shadow-[-4px_0_0_0_rgb(39,124,120,1)] hover:text-gray-900`}
        >
          <Link href="/finance/overview" className="flex gap-4 items-center">
            <Image
              src={`/assets/images/icon-nav-overview${
                pathname == "/finance/overview" ? "-green" : ""
              }.svg`}
              alt="overview"
              width={32}
              height={32}
              className="h-auto w-auto ml-8"
            />
            <span
              className={` font-bold transition-all duration-500 text-[16px] ${
                isMinimized
                  ? "opacity-0 scale-0 w-0"
                  : "opacity-100 scale-100 w-auto"
              } `}
            >
              Overview
            </span>
          </Link>
        </div>
        <div
          className={`${
            pathname == "/finance/transactions"
              ? "bg-beige-100 ml-1 text-gray-900 shadow-[-4px_0_0_0_rgb(39,124,120,1)] transition-colors delay-150 duration-300"
              : "text-gray-300"
          } py-4 mr-6 rounded-r-lg hover:bg-beige-100 hover:ml-1 hover:shadow-[-4px_0_0_0_rgb(39,124,120,1)] hover:text-gray-900`}
        >
          <Link
            href="/finance/transactions"
            className="flex gap-4 items-center"
          >
            <Image
              src={`/assets/images/icon-nav-transactions${
                pathname == "/finance/transactions" ? "-green" : ""
              }.svg`}
              alt="transactions"
              width={32}
              height={32}
              className="h-auto w-auto ml-8"
            />
            <span
              className={` transition-all duration-500 font-bold text-[16px] ${
                isMinimized
                  ? "opacity-0 scale-0 w-0"
                  : "opacity-100 scale-100 w-auto"
              } `}
            >
              Transactions
            </span>
            <div className={`h-1 bg-[#277C78] w-full hidden`} />
          </Link>
        </div>
        <div
          className={`${
            pathname == "/finance/budget"
              ? "bg-beige-100 ml-1 text-gray-900 shadow-[-4px_0_0_0_rgb(39,124,120,1)] transition-colors delay-150 duration-300"
              : "text-gray-300"
          } py-4 mr-6 rounded-r-lg hover:bg-beige-100 hover:ml-1 hover:shadow-[-4px_0_0_0_rgb(39,124,120,1)] hover:text-gray-900`}
        >
          <Link href="" className="flex gap-4 items-center">
            <Image
              src="/assets/images/icon-nav-budgets.svg"
              alt="budgets"
              width={32}
              height={32}
              className="h-auto w-auto ml-8"
            />
            <span
              className={` transition-all duration-500 font-bold text-[16px] ${
                isMinimized
                  ? "opacity-0 scale-0 w-0"
                  : "opacity-100 scale-100 w-auto"
              } `}
            >
              Budget
            </span>

            <div className={`h-1 bg-[#277C78] w-full hidden`} />
          </Link>
        </div>
        <div
          className={`${
            pathname == "/finance/pots"
              ? "bg-beige-100 ml-1 text-gray-900 shadow-[-4px_0_0_0_rgb(39,124,120,1)]"
              : "text-gray-300"
          } py-4 mr-6 rounded-r-lg transition delay-150 duration-300 hover:bg-beige-100 hover:ml-1 hover:shadow-[-4px_0_0_0_rgb(39,124,120,1)] hover:text-gray-900`}
        >
          <Link href="/finance/pots" className="flex gap-4 items-center">
            <Image
              src={`/assets/images/icon-nav-pots${
                pathname == "/finance/pots" ? "-green" : ""
              }.svg`}
              alt="pots"
              width={32}
              height={32}
              className="h-auto w-auto ml-8"
            />
            <span
              className={` transition-all duration-500 font-bold text-[16px] ${
                isMinimized
                  ? "opacity-0 scale-0 w-0"
                  : "opacity-100 scale-100 w-auto"
              } `}
            >
              Pots
            </span>

            <div className={`h-1 bg-[#277C78] w-full hidden`} />
          </Link>
        </div>
        <div
          className={`${
            pathname == "/finance/recurring"
              ? "bg-beige-100 ml-1 text-gray-900 shadow-[-4px_0_0_0_rgb(39,124,120,1)] transition-colors delay-150 duration-300"
              : "text-gray-300"
          } py-4 mr-6 rounded-r-lg hover:bg-beige-100 hover:ml-1 hover:shadow-[-4px_0_0_0_rgb(39,124,120,1)] hover:text-gray-900`}
        >
          <Link href="" className="flex gap-4 items-center">
            <Image
              src="/assets/images/icon-nav-recurring-bills.svg"
              alt="recurring"
              width={32}
              height={32}
              className="h-auto w-auto ml-8"
            />
            <span
              className={`transition-all duration-500 font-bold text-[16px] ${
                isMinimized
                  ? "opacity-0 scale-0 w-0"
                  : "opacity-100 scale-100 w-auto"
              } `}
            >
              Recurring bills
            </span>

            <div className={`h-1 bg-[#277C78] w-full hidden`} />
          </Link>
        </div>
      </nav>
      <div
        onClick={() => setIsMinimized(!isMinimized)}
        className=" ml-8 flex absolute bottom-[58px] py-4 gap-4 items-center cursor-pointer"
      >
        <Image
          src="/assets/images/icon-minimize-menu.svg"
          alt="overview"
          width={32}
          height={32}
          className={`h-auto w-auto transition-all duration-500 ${
            isMinimized && "rotate-180"
          }`}
        />
        <span
          className={`text-gray-300 transition-all duration-500 font-bold text-[16px] ${
            isMinimized
              ? "opacity-0 scale-0 w-0"
              : "opacity-100 scale-100 w-auto"
          } `}
        >
          Minimize Menu
        </span>
      </div>
    </header>
  );
}
