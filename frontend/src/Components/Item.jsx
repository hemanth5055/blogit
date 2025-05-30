import React from "react";
import { IoArrowUp } from "react-icons/io5";

export default function Item() {
  return (
    <div className="bg-[#161515] hover:bg-[#6a9bda70] relative flex flex-col p-3 rounded-2xl gap-3">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-white font-mont font-medium text-[20px]">
          UX Review Presentation
        </h2>
        <div className="w-[30px] h-[30px] cursor-pointer flex justify-center items-center">
          <IoArrowUp
            className="font-medium text-white"
            size={25}
            style={{ transform: "rotate(45deg)" }}
          />
        </div>
      </div>
      <div className="w-full">
        <p className="text-white font-mont text-[12px]">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and visual mockups.
        </p>
      </div>
      <div className="w-full flex gap-2 items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-[#D9D9D9]"></div>
        <div className="flex  flex-col">
          <h1 className="text-white font-mont text-[12px]">Hemanth Reddy</h1>
          <h3 className="text-gray-300 font-mont text-[10px]">May 29 ,2025</h3>
        </div>
      </div>
    </div>
  );
}
