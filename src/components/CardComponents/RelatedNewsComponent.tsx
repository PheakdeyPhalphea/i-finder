"use client"
import React from "react";
import { FaBookmark } from "react-icons/fa";
export default function RelatedNewsComponent() {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[500px]">
      <div className="relative overflow-hidden text-gray-700 bg-white bg-clip-border rounded-tl-xl rounded-tr-xl h-[250px]">
        <img
          src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg"
          alt="card-image"
          className="object-fill w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium  text-blue-gray-900">
            Over 400 million Google accounts have used passkeys, but our
            passwordless future remains elusive
          </p>
          <p className="block mt-2 font-sans antialiased font-medium text-blue-gray-900">
            <FaBookmark />
          </p>
        </div>
      </div>
    </div>
  );
}
