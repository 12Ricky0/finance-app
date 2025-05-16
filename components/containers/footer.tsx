"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

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
          </Link>
        </div>
        <div
          className={`${
            pathname == "/finance/recurring"
              ? "bg-beige-100 text-gray-900 shadow-[0_4px_0_0_rgb(39,124,120,1)] transition-colors delay-150 duration-300 mb-1"
              : "text-gray-300"
          } pt-2 rounded-t-lg px-[22px] md:px-0 w-[104px] hover:bg-beige-100 hover:mb-1 hover:shadow-[0_4px_0_0_rgb(39,124,120,1)] hover:text-gray-900`}
        >
          <Link
            href="/finance/recurring"
            className="flex flex-col items-center"
          >
            <Image
              src={`/assets/images/icon-nav-recurring-bills${
                pathname == "/finance/recurring" ? "-green" : ""
              }.svg`}
              alt="recurring"
              width={32}
              height={32}
              className="h-auto w-auto pb-2 "
            />
            <span className={` hidden md:block pb-3  font-bold text-[12px]`}>
              Recurring bills
            </span>
          </Link>
        </div>
        <div
          onClick={() => signOut({ redirectTo: "/" })}
          className={` transition-colors delay-150 duration-300 
                      text-gray-300 gap-1
                    px-[22px] md:px-0 cursor-pointer w-[104px] flex flex-col items-center rounded-r-lg hover:bg-beige-100  hover:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
          <span className={` hidden md:block pb-3  font-bold text-[12px]`}>
            Logout
          </span>
        </div>{" "}
      </nav>
    </footer>
  );
}
