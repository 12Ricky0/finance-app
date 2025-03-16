import Image from "next/image";
import { PaginationProps } from "@/libs/definitions";

export default function Pagination({
  totalPages,
  activePage,
  setActivePage,
}: PaginationProps) {
  const handleClick = (value: number | string) => {
    let newPage = activePage;

    if (value === "prev") newPage = Math.max(1, activePage - 1);
    else if (value === "next") newPage = Math.min(totalPages, activePage + 1);
    else if (typeof value === "number") newPage = value;

    setActivePage(newPage);
  };
  return (
    <footer className="flex justify-between mt-12">
      <button
        onClick={() => handleClick("prev")}
        disabled={activePage === 1}
        className="cursor-pointer border border-beige-500 flex px-4 py-3 rounded-lg font-normal text-[14px] text-gray-900"
      >
        <Image
          src="/assets/images/icon-caret-left.svg"
          alt="left"
          width={24}
          height={24}
          className="w-auto h-auto mr-4 "
        />
        Prev
      </button>

      <div className="inline-flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i + 1)}
            className="size-10 rounded-lg border border-beige-500 font-normal text-[14px] text-gray-900"
          >
            {i + 1}
          </button>
        ))}{" "}
      </div>

      <button
        onClick={() => handleClick("next")}
        disabled={activePage === totalPages}
        className="cursor-pointer border border-beige-500 flex px-4 py-3 rounded-lg font-normal text-[14px] text-gray-900"
      >
        <span>Next</span>
        <Image
          src="/assets/images/icon-caret-right.svg"
          alt="right"
          width={24}
          height={24}
          className="w-auto h-auto ml-4 "
        />
      </button>
    </footer>
  );
}
