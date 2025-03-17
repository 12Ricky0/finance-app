import Image from "next/image";

export default function Total_Bill_Card() {
  return (
    <section className="flex flex-col md:flex-row md:justify-between gap-6 lg:flex-col">
      <div className="bg-gray-900 rounded-lg w-full py-6 px-[20px] md:flex-col md:items-start md:px-6 md:gap-[32px] md:pt-[38px] flex items-center gap-[20px]">
        <Image
          src="/assets/images/icon-recurring-bills.svg"
          alt="recurring"
          width={24}
          height={24}
          className="w-auto h-auto"
        />
        <div className="flex flex-col">
          <span className="font-normal text-[14px] text-white">
            Total bills
          </span>
          <span className="font-bold text-[32px] text-white">$384.98</span>
        </div>
      </div>

      <div className="bg-white rounded-lg w-full p-[20px]">
        <h1 className="font-bold text-[16px] text-gray-900">Summary</h1>

        <div className="border-b border-beige-100 py-4 flex justify-between">
          <span className="font-normal text-[12px] text-gray-500">
            Paid Bills
          </span>
          <span className="font-bold text-[12px] text-gray-900">
            2 ($320.00)
          </span>
        </div>
        <div className="border-b border-beige-100 py-4 flex justify-between">
          <span className="font-normal text-[12px] text-gray-500">
            Total Upcoming
          </span>
          <span className="font-bold text-[12px] text-gray-900">
            6 ($1,230.00)
          </span>
        </div>
        <div className="border-b text-[#C94736] border-beige-100 py-4 flex justify-between">
          <span className="font-normal text-[12px] ">Due Soon</span>
          <span className="font-bold text-[12px]">6 ($1,230.00)</span>
        </div>
      </div>
    </section>
  );
}
