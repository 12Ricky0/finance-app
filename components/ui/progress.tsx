import React from "react";

const ProgressBar = ({ spent, total }) => {
  const percentage = Math.min((spent / total) * 100, 100); // Ensure it doesn't exceed 100%

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between text-sm font-semibold mb-1">
        <span>Spent: ${spent}</span>
        <span>Total: ${total}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 relative">
        <div
          className="h-2 rounded-full bg-blue-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-center mt-2 font-bold text-gray-700">
        {percentage.toFixed(1)}% Used
      </div>
    </div>
  );
};

export default ProgressBar;
