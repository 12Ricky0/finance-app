import Image from "next/image";
import Link from "next/link";
import { PotProps } from "@/libs/definitions";

export default function Pots_Card({ potsData }: { potsData: PotProps[] }) {
  const pots = potsData.slice(0, 4);

  const totalPot = potsData.reduce((sum, pot) => sum + pot.total, 0);

  return (
    <section className="bg-white py-6 px-[20px] rounded-lg md:gap-6 mx-4 md:mx-[40px] md:p-[32px] lg:mr-0 mt-8 md:mt-6 mb-4 md:mb-6">
      <div className="flex justify-between mb-[20px]">
        <h1 className="text-gray-900 font-bold text-[20px]">Pots</h1>

        <Link href="/finance/pots" className="inline-flex items-center gap-3">
          <h2 className="font-normal text-[14px] hover:text-gray-900 text-gray-500">
            See Details
          </h2>
          <Image
            src="/assets/images/icon-caret-right.svg"
            alt="right"
            width={32}
            height={32}
            className=" w-auto h-auto cursor-pointer "
          />
        </Link>
      </div>
      <div className="flex flex-col md:items-center md:flex-row gap-[20px]">
        <div className="bg-beige-100 rounded-lg px-[22px] md:flex-1/12 flex gap-x-[22px] py-[20px]">
          <Image
            src="/assets/images/icon-pot.svg"
            alt="right"
            width={32}
            height={32}
          />

          <article className="flex flex-col gap-[11px]">
            <p className="font-normal text-[14px] text-gray-500">Total Saved</p>
            <h1 className="text-gray-900 font-bold text-[32px]">${totalPot}</h1>
          </article>
        </div>

        <div className="grid gap-4 md:flex-1/12 grid-cols-2">
          {pots.map((pot) => (
            <div key={pot.name} className="flex gap-4 ">
              <div
                style={{ backgroundColor: pot.theme }}
                className={`w-1  h-[43px] rounded-t-full rounded-b-full`}
              />
              <article className="flex flex-col gap-[4px]">
                <p className="font-normal text-[12px] text-gray-500">
                  {pot.name}
                </p>
                <h1 className="text-gray-900 font-bold text-[14px]">
                  ${pot.total}
                </h1>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
