import Login_form from "@/components/forms/login_form";
import SignUp_form from "@/components/forms/signup_form";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      {/* <SignUp_form /> */}
      <Login_form />
      {/* Add other components here */}
    </main>
  );
}
