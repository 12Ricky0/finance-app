import Image from "next/image";

export default function Transaction_Card() {
  return (
    <section className="bg-white py-6 px-[20px] rounded-lg md:gap-6 mx-4 lg:mr-0 md:mx-[40px] md:p-[32px]">
      <div className="flex justify-between mb-[32px]">
        <h1 className="text-gray-900 font-bold text-[20px]">Transactions</h1>

        <div className="inline-flex items-center gap-3">
          <h2 className="font-normal text-[14px] text-gray-500">View All</h2>
          <Image
            src="/assets/images/icon-caret-right.svg"
            alt="right"
            width={32}
            height={32}
            className=" w-auto h-auto cursor-pointer "
          />
        </div>
      </div>

      <div className="flex justify-between border-b pb-[20px] border-gray-300">
        <div className="inline-flex items-center gap-4">
          <Image
            src="/assets/images/avatars/bytewise.jpg"
            alt="right"
            width={32}
            height={32}
            className=" w-auto h-auto rounded-full cursor-pointer"
          />
          <h2 className="font-bold text-[14px] text-gray-900">Papa Software</h2>
        </div>

        <div className="inline-flex items-end  gap-2 flex-col ">
          <h2 className="font-bold text-[14px] text-gray-900">-$10.00</h2>
          <span className="font-normal text-[12px] text-gray-500">
            16 Aug 2024
          </span>
        </div>
      </div>
    </section>
  );
}
