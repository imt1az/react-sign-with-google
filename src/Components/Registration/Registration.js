import React from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
const Registration = () => {
  return (
    <div
      style={{
        backgroundImage: "url(register_bg_2.png)",

        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-sky-900"
    >
      <div className="max-w-md w-full md:my-24">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Registration an account
          </h2>
          <p className="mt-2 text-center text-sm text-white">
            Or{" "}
            <a
              href="/"
              className="font-medium text-white hover:text-indigo-500"
            >
              start your 14-day free trial
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="py-2">
              <label htmlFor="email-address" className="sr-only">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="peer bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
            <div className="py-2">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="peer bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
            <div className="py-2">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="peer bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-white"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-white hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
          <a
            href="/"
            className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
            >FACEBOOK</a
          >
          <a
            href="/"
            className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
            >GOOGLE</a
          >
        </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-white group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
