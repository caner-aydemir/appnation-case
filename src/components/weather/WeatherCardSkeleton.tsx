"use client";

const WeatherCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-4xl mx-auto animate-pulse">
      <div className="h-6 w-2/3 bg-gray-300 dark:bg-gray-800 rounded mb-8 mx-auto"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col gap-6">
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-24 w-24 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        </div>

        <div className="flex flex-col gap-6">
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
          <SkeletonLine />
        </div>
      </div>
    </div>
  );
};

const SkeletonLine = () => (
  <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
    <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
    <div className="h-4 w-12 bg-gray-300 dark:bg-gray-700 rounded"></div>
  </div>
);

export default WeatherCardSkeleton;
