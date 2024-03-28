/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);
  return (
    <>
      <div className="absolute w-screen p-2 bg-gradient-to-b from-black z-20 flex justify-between">
        <img className=" w-44" src={LOGO} alt="logo" />

        {user && (
          <div className="flex p-2 ">
            <img
              className="w-12 h-12 rounded-md"
              src={user?.photoURL}
              alt="profileicon"
              // src="https://occ-0-4826-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYh1GXyzHI-IqH5gUm3DHnqwmPCTLO5rmui76NzrDHgzMA7or4fZQUjLBsrXzx0JiwagUlQSf7Wiu4yI-A4hfpwleGn8R3g.png?r=54d"
            />
            <button
              onClick={handleSignOut}
              className="m-1 px-2 cursor-pointer text-white font-bold "
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
