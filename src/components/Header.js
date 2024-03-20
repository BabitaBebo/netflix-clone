import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <>
      <div className="absolute w-screen p-2 bg-gradient-to-b from-black z-20 flex justify-between">
        <img
          className=" w-44"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/2560px-Netflix_2014_logo.svg.png"
          alt="logo"
        />

        {user && (
          <div className="flex p-2 ">
            <img
              className="w-12 h-12"
              alt="profileicon"
              src={user?.photoURL}
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
