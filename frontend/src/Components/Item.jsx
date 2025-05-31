import React from "react";
import { IoArrowUp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Item({ blogId, title, desc, dateString, createdName }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#161515] hover:bg-[#6a9bda70] relative flex flex-col p-3 rounded-2xl justify-between gap-[15px] h-[180px] max-sm:h-[200px]"
    >
      <div className="w-full flex justify-between items-center">
        <h2
          className="text-white font-mont font-medium text-[20px]"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "calc(100% - 40px)",
          }}
          title={title}
        >
          {title}
        </h2>
        <div
          className="w-[30px] h-[30px] cursor-pointer flex justify-center items-center"
          onClick={() => navigate(`/blog/${blogId}`)}
        >
          <IoArrowUp
            className="font-medium text-white"
            size={25}
            style={{ transform: "rotate(45deg)" }}
          />
        </div>
      </div>

      <div
        className="w-full flex-grow overflow-hidden"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
        title={desc}
      >
        <p className="text-white font-mont text-[12px]">{desc}</p>
      </div>

      <div className="w-full flex gap-2 items-center">
        <div className="w-[30px] h-[30px] rounded-full bg-[#D9D9D9]"></div>
        <div className="flex flex-col">
          <h1 className="text-white font-mont text-[12px]">{createdName}</h1>
          <h3 className="text-gray-300 font-mont text-[10px]">{dateString}</h3>
        </div>
      </div>
    </div>
  );
}
