"use client";
import { Overlay } from "../skeletons/overlay";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Budget_Form({
  allCategories,
  budgetCategories,
  budgetTheme,
}: {
  allCategories: string[];
  budgetCategories: string[];
  budgetTheme: string[];
}) {
  const [displayCategory, setDisplayCategory] = useState(false);
  const [displayTheme, setDisplayTheme] = useState(false);
  const [category, setCategory] = useState("Entertainment");
  const [theme, setTheme] = useState({ name: "Magenta", hex: "#934F6F" });
  const router = useRouter();

  const colorOptions = [
    { name: "Green", hex: "#277C78" },
    { name: "Yellow", hex: "#F2CDAC" },
    { name: "Cyan", hex: "#82C9D7" },
    { name: "Navy", hex: "#626070" },
    { name: "Red", hex: "#C94736" },
    { name: "Purple", hex: "#826CB0" },
    { name: "Turquoise", hex: "#597C7C" },
    { name: "Brown", hex: "#93674F" },
    { name: "Magenta", hex: "#934F6F" },
    { name: "Blue", hex: "#3F82B2" },
    { name: "Navy Grey", hex: "#97A0AC" },
    { name: "Army Green", hex: "#7F9161" },
    { name: "Pink", hex: "#826CB0" },
    { name: "Gold", hex: "#CAB361" },
    { name: "Orange", hex: "#BE6C49" },
  ];

  return (
    <Overlay>
      <section className="bg-white rounded-xl md:p-8 p-5 w-full lg:w-[560px] md:mx-[100px] lg:mx-0 mx-4">
        <article className="relative">
          <div className="flex justify-between mb-[20px]">
            <h1 className="text-gray-900 font-bold md:text-[32px] text-[20px]">
              Add New Budget
            </h1>
            <Image
              src="/assets/images/icon-close-modal.svg"
              alt="close"
              width={32}
              height={32}
              className=" w-auto h-auto cursor-pointer "
              onClick={() => router.back()}
            />
          </div>
          <p className="text-[14px] font-normal my-[20px] text-gray-500">
            Choose a category to set a spending budget. These categories can
            help you monitor spending.
          </p>
          <div>
            <span className="text-gray-500 font-bold text-[12px]">
              Budget Category
            </span>
            <div
              onClick={() => setDisplayCategory(!displayCategory)}
              className="border flex items-center justify-between mt-1 px-[20px] hover:border-gray-900 cursor-pointer border-[#98908B] w-full rounded-lg h-[45px]"
            >
              <span className="font-normal text-gray-900 text-[14px]">
                {category}
              </span>
              <Image
                src="/assets/images/icon-caret-down.svg"
                alt="down"
                width={32}
                height={32}
                className=" w-auto h-auto cursor-pointer "
                onClick={() => setDisplayCategory(!displayCategory)}
              />
            </div>
            {displayCategory && (
              <div className="bg-white mt-4 rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] absolute w-full">
                <ul className="h-[300px] overflow-y-scroll">
                  {allCategories.map((option) => (
                    <li
                      key={option}
                      onClick={() => {
                        if (budgetCategories.includes(option)) return;
                        else {
                          setDisplayCategory(false);
                          setCategory(option);
                        }
                      }}
                      className={` mx-[20px] py-3 border-b last:border-0 border-gray-100 font-normal text-[14px] ${
                        budgetCategories.includes(option)
                          ? " text-gray-500"
                          : "text-gray-900 hover:text-[#277C78]"
                      } cursor-pointer  transition duration-300 ease-in-out`}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="my-4">
            <span className="text-gray-500 font-bold text-[12px]">
              Maximum Spend
            </span>
            <input
              type="number"
              placeholder="e.g. 2000"
              className="border w-full cursor-pointer hover:border-gray-900 border-[#98908B] px-[20px] mt-1 rounded-lg h-[45px] text-[14px] focus:outline-none"
            />
          </div>

          <div>
            <span className="text-gray-500 font-bold text-[12px]">Theme</span>
            <div
              onClick={() => setDisplayTheme(!displayTheme)}
              className="border flex items-center justify-between mt-1 px-[20px] hover:border-gray-900 cursor-pointer border-[#98908B] w-full rounded-lg h-[45px]"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`size-4 rounded-full`}
                  style={{ backgroundColor: theme.hex }}
                />

                <span className="font-normal text-gray-900 text-[14px]">
                  {theme.name}
                </span>
              </div>
              <Image
                src="/assets/images/icon-caret-down.svg"
                alt="down"
                width={32}
                height={32}
                className=" w-auto h-auto cursor-pointer "
                onClick={() => setDisplayTheme(!displayTheme)}
              />
            </div>
            {displayTheme && (
              <div className="bg-white mt-4 rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] absolute w-full">
                <ul className="h-[300px] overflow-y-scroll">
                  {colorOptions.map((option) => (
                    <div
                      key={option.name}
                      className="flex justify-between items-center mx-[20px] border-b last:border-0 border-gray-100"
                    >
                      <div className="flex gap-3 items-center ">
                        <div
                          className={`size-4 ${budgetTheme.includes(
                            option.hex ? "opacity-20" : "opacity-100"
                          )} rounded-full `}
                          style={{
                            backgroundColor: option.hex,
                            opacity: budgetTheme.includes(option.hex)
                              ? 0.25
                              : 1,
                          }}
                        />
                        <li
                          onClick={() => {
                            if (budgetTheme.includes(option.hex)) return;
                            else {
                              setDisplayTheme(false);
                              setTheme({ name: option.name, hex: option.hex });
                            }
                          }}
                          className={`py-3 font-normal text-[14px] ${
                            budgetTheme.includes(option.hex)
                              ? " text-gray-500"
                              : "text-gray-900 hover:text-[#277C78]"
                          } cursor-pointer transition duration-300 ease-in-out`}
                        >
                          {option.name}
                        </li>
                      </div>
                      {budgetTheme.includes(option.hex) && (
                        <li className="text-[12px] text-gray-500">
                          Already used
                        </li>
                      )}

                      <Image
                        src="/assets/images/icon-selected.svg"
                        alt="down"
                        width={32}
                        height={32}
                        className={` w-auto h-auto cursor-pointer ${
                          theme.name === option.name ? "block" : "hidden"
                        }`}
                      />
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>
        <button
          type="submit"
          className="w-full py-4 text-white bg-gray-900 mt-[20px] text-[14px] hover:bg-gray-600 cursor-pointer rounded-lg font-bold"
        >
          Add Budget
        </button>
      </section>
    </Overlay>
  );
}
