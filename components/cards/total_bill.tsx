import Image from "next/image";
import { TransactionProps } from "@/libs/definitions";

export default function Total_Bill_Card({
  transactionData,
}: {
  transactionData: TransactionProps[];
}) {
  const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const currentDefaultDate = new Date("August 19, 2024");

  const recurringBills = transactionData.filter(
    (transaction) => transaction.recurring === true
  );

  const uniqueRecurringBills = [];
  const seenNames = new Set();

  for (const bill of recurringBills) {
    if (!seenNames.has(bill.name)) {
      seenNames.add(bill.name);
      uniqueRecurringBills.push(bill);
    }
  }

  const totalBills = uniqueRecurringBills.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const paidBills = uniqueRecurringBills.filter(
    (bill) => new Date(bill.date).getDate() < currentDefaultDate.getDate()
  );
  const dueSoon = uniqueRecurringBills.filter((bill) => {
    const billDate = new Date(bill.date).getDate();
    const currentDate = currentDefaultDate.getDate();

    return billDate > currentDate && billDate <= currentDate + 5;
  });

  const upcoming = uniqueRecurringBills.filter(
    (bill) => new Date(bill.date).getDate() > currentDefaultDate.getDate() + 5
  );
  const totalPaidBills = paidBills.reduce(
    (acc, transaction) => transaction.amount + acc,
    0
  );
  const totalDueSoonBills = dueSoon.reduce(
    (acc, transaction) => transaction.amount + acc,
    0
  );
  const totalUpcomingBills = upcoming.reduce(
    (acc, transaction) => transaction.amount + acc,
    0
  );
  return (
    <section className="flex mx-4 md:mx-0 flex-col md:flex-row md:justify-between gap-6 lg:flex-col">
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
          <span className="font-bold text-[32px] text-white">
            {formatCurrency.format(Math.abs(totalBills))}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg w-full p-[20px]">
        <h1 className="font-bold text-[16px] text-gray-900">Summary</h1>

        <div className="border-b border-beige-100 py-4 flex justify-between">
          <span className="font-normal text-[12px] text-gray-500">
            Paid Bills
          </span>
          <span className="font-bold text-[12px] text-gray-900">
            {paidBills.length} (
            {formatCurrency.format(Math.abs(totalPaidBills))})
          </span>
        </div>
        <div className="border-b border-beige-100 py-4 flex justify-between">
          <span className="font-normal text-[12px] text-gray-500">
            Total Upcoming
          </span>
          <span className="font-bold text-[12px] text-gray-900">
            {upcoming.length} (
            {formatCurrency.format(Math.abs(totalUpcomingBills))})
          </span>
        </div>
        <div className="border-b text-[#C94736] border-beige-100 py-4 flex justify-between">
          <span className="font-normal text-[12px] ">Due Soon</span>
          <span className="font-bold text-[12px]">
            {dueSoon.length} ({" "}
            {formatCurrency.format(Math.abs(totalDueSoonBills))})
          </span>
        </div>
      </div>
    </section>
  );
}
