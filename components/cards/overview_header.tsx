import { BalanceProps } from "@/libs/definitions";

export default function Balance_Card({ balance }: { balance: BalanceProps }) {
  const formatCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-6 mx-4 md:mx-[40px]">
      <article className="bg-gray-900 flex-1 rounded-lg p-[20px]">
        <p className="font-normal text-white text-[14px]">Current Balance</p>
        <h1 className="font-bold text-[32px] text-white">
          {formatCurrency.format(balance.current)}
        </h1>
      </article>
      <article className="bg-white rounded-lg flex-1 p-[20px]">
        <p className="font-normal text-gray-500 text-[14px]">Income</p>
        <h1 className="font-bold text-[32px] text-gray-900">
          {formatCurrency.format(balance.income)}
        </h1>
      </article>
      <article className="bg-white rounded-lg flex-1 p-[20px]">
        <p className="font-normal text-gray-500 text-[14px]">Expenses</p>
        <h1 className="font-bold text-[32px] text-gray-900">
          {formatCurrency.format(balance.expenses)}
        </h1>
      </article>
    </div>
  );
}
