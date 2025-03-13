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

export default function Home() {
  return (
    <main>
      {/* <SignUp_form /> */}
      {/* <Delete /> */}
      <Budget_Graph />
      {/* Add other components here */}
    </main>
  );
}
// className = "flex justify-center items-center h-screen";
