"use client";
import Image from "next/image";
import { Overlay } from "../skeletons/overlay";
import { useState, useActionState } from "react";
import { potDeposit } from "@/libs/actions";

interface DisplayProps {
  id: string;
  heading: string;
  target: number;
  saved: number;
  setDisplayForm: (value: boolean) => void;
}

export default function Pot_Deposit({
  id,
  heading,
  target,
  saved,
  setDisplayForm,
}: DisplayProps) {
  const [deposit, setDeposit] = useState<number>(0);

  const percentage = Math.min((saved / target) * 100, 100);
  const savedPercentage = Math.min((deposit! / target) * 100, 100);

  const payload = potDeposit.bind(null, id);
  const [state, formAction, isPending] = useActionState(payload, null);

  return (
    <Overlay>
      <section className="bg-white rounded-xl md:p-8 p-5 w-full lg:w-[560px] md:mx-[100px] lg:mx-0 mx-4">
        <article className="relative">
          {" "}
          <div className="flex justify-between mb-[20px]">
            <h1 className="text-gray-900 font-bold md:text-[32px] text-[20px]">
              Add to ‘{heading}’
            </h1>
            <Image
              src="/assets/images/icon-close-modal.svg"
              alt="close"
              width={32}
              height={32}
              className=" w-auto h-auto cursor-pointer "
              onClick={() => setDisplayForm(false)}
            />
          </div>
          <p className="text-[14px] font-normal my-[20px] text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet.{" "}
          </p>
          <div className="w-full">
            <div className="flex justify-between items-center text-sm font-semibold mb-4">
              <span className="text-gray-500 text-[14px] font-normal">
                Total Saved{" "}
              </span>
              <span className="text-gray-900 font-bold text-[32px]">
                $ {deposit ? deposit + saved : saved}
              </span>
            </div>
            <div className="w-full bg-[#F8F4F0] flex rounded-full h-2 relative">
              <div
                className="h-2 rounded-l-full  bg-gray-900 mr-0.5 relative transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
              <div
                className="h-2 rounded-r-full bg-[#277C78] transition-all duration-500"
                style={{ width: `${savedPercentage}%` }}
              />
            </div>
            <div className="flex justify-between mt-[13px]">
              <span className="font-bold text-[12px] text-[#277C78]">
                {savedPercentage
                  ? (
                      Number(percentage.toFixed(2)) +
                      Number(savedPercentage.toFixed(2))
                    ).toFixed(2)
                  : Number(percentage.toFixed(2))}
                %
              </span>
              <span className="font-normal text-[12px] text-gray-500">
                Target of ${target}
              </span>
            </div>
          </div>
          <form action={formAction} className="mt-[20px]">
            <label
              htmlFor="pot-name"
              className="text-gray-500 font-bold text-[12px]"
            >
              Amount to Add
            </label>
            <input
              value={deposit === 0 ? "" : deposit}
              name="amount"
              onChange={(e) => {
                if (Number(e.target.value) > target) {
                  return;
                }
                const v = Number(e.target.value);
                setDeposit(v);
              }}
              type="number"
              className="border w-full cursor-pointer hover:border-gray-900 border-[#98908B] px-[20px] mt-1 rounded-lg h-[45px] text-[14px] focus:outline-none"
            />

            {state && (
              <div
                className={`flex mb-4 mt-[6px] items-center gap-2 text-[12px] ${
                  state
                    ? "text-red-500"
                    : "text-tetiary-semi-dark dark:text-secondary-light-gray"
                } `}
              >
                <p>{state.errors.amount}</p>
              </div>
            )}
            <input type="hidden" name="pot_id" value={heading} />
            <button
              type="submit"
              className="w-full py-4 text-white bg-gray-900 mt-[20px] text-[14px] hover:bg-gray-600 cursor-pointer rounded-lg font-bold"
            >
              {isPending ? "Adding..." : "Confirm Addition"}
            </button>
          </form>
        </article>
      </section>
    </Overlay>
  );
}
