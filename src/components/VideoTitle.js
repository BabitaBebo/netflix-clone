import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl ">{title}</h1>
      <p className="p-6 text-md w-1/3">{overview}</p>
      <div className="flex">
        <button className=" bg-white text-xl border w-28 rounded-md p-2 text-black font-semibold mx-3 hover:opacity-70">
          ▶️ Play
        </button>
        <button className=" bg-gray-400 text-white font-semibold border w-28 rounded-md p-2 hover:opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
