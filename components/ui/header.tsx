"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link href="/">
        <a className="flex items-center">
          <Image
            src="/assets/images/logo.svg"
            alt="budget app logo"
            width={32}
            height={32}
          />
          <span className="ml-2 text-xl font-semibold">Budget App</span>
        </a>
      </Link>
      <div className="flex space-x-4">
        <Link href="/dashboard">
          <a className="text-gray-600 hover:text-gray-800">Dashboard</a>
        </Link>
        <Link href="/settings">
          <a className="text-gray-600 hover:text-gray-800">Settings</a>
        </Link>
      </div>
    </header>
  );
}
