import Image from "next/image";
import data from "../../data.json";
import Link from "next/link";

export default function Recurring_Card() {
  const currentDefaultDate = new Date("August 19, 2024");

  const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const recurringBills = data.transactions.filter(
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

  const paidBills = uniqueRecurringBills
    .filter(
      (bill) => new Date(bill.date).getDate() < currentDefaultDate.getDate()
    )
    .reduce((acc, transaction) => transaction.amount + acc, 0);

  const dueSoon = uniqueRecurringBills
    .filter((bill) => {
      const billDate = new Date(bill.date).getDate();
      const currentDate = currentDefaultDate.getDate();

      return billDate > currentDate && billDate <= currentDate + 5;
    })
    .reduce((acc, transaction) => transaction.amount + acc, 0);

  const totalUpcomingBills = uniqueRecurringBills
    .filter(
      (bill) => new Date(bill.date).getDate() > currentDefaultDate.getDate() + 5
    )
    .reduce((acc, transaction) => transaction.amount + acc, 0);

  return (
    <section className="bg-white py-6 px-[20px] rounded-lg md:gap-6 mx-4 md:mx-[40px] lg:ml-0 md:p-[32px] mt-4 md:mt-6 mb-[68px] md:mb-[100px]">
      {" "}
      <div className="flex justify-between mb-[32px]">
        <h1 className="text-gray-900 font-bold text-[20px]">Recurring Bills</h1>

        <Link
          href="/finance/recurring"
          className="inline-flex items-center gap-3"
        >
          <h2 className="font-normal text-[14px] text-gray-500">See Details</h2>
          <Image
            src="/assets/images/icon-caret-right.svg"
            alt="right"
            width={32}
            height={32}
            className=" w-auto h-auto cursor-pointer "
          />
        </Link>
      </div>
      <article className="bg-beige-100 flex justify-between items-center mb-3 rounded-lg pr-4">
        <div className="flex items-center py-[20p]">
          <div className={`bg-[#277C78] w-[8px] h-[58px] rounded-l-[24px]`} />

          <p className="text-gray-500 font-normal pl-[10px] bg-beige-100 h-[60px] -translate-x-[5px] flex items-center rounded-l-lg text-[14px]">
            Paid Bills
          </p>
        </div>
        <h1 className="text-gray-900 font-bold text-[14px]">
          {formatCurrency.format(Math.abs(paidBills))}
        </h1>
      </article>
      <article className="bg-beige-100 flex justify-between mb-3 items-center rounded-lg pr-4">
        <div className="flex items-center py-[20p]">
          <div className={`bg-[#F2CDAC] w-[8px] h-[58px] rounded-l-[24px]`} />

          <p className="text-gray-500 font-normal pl-[10px] bg-beige-100 h-[60px] -translate-x-[5px] flex items-center rounded-l-lg text-[14px]">
            Total Upcoming
          </p>
        </div>
        <h1 className="text-gray-900 font-bold text-[14px]">
          {formatCurrency.format(Math.abs(totalUpcomingBills))}
        </h1>
      </article>
      <article className="bg-beige-100 flex justify-between items-center rounded-lg pr-4">
        <div className="flex items-center py-[20p]">
          <div className={`bg-[#82C9D7] w-[8px] h-[58px] rounded-l-[24px]`} />

          <p className="text-gray-500 font-normal pl-[10px] bg-beige-100 h-[60px] -translate-x-[5px] flex items-center rounded-l-lg text-[14px]">
            Due Soon
          </p>
        </div>
        <h1 className="text-gray-900 font-bold text-[14px]">
          {formatCurrency.format(Math.abs(dueSoon))}
        </h1>
      </article>
    </section>
  );
}
