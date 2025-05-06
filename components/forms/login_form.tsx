import Image from "next/image";
import Link from "next/link";

export default function Login_form() {
  return (
    <div className="lg:flex items-center w-full md:mx-[100px] lg:mx-0 mx-4">
      <div className="relative">
        <Image
          src="/assets/images/illustration-authentication.svg"
          alt="Eye Icon"
          width={16}
          height={16}
          className=" w-auto rounded-lg h-screen hidden lg:block cursor-pointer mx-[20px]"
        />
        <Image
          src="/assets/images/logo-large.svg"
          alt="logo"
          width={16}
          height={16}
          className=" w-auto absolute top-0 mx-[60px] mt-[40px] hidden lg:block cursor-pointer "
        />
        <article className="absolute bottom-0 m-10 hidden lg:block text-left">
          <h1 className="font-bold text-[32px] mb-6 text-white">
            Keep track of your money and save for your future
          </h1>
          <p className="text-[14px] align-bottom text-white font-normal">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </article>
      </div>
      <div className="lg:flex justify-center flex-1 ">
        <section className="bg-white px-5 md:p-8 lg:mr-[20px] lg:w-[560px] py-6 rounded-[16px]">
          <form action="">
            <fieldset>
              <legend className="text-[#201F24] font-bold text-[32px] mb-8">
                Login
              </legend>
              <label
                className="block text-[#696868] font-bold text-[12px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="border-[#98908B] mt-1 cursor-pointer border rounded-lg w-full py-3 px-5 outline-neutral-300 focus:outline-neutral-500 focus:outline-2 focus:border-primary-dark"
                name="email"
              />

              <label
                className="block mt-4 text-[#696868] font-bold text-[12px]"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative ">
                <input
                  type="text"
                  id="password"
                  className="border-[#98908B] mt-1 cursor-pointer border rounded-lg w-full py-3 px-5 outline-neutral-300 focus:outline-neutral-500 focus:outline-2 focus:border-primary-dark"
                  name="password"
                />
                <Image
                  src="/assets/images/icon-show-password.svg"
                  alt="Eye Icon"
                  width={16}
                  height={16}
                  className="absolute bottom-[20px] w-auto h-auto right-[14px] cursor-pointer"
                />
              </div>
            </fieldset>
            <button
              type="submit"
              className="w-full mt-4 text-white bg-gray-900 bg-primary-dark hover:bg-gray-600 cursor-pointer my-8 rounded-lg py-4 font-bold"
            >
              Login
            </button>
          </form>
          <div className=" text-center">
            <span className="text-[14px] font-normal mb-6 text-gray-500">
              Need to create an account?
            </span>
            <Link
              href="/signup"
              className="cursor-pointer ml-2 text-gray-900 underline font-bold text-[14px] hover:text-blue-600"
            >
              Sign Up
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
