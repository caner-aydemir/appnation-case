"use client";

const HourlyWeatherSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-4xl mx-auto animate-pulse">
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mb-6"></div>

      <div className="flex flex-col divide-y divide-gray-300 dark:divide-gray-700">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="flex items-center justify-between py-3">
            <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-5 w-12 bg-gray-300 dark:bg-gray-700 rounded" />
            <div className="h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full" />
            <div className="flex flex-col items-end gap-1">
              <div className="h-3 w-20 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-3 w-10 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyWeatherSkeleton;
