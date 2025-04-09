"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ChartProps } from "@/libs/definitions";
ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function Chart({
  budgetNames,
  budgetMaxAmounts,
  budgetColors,
  totalAmount,
  budgetsMaxAmount,
}: ChartProps) {
  function hexToRGBA(hex: string) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, 0.7)`;
  }

  const fadedColors = budgetColors.map((budget) => hexToRGBA(budget));

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const data = {
    labels: budgetNames,
    datasets: [
      {
        data: budgetMaxAmounts,
        backgroundColor: budgetColors,

        borderWidth: 0,
        cutout: "52%",
      },
      {
        data: budgetMaxAmounts,
        backgroundColor: fadedColors,
        tooltip: {
          enabled: false,
        },
        borderWidth: 0,
        cutout: "62%",
      },
    ],
  };
  return (
    <div className="h-[240px] w-[250px] p-3 flex justify-center relative">
      <Doughnut data={data} options={options} />

      <div className="absolute bottom-[35%]">
        <p className="font-bold text-[32px] text-gray-900">
          ${Math.floor(Math.abs(totalAmount))}
        </p>
        <p className="font-normal text-[12px] text-gray-500">
          of ${budgetsMaxAmount} limit
        </p>
      </div>
    </div>
  );
}
