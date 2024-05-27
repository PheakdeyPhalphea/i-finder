"use client";

import { FaBookmark } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

export default function VideosCard() {
  return (
    <section className="w-1/2 flex ml-52 items-center p-4 bg-white rounded-lg shadow-md relative">
      <div className="relative flex-shrink-0 w-[200px] h-40">
        <img
          className="w-full h-full rounded-lg"
          src="https://nextui.org/images/album-cover.png"
          alt="Video thumbnail"
        />
        <div className="absolute top-[120px] right-2 bg-slate-700/50 rounded-lg p-1 text-white">
          <span>1.47</span>
        </div>
      </div>
      <div className="ml-4 flex-grow h-[165px] grid gap-3">
        <div className="flex text-gray-500 text-sm">
          <FaYoutube className="w-10 h-[20px] mr-4  text-red-500" />
          <span>YouTube &gt; Finding Gina Marie – Travel the World</span>
        </div>
        <h2 className=" text-base font-bold text-blue-600">
          <a href="#" className="hover:underline">
            Siem Reap, Cambodia: Why It's the Most Popular City in Cambodia
          </a>
        </h2>
        <p className="text-gray-600 text-sm">
          Ep.86 Have you ever visited a place and thought, "I could live here..."
        </p>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <span>5 days ago</span>
          <div className="flex items-center ml-4">
            <IoEyeSharp className="w-5 h-5 mr-1" />
            <span>1.47K</span>
          </div>
        </div>
      </div>
      <div className="w-10 h-[190px] flex justify-center">
        <FaBookmark className="w-6 h-6 text-gray-500" />
      </div>
    </section>
  );
}
