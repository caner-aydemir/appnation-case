"use client";

import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Page Not Found
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Sorry, we could not find the page you are looking for.
      </p>
      <button
        onClick={() => router.push("/")}
        className="hover:cursor-pointer underline border-2 px-4 py-2 text-white bg-black rounded-full dark:bg-white dark:text-black"
      >
        Go back home
      </button>
    </section>
  );
};

export default NotFoundPage;
