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
  const { Logout, location, user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between px-5">
        <h2
          className="font-mont text-black dark:text-white font-semibold text-[20px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          Blogit.
        </h2>

        <div className="flex gap-2 items-center">
          {location.pathname === "/create" ? (
            ""
          ) : (
            <div
              className="font-mont text-black dark:text-white text-[15px] cursor-pointer dark:border-amber-50 border-black border dark:bg-[#161515] px-2 py-1 rounded-2xl max-sm:text-[13px]"
              onClick={() => navigate("/create")}
            >
              Create
            </div>
          )}

          <div
            className="w-[40px] h-[40px]  flex justify-center items-center cursor-pointer"
            onClick={() => setisOpen((prev) => !prev)}
          >
            {isOpen ? (
              <IoClose size={20} className="dark:text-white text-black" />
            ) : (
              <HiOutlineMenuAlt4
                className="dark:text-white text-black"
                size={20}
              />
            )}
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="absolute flex bg-[#FDE36D] flex-col  items-center  right-0 top-[40%] rounded-l-2xl gap-2 z-20">
          <div
            className="profile h-[33px] w-[33px] cursor-pointer  flex justify-center items-center"
            title="Profile"
          >
            <CgProfile className="text-black"></CgProfile>
          </div>
          <div
            className="myblogs h-[33px] w-[33px] cursor-pointer flex justify-center items-center"
            title="My Blogs"
            onClick={() => navigate("/myblogs")}
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
