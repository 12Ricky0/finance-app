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

  const getPaginationNumbers = () => {
    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (string | number)[] = [1];

    if (activePage > 3) pages.push("...");

    if (activePage > 2) pages.push(activePage - 1);
    if (activePage !== 1 && activePage !== totalPages) pages.push(activePage);
    if (activePage < totalPages - 1) pages.push(activePage + 1);

    if (activePage < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  return (
    <footer className="flex justify-between mt-12">
      <button
        onClick={() => handleClick("prev")}
        disabled={activePage === 1}
        className="cursor-pointer border border-beige-500 flex justify-center px-4 py-3 rounded-lg font-normal text-[14px] text-gray-900"
      >
        <Image
          src="/assets/images/icon-caret-left.svg"
          alt="left"
          width={24}
          height={24}
          className="w-auto h-auto md:mr-4 "
        />
        <span className="md:block hidden">Prev</span>
      </button>

      <div className="inline-flex gap-2">
        {getPaginationNumbers().map((page, i) =>
          typeof page === "number" ? (
            <button
              key={i}
              onClick={() => handleClick(page)}
              className={`size-10 ${
                activePage === page ? "bg-gray-900 text-white" : "text-gray-900"
              } rounded-lg border border-beige-500 cursor-pointer hover:bg-gray-900 hover:text-white font-normal text-[14px]`}
            >
              {page}
            </button>
          ) : (
            <span key={i} className="mx-2">
              ...
            </span>
          )
        )}
      </div>

      <button
        onClick={() => handleClick("next")}
        disabled={activePage === totalPages}
        className={`cursor-pointer border border-beige-500 flex justify-center px-4 py-3 rounded-lg font-normal text-[14px] text-gray-900`}
      >
        <span className="hidden md:block">Next</span>
        <Image
          src="/assets/images/icon-caret-right.svg"
          alt="right"
          width={24}
          height={24}
          className="w-auto h-auto md:ml-4 "
        />
      </button>
    </footer>
  );
}
