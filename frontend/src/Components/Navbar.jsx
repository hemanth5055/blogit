import React, { useContext, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { UserContext } from "../Context/Usercontext";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineLibraryBooks } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const { Logout } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between px-5">
        <h2
          className="font-mont text-white font-semibold text-[20px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          Blogit.
        </h2>
        <div
          className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer"
          onClick={() => setisOpen((prev) => !prev)}
        >
          {isOpen ? (
            <IoClose size={20} className="text-white" />
          ) : (
            <HiOutlineMenuAlt4 className="text-white" size={20} />
          )}
        </div>
      </div>
      {isOpen ? (
        <div className="absolute flex bg-[#FDE36D] flex-col  items-center  right-0 top-[40%] rounded-l-2xl gap-2">
          <div
            className="profile h-[33px] w-[33px] cursor-pointer  flex justify-center items-center"
            title="Profile"
          >
            <CgProfile className="text-black"></CgProfile>
          </div>
          <div
            className="myblogs h-[33px] w-[33px] cursor-pointer flex justify-center items-center"
            title="My Blogs"
          >
            <MdOutlineLibraryBooks className="text-black"></MdOutlineLibraryBooks>
          </div>
          <div
            className="logout h-[33px] w-[33px] cursor-pointer flex justify-center items-center"
            title="Logout"
            onClick={Logout}
          >
            <TbLogout2 className="text-black"></TbLogout2>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
