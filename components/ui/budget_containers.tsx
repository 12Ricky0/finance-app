import Image from "next/image";
import Chart from "./charts";

export function Budget_Plan() {
  const percentage = Math.min((159 / 2000) * 100, 100); // Ensure it doesn't exceed 100%

  return (
    <section className="bg-white rounded-lg mx-4 md:mx-10 md:py-8 px-[20px] py-6">
      <div className="flex justify-between items-center mb-[20px]">
        <div className="flex gap-4 items-center">
          <div className="size-4 rounded-full bg-green-800" />
          <h1 className="text-gray-900 font-bold text-[20px]">Entertainment</h1>
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
            Maximum of $50.00
          </span>
          {/* <span className="text-gray-900 font-bold text-[32px]">$ 159.00 </span> */}
        </div>
        <div className="w-full bg-[#F8F4F0] pl-1 flex items-center rounded-lg h-8 relative">
          <div
            className="h-6 rounded-lg bg-green-800 transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-[13px]">
          <div className="shadow-[-4px_0_0_0_rgb(39,124,120,1)] flex flex-col gap-1 mx-1 pl-4">
            <span className="font-normal text-[12px] text-gray-500">Spent</span>

            <span className="font-bold text-[14px] text-gray-900">
              {percentage.toFixed(2)}%{" "}
            </span>
          </div>
          <div className=" flex flex-col gap-1 ">
            <span className="font-normal text-[12px] text-gray-500">
              Remaining
            </span>

            <span className="font-bold text-[14px] text-gray-900">
              {percentage.toFixed(2)}%{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-beige-100 rounded-lg px-[20px] py-[20px] mt-[20px]">
        <div className="flex justify-between mb-[20px]">
          <h1 className="text-gray-900 font-bold text-[16px]">
            Latest Spending
          </h1>

          <div className="inline-flex items-center gap-3">
            <h2 className="font-normal text-[14px] text-gray-500">See All</h2>
            <Image
              src="/assets/images/icon-caret-right.svg"
              alt="right"
              width={32}
              height={32}
              className=" w-auto h-auto cursor-pointer "
            />
          </div>
        </div>

        <section className="flex flex-col gap-3">
          <div className="flex justify-between border-b pb-3 border-gray-300">
            <div className="inline-flex items-center gap-3">
              <Image
                src="/assets/images/avatars/bytewise.jpg"
                alt="right"
                width={32}
                height={32}
                className=" w-auto h-auto rounded-full cursor-pointer hidden md:block"
              />
              <h2 className="font-bold text-[12px] text-gray-900">
                Papa Software
              </h2>
            </div>

            <div className="inline-flex items-end  gap-1 flex-col ">
              <h2 className="font-bold text-[12px] text-gray-900">-$10.00</h2>
              <span className="font-normal text-[12px] text-gray-500">
                16 Aug 2024
              </span>
            </div>
          </div>
          <div className="flex justify-between border-b pb-3 border-gray-300">
            <div className="inline-flex items-center gap-3">
              <Image
                src="/assets/images/avatars/bytewise.jpg"
                alt="right"
                width={32}
                height={32}
                className=" w-auto h-auto rounded-full cursor-pointer hidden md:block"
              />
              <h2 className="font-bold text-[12px] text-gray-900">
                Papa Software
              </h2>
            </div>

            <div className="inline-flex items-end  gap-1 flex-col ">
              <h2 className="font-bold text-[12px] text-gray-900">-$10.00</h2>
              <span className="font-normal text-[12px] text-gray-500">
                16 Aug 2024
              </span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export function Budget_Graph() {
  return (
    <section className="flex flex-col pt-6 bg-white rounded-lg mx-4 px-[20px]">
      <div className="flex justify-center ">
        <Chart />
      </div>
      <article className="mt-8">
        <h1 className="font-bold text-[20px] text-gray-900">
          Spending Summary
        </h1>
        <>
          <div className="flex justify-between mt-6 border-b pb-4 border-gray-100">
            <div className="flex justify-center gap-4">
              <div
                className={`h-[20px] w-1 bg-[#82C9D7] rounded-t-full rounded-b-full`}
              />
              <p className="font-normal text-[14px] text-gray-500">Bills</p>
            </div>
            <div>
              <span className="font-bold text-[16px] text-gray-900">
                $250.00
              </span>
              <span className="font-normal text-[12px] text-gray-500">
                {" "}
                of $750.00
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-6 border-b pb-4 border-gray-100">
            <div className="flex justify-center gap-4">
              <div
                className={`h-[20px] w-1 bg-[#82C9D7] rounded-t-full rounded-b-full`}
              />
              <p className="font-normal text-[14px] text-gray-500">Bills</p>
            </div>
            <div>
              <span className="font-bold text-[16px] text-gray-900">
                $250.00
              </span>
              <span className="font-normal text-[12px] text-gray-500">
                {" "}
                of $750.00
              </span>
            </div>
          </div>
        </>
      </article>
    </section>
  );
}
