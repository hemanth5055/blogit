import React, { useContext, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoArrowUp } from "react-icons/io5";
import { UserContext } from "../Context/Usercontext";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const { Logout } = useContext(UserContext);
  return (
    <>
      <div className="w-full flex justify-between px-5">
        <h2 className="font-mont text-white font-semibold text-[20px]">
          Blogit.
        </h2>
        <div
          className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer"
          onClick={() => setisOpen(true)}
        >
          <HiOutlineMenuAlt4 className="text-white" size={20} />
        </div>
      </div>
      {isOpen ? (
        <div className="w-[300px] max-sm:w-[200px]  rounded-2xl z-20 px-5 py-3 absolute bg-amber-200 right-5 bottom-5 flex flex-col">
          <div
            className="menu flex justify-end items cursor-pointer"
            onClick={() => setisOpen(false)}
          >
            <IoClose size={20} className="text-black" />
          </div>
          <div className="p-1 flex flex-col gap-2">
            <div className="item flex items-center gap-1 cursor-pointer">
              <IoArrowUp
                className="font-medium"
                size={15}
                style={{ transform: "rotate(45deg)" }}
              />
              <h2 className="font-medium font-mont text-black">Profile</h2>
            </div>
            <div
              className="item flex items-center gap-1 cursor-pointer"
              onClick={Logout}
            >
              <IoArrowUp
                className="font-medium"
                size={15}
                style={{ transform: "rotate(45deg)" }}
              />
              <h2 className="font-medium font-mont text-black">Logout</h2>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
