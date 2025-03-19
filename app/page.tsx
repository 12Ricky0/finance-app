import Login_form from "@/components/forms/login_form";
import SignUp_form from "@/components/forms/signup_form";
import Budget_Form from "@/components/forms/budget_form";
import Pot_Form from "@/components/forms/pot_form";
import Delete from "@/components/ui/delete_modal";
import ProgressBar from "@/components/ui/progress";
import Pot_Container from "@/components/ui/pots_container";
import Pot_Deposit from "@/components/forms/pot_deposit_form";
import Pot_Withdrawal from "@/components/forms/pot_withdraw_form";
import Pot_Loading from "@/components/skeletons/pot_skeleton";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Budget_Plan, Budget_Graph } from "@/components/ui/budget_containers";
import Chart from "@/components/ui/charts";
import Transactions from "@/components/ui/transactions";
import Total_Bill_Card from "@/components/cards/total_bill";
import Recurring_Bill_Card from "@/components/cards/recurring_bill";
import Balance_Card from "@/components/cards/overview_header";
import Pots_Card from "@/components/cards/overview_pots";
import Transaction_Card from "@/components/cards/overview_transaction";
import Budget_Card from "@/components/cards/overview_budget";
import Recurring_Card from "@/components/cards/overview_recurring";

export default function Home() {
  return (
    <main>
      {/* <SignUp_form /> */}
      {/* <Delete /> */}
      <Balance_Card />

      <Pots_Card />
      <Transaction_Card />
      <Budget_Card />
      <Recurring_Card />
      {/* Add other components here */}
    </main>
  );
}
// className = "flex justify-center items-center h-screen";
