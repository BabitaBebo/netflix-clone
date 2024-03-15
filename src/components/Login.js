import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const onToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix logo"
        />
      </div>
      <form className=" w-4/12 absolute my-40 mx-auto left-0 right-0 bg-black p-12 text-white bg-opacity-80 ">
        <h1 className="text-4xl font-bold px-2 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-3 rounded-md w-full bg-slate-600 bg-opacity-60 border border-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Email Id"
          className="p-2 m-3 rounded-md w-full bg-slate-600 bg-opacity-60 border border-gray-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 m-3 rounded-md w-full bg-slate-600 bg-opacity-60 border border-gray-500"
        />
        <button className="p-2 mx-3 mt-6 bg-red-700 rounded-md w-full ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="p-2 m-3 ">
          <span className=" text-gray-400">
            {isSignInForm ? "New to netflix? " : "Already Registerd? "}
          </span>
          <span className="cursor-pointer" onClick={onToggleSignInForm}>
            {isSignInForm ? "Sign up now" : "Sign In now"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
