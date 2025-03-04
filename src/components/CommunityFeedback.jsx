import React from "react";

const CommunityFeedback = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md w-full mt-4">
      <h2 className="text-sm text-gray-500">Community feedback</h2>
      <h3 className="text-lg font-semibold mt-1">Mostly positive</h3>

      {/* Progress Bar */}
      <div className="flex items-center gap-1 mt-2">
        <div className="h-2 flex-1 bg-red-300 rounded-full"></div>
        <div className="h-2 flex-1 bg-yellow-300 rounded-full"></div>
        <div className="h-2 flex-[2] bg-green-400 rounded-full"></div>
      </div>

      {/* Feedback Stats */}
      <div className="flex justify-between mt-3 text-sm text-gray-600">
        <div className="flex flex-col items-center">
          <span className="font-semibold">Negative</span>
          <span className="font-bold text-black">12</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold">Neutral</span>
          <span className="font-bold text-black">34</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold">Positive</span>
          <span className="font-bold text-black">134</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeedback;
