import React from "react";
import { TbRotateClockwise } from "react-icons/tb";

export default function Loading() {
  return (
    <div className="absolute w-full h-full right-0 top-0 z-10 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-[#FDE36D] p-4 rounded-2xl ">
        <TbRotateClockwise className="text-black  animate-spin" size={25} />
      </div>
    </div>
  );
}
