/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase.js";
import { addUser } from "../utils/userSlice.js";
import {
  BACKGROUND_IMAGE_SIGNIN,
  USER_PROFILE,
  DEFAULT_PROFILE_IMAGE,
} from "../utils/constants.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const onToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const onHandleClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //SIGN UP
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //SIGNED UP
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: DEFAULT_PROFILE_IMAGE,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
              console.log(user.displayName);
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          console.log(user);
          // navigate("/browse");
        })
        .catch((err) => {
          const errCode = err.code;
          const errMessage = err.message;
          setErrorMessage(errCode + "-" + errMessage);
        });
    } else {
      //SIGN IN
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // navigate("/browse");
        })
        .catch((err) => {
          const errCode = err.code;
          const errMessage = err.message;
          setErrorMessage(errCode + "-" + errMessage);
        });
    }

    // console.log(email.current.value);
    // console.log(password.current.value);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMAGE_SIGNIN} alt="Netflix logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-4/12 absolute my-40 mx-auto left-0 right-0 bg-black p-12 text-white bg-opacity-80 "
      >
        <h1 className="text-4xl font-bold px-2 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-3 rounded-md w-full bg-slate-600 bg-opacity-60 border border-gray-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Id"
          className="p-2 m-3 rounded-md w-full bg-slate-600 bg-opacity-60 border border-gray-500"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-3 rounded-md w-full bg-slate-600 bg-opacity-60 border border-gray-500"
        />
        <p className="px-4 text-red-600 text-lg">{errorMessage}</p>
        <button
          className="p-2 mx-3 mt-6 bg-red-700 rounded-md w-full "
          onClick={onHandleClick}
        >
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
