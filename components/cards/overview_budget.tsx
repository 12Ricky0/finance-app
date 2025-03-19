import Image from "next/image";
import Chart from "../ui/charts";

export default function Budget_Card() {
  return (
    <section className="bg-white py-6 px-[20px] rounded-lg md:gap-6 mx-4 md:mx-[40px] md:p-[32px] lg:ml-0 mt-4 md:mt-6">
      {" "}
      <div className="flex justify-between mb-[32px]">
        <h1 className="text-gray-900 font-bold text-[20px]">Budgets</h1>

        <div className="inline-flex items-center gap-3">
          <h2 className="font-normal text-[14px] text-gray-500">See Details</h2>
          <Image
            src="/assets/images/icon-caret-right.svg"
            alt="right"
            width={32}
            height={32}
            className=" w-auto h-auto cursor-pointer "
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row ">
        <div className="mx-auto">
          <Chart />
        </div>
        <div className="grid gap-4 md:grid-cols-1 grid-cols-2">
          <div className="flex gap-4 shrink-0">
            <div className={`w-1 bg-green-900 rounded-t-full rounded-b-full`} />
            <article className="flex flex-col gap-[4px]">
              <p className="font-normal text-[12px] text-gray-500">
                Total Saved
              </p>
              <h1 className="text-gray-900 font-bold text-[14px]">$850</h1>
            </article>
          </div>
          <div className="flex gap-4 ">
            <div className={`w-1 bg-green-900 rounded-t-full rounded-b-full`} />
            <article className="flex flex-col gap-[4px]">
              <p className="font-normal text-[12px] text-gray-500">
                Total Saved
              </p>
              <h1 className="text-gray-900 font-bold text-[14px]">$850</h1>
            </article>
          </div>
          <div className="flex gap-4 ">
            <div className={`w-1 bg-green-900 rounded-t-full rounded-b-full`} />
            <article className="flex flex-col gap-[4px]">
              <p className="font-normal text-[12px] text-gray-500">
                Total Saved
              </p>
              <h1 className="text-gray-900 font-bold text-[14px]">$850</h1>
            </article>
          </div>
          <div className="flex gap-4 ">
            <div className={`w-1 bg-green-900 rounded-t-full rounded-b-full`} />
            <article className="flex flex-col gap-[4px]">
              <p className="font-normal text-[12px] text-gray-500">
                Total Saved
              </p>
              <h1 className="text-gray-900 font-bold text-[14px]">$850</h1>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
