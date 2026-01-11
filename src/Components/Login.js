import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute bg-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_large.jpg"
          alt="logo"
          className=" opacity-50"
        />
      </div>
      <form className="bg-black w-3/12 absolute my-36 p-12 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 w-full rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 text-m cursor-pointer" onClick={toggleSignUp}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already have Account?.. Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
