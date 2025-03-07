import Login_form from "@/components/forms/login_form";
import SignUp_form from "@/components/forms/signup_form";
import Budget_Form from "@/components/forms/budget_form";
import Pot_Form from "@/components/forms/pot_form";
import Delete from "@/components/ui/delete_modal";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      {/* <SignUp_form /> */}
      <Delete />
      {/* Add other components here */}
    </main>
  );
}
