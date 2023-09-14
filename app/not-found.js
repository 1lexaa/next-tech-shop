import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section class="  ">
      <div class="container flex items-center min-h-screen px-6 py-12 mx-auto  ">
        <div>
          <p class="text-sm font-medium text-blue-500 dark:text-blue-400">
            404 error
          </p>
          <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesnt exist.
          </p>

          <div class="flex items-center mt-6 gap-x-3">
            

            <button class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
              <Link href="/home">Home</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
