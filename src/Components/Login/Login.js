import { LockClosedIcon } from "@heroicons/react/solid";
import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {

  const {signWithGoogle} = useFirebase();
  const hello = ()=>{
    console.log('Hello');
  }
  const formSubmit = (event)=>{
        event.preventDefault();
        
  }

  return (
    <div style={{
        backgroundImage: "url(register_bg_2.png)",

        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }} className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-sky-900">
  <div className="max-w-md w-full md:my-24">
    <div>
      <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
      <p className="mt-2 text-center text-sm text-white">
        Or
        <a href="/" className="font-medium text-white hover:text-indigo-500"> start your 14-day free trial </a>
      </p>
    </div>
    <form onSubmit={formSubmit} className="mt-8 space-y-6">
     
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label className="sr-only">Email address</label>
          <input
                type="email"
               placeholder="Email"
                
                className="peer bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm font-bold">
                Please provide a valid email address.
              </p>
        </div>
        <div>
           <input
                type="password"
                placeholder="Password"
                
                className="peer bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
              <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm font-bold">
                Please provide a valid email address.
              </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label  className="ml-2 block text-sm text-white"> Remember me </label>
        </div>

        <div className="text-sm">
          <a href="/" className="font-medium text-white hover:text-indigo-500"> Forgot your password? </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
         
          <button className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">FACEBOOK</button>
          <button type="" onClick={signWithGoogle} className="rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">GOOGLE</button>
        </div>
      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-white group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>
  );
};

export default Login;
