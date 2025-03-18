import Image from "next/image";

export default function Pots_Card() {
  return (
    <section className="bg-white py-6 px-[20px] rounded-lg md:gap-6 mx-4 md:mx-[40px] md:p-[32px]">
      <div className="flex justify-between mb-[20px]">
        <h1 className="text-gray-900 font-bold text-[20px]">Pots</h1>

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
      <div className="flex flex-col md:flex-row gap-[20px]">
        <div className="bg-beige-100 rounded-lg px-[22px] md:flex-1 flex gap-[22px] py-[20px]">
          <Image
            src="/assets/images/icon-pot.svg"
            alt="right"
            width={32}
            height={32}
            className=" w-auto h-auto cursor-pointer "
          />

          <article className="flex flex-col gap-[11px]">
            <p className="font-normal text-[14px] text-gray-500">Total Saved</p>
            <h1 className="text-gray-900 font-bold text-[32px]">$850</h1>
          </article>
        </div>

        <div className="grid gap-4 md:flex-1 grid-cols-2">
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
