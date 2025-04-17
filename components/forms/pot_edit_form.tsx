"use client";
import { Overlay } from "../skeletons/overlay";
import Image from "next/image";
import { useState, useActionState } from "react";
import { editPot } from "@/libs/actions";
import { Pending } from "@mui/icons-material";

interface DisplayProps {
  setDisplayForm: (value: boolean) => void;
  potTheme: string[];
  id: string;
  heading: string;
  target: number;
  defaultTheme: string;
}

export default function Pot_Edit_Form({
  setDisplayForm,
  potTheme,
  id,
  heading,
  target,
  defaultTheme,
}: DisplayProps) {
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
    { name: "Navy Grey", hex: "#97A0AC" }, // Approximate color
    { name: "Army Green", hex: "#7F9161" },
    { name: "Pink", hex: "#826CB0" },
    { name: "Gold", hex: "#CAB361" },
    { name: "Orange", hex: "#BE6C49" },
  ];

  const [displayTheme, setDisplayTheme] = useState(false);
  const [theme, setTheme] = useState(() =>
    colorOptions.find((color) => color.hex == defaultTheme)
  );
  const [potName, setPotName] = useState(heading);
  const payload = editPot.bind(null, id);
  const [state, formAction, isPending] = useActionState(payload, null);

  return (
    <Overlay>
      <section className="bg-white rounded-xl md:p-8 p-5 w-full lg:w-[560px] md:mx-[100px] lg:mx-0 mx-4">
        <form action={formAction} className="relative">
          <div className="flex justify-between mb-[20px]">
            <h1 className="text-gray-900 font-bold md:text-[32px] text-[20px]">
              Edit Pot
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
            Create a pot to set savings targets. These can help keep you on
            track as you save for special purchases.
          </p>
          <div>
            <label
              htmlFor="pot-name"
              className="text-gray-500 font-bold text-[12px]"
            >
              Pot Name
            </label>
            <input
              defaultValue={potName}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 30) {
                  setPotName(value);
                }
              }}
              name="pot-name"
              type="text"
              className="border w-full cursor-pointer hover:border-gray-900 border-[#98908B] px-[20px] mt-1 rounded-lg h-[45px] text-[14px] focus:outline-none"
              placeholder="e.g. Rainy Days"
            />
            <div
              className={` ${
                (state?.errors?.name && "flex") || (state?.message && "flex")
              } justify-between`}
            >
              {state?.message && (
                <div
                  className={`flex mb-4 items-center gap-2 text-[12px] ${
                    state
                      ? "text-red-500"
                      : "text-tetiary-semi-dark dark:text-secondary-light-gray"
                  } `}
                >
                  <p>{state.message}</p>
                </div>
              )}

              {state?.errors?.name && (
                <div
                  className={`flex mb-4  items-center gap-2 text-[12px] ${
                    state
                      ? "text-red-500"
                      : "text-tetiary-semi-dark dark:text-secondary-light-gray"
                  } `}
                >
                  <p>{state.errors.name}</p>
                </div>
              )}

              <p className="text-gray-500 justify-end text-[12px] font-normal text-right">
                {30 - potName.length} characters left
              </p>
            </div>
          </div>

          <div className="my-4">
            <label
              htmlFor="target"
              className="text-gray-500 font-bold text-[12px]"
            >
              Target
            </label>
            <input
              defaultValue={target}
              type="number"
              name="target"
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
                  style={{ backgroundColor: theme?.hex }}
                />

                <span className="font-normal text-gray-900 text-[14px]">
                  {theme?.name}
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
              <input type="hidden" name="theme" value={theme?.hex} />
              <input
                type="hidden"
                name="default_theme"
                value={heading.toLowerCase()}
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
                      <div className="flex  gap-3 items-center ">
                        <div
                          className={`size-4 ${potTheme
                            .filter((pot) => pot != defaultTheme)
                            ?.includes(
                              option.hex ? "opacity-20" : "opacity-100"
                            )} rounded-full `}
                          style={{
                            backgroundColor: option.hex,
                            opacity: potTheme
                              .filter((pot) => pot != defaultTheme)
                              ?.includes(option.hex)
                              ? 0.25
                              : 1,
                          }}
                        />
                        <li
                          onClick={() => {
                            if (
                              potTheme
                                .filter((pot) => pot != defaultTheme)
                                ?.includes(option.hex)
                            )
                              return;
                            else {
                              setDisplayTheme(false);
                              setTheme({ name: option.name, hex: option.hex });
                            }
                          }}
                          className={`py-3 font-normal text-[14px] ${
                            potTheme
                              .filter((pot) => pot != defaultTheme)
                              ?.includes(option.hex)
                              ? " text-gray-500"
                              : "text-gray-900 hover:text-[#277C78]"
                          } cursor-pointer transition duration-300 ease-in-out`}
                        >
                          {option.name}
                        </li>
                      </div>
                      {potTheme
                        .filter((pot) => pot != defaultTheme)
                        ?.includes(option.hex) && (
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
                          theme?.name === option.name ? "block" : "hidden"
                        }`}
                      />
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-4 text-white bg-gray-900 mt-[20px] text-[14px] hover:bg-gray-600 cursor-pointer rounded-lg font-bold"
          >
            {isPending ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </section>
    </Overlay>
  );
}
