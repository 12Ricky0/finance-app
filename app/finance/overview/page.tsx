import Balance_Card from "@/components/cards/overview_header";
import Pots_Card from "@/components/cards/overview_pots";
import Transaction_Card from "@/components/cards/overview_transaction";
import Budget_Card from "@/components/cards/overview_budget";
import Recurring_Card from "@/components/cards/overview_recurring";
export default function Overview() {
  return (
    <section className="">
      <h1 className="font-bold md:mx-[40px] text-[32px] text-gray-900 mx-4 mt-6 pb-8">
        Overview
      </h1>
      <Balance_Card />
      <div className="lg:flex gap-6">
        <div className="flex-1">
          <Pots_Card />
          <Transaction_Card />
        </div>
        <div className="flex-1">
          <Budget_Card />
          <Recurring_Card />
        </div>
      </div>
    </section>
  );
}
