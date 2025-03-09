import Image from "next/image";

export default function Pot_Container() {
  const percentage = Math.min((159 / 2000) * 100, 100); // Ensure it doesn't exceed 100%

  return (
    <section className="bg-white w-full px-[20px] pt-6 pb-[38px] rounded-xl mx-4 md:mx-10">
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-4 items-center">
          <div className="size-4 rounded-full bg-green-800" />
          <h1 className="text-gray-900 font-bold text-[20px]">Savings</h1>
        </div>
        <Image
          src="/assets/images/icon-ellipsis.svg"
          alt="ellipsis"
          width={32}
          height={32}
          className=" w-auto h-auto cursor-pointer "
        />
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center text-sm font-semibold mb-4">
          <span className="text-gray-500 text-[14px] font-normal">
            Total Saved{" "}
          </span>
          <span className="text-gray-900 font-bold text-[32px]">$ 159.00 </span>
        </div>
        <div className="w-full bg-[#F8F4F0] rounded-full h-2 relative">
          <div
            className="h-2 rounded-full bg-green-800 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-[13px]">
          <span className="font-bold text-[12px] text-gray-500">
            {percentage.toFixed(2)}%{" "}
          </span>
          <span className="font-normal text-[12px] text-gray-500">
            Target of $2000{" "}
          </span>
        </div>
      </div>

      <div className="mt-8 w-full flex justify-between gap-4">
        <button className="bg-[#F8F4F0] rounded-lg py-4 w-full text-[14px] font-bold text-gray-900">
          + Add Money
        </button>
        <button className="bg-[#F8F4F0] rounded-lg py-4 text-[14px] w-full font-bold text-gray-900">
          Withdraw
        </button>
      </div>
    </section>
  );
}
