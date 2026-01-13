import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateEmail, validatePassword } from "../Util/Validate";
import { auth } from "../Util/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Util/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorEmailMessage, setErrorEmailMessage] = useState(null);
  const [errorPassMessage, setErrorPassMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const validateForm = () => {
    const messageEmail = validateEmail(email.current.value);
    setErrorEmailMessage(messageEmail);
    const messagePassword = validatePassword(password.current.value);
    setErrorPassMessage(messagePassword);

    if (messageEmail != null && messagePassword != null) return;

    if (!isSignInForm) {
      //Sign Up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/v2/D5603AQFOXVy8-qLe9Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711181568249?e=2147483647&v=beta&t=Lt4GKXB6l4IeJs1qXzgiPvccBovsMeZMb9Zw3ytJdD0",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          navigate("/browse");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorPassMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorPassMessage(errorCode + "-" + errorMessage);
        });
    }
  };

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-black w-3/12 absolute my-36 p-12 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 w-full rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full rounded-lg"
        />
        <p className="text-red-700 font-bold">{errorEmailMessage}</p>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full rounded-lg"
        />
        <p className="text-red-700 font-bold">{errorPassMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full" onClick={validateForm}>
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
