"use client";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { FinanceContext } from "@/context";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
export default function Header() {
  const { setIsMinimized, isMinimized, setCategory } = use(FinanceContext);
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
              onClick={() => setCategory("All Transactions")}
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
          <Link href="/finance/budget" className="flex gap-4 items-center">
            <Image
              src={`/assets/images/icon-nav-budgets${
                pathname == "/finance/budget" ? "-green" : ""
              }.svg`}
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
          <Link href="/finance/recurring" className="flex gap-4 items-center">
            <Image
              src={`/assets/images/icon-nav-recurring-bills${
                pathname == "/finance/recurring" ? "-green" : ""
              }.svg`}
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
        <div
          onClick={() => signOut({ redirectTo: "/" })}
          className={` transition-colors delay-150 duration-300 gap-4 
              text-gray-300
           py-4 mr-6 cursor-pointer flex items-center rounded-r-lg hover:bg-beige-100 hover:ml-1 hover:shadow-[-4px_0_0_0_rgb(39,124,120,1)] hover:text-gray-900`}
        >
          <svg
            className="ml-8"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#b3b3b3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              d="M21 11.998H8.945m12.055 0-2.932-2.934M21 11.998l-2.932 2.936M14.556 8.266V7.251c0-1.56-1.121-2.891-2.651-3.15L6.702 3.046C4.765 2.718 3 4.219 3 6.195v11.61c0 1.976 1.765 3.477 3.702 3.15l5.203-1.057a3.188 3.188 0 0 0 2.65-3.149v-1.014"
            />
          </svg>
          <span
            className={` transition-all duration-500 font-bold text-[16px] ${
              isMinimized
                ? "opacity-0 scale-0 w-0"
                : "opacity-100 scale-100 w-auto"
            } `}
          >
            Logout
          </span>
        </div>{" "}
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
