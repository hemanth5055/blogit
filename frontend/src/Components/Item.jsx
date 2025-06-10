import React from "react";
import { IoArrowUp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { useContext } from "react";
import { BlogContext } from "../Context/Blogcontext";

export default function Item({
  blogId,
  title,
  desc,
  dateString,
  createdName,
  profileUrl,
  canDelete,
}) {
  const navigate = useNavigate();
  const { deleteBlog } = useContext(BlogContext);
  return (
    <div className="dark:bg-[#161515] dark:hover:bg-[#6a9bda70] hover:bg-[#a3c1e770] bg-[#f3f3f3] relative flex flex-col p-3 rounded-2xl justify-between gap-[15px] h-[180px] max-sm:h-[210px] max-sm:text-[]">
      <div className="w-full flex justify-between items-center">
        <h2
          className="dark:text-white text-black font-mont font-medium text-[30px] max-sm:text-[23px]"
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
            className="font-medium dark:text-white text-black"
            size={30}
            style={{ transform: "rotate(45deg)" }}
          />
        </div>
      </div>

      <div className="w-full flex-grow overflow-hidden" title={desc}>
        <p
          className="dark:text-white text-black font-mont text-[15px] max-sm:text-[13px] "
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {desc}
        </p>
      </div>

      <div className="w-full flex items-center justify-between px-2">
        <div className="flex gap-3">
          <div className="w-[35px] h-[35px] rounded-full dark:bg-[#D9D9D9] bg-[#b5b5b5] ">
            <img
              src={profileUrl}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="max-sm:text-[13px] dark:text-white font-mont text-[15px] text-black">
              {createdName}
            </h1>
            <h3 className="max-sm:text-[12px] dark:text-gray-300 font-mont text-[12px] text-black">
              {dateString}
            </h3>
          </div>
        </div>
        {canDelete ? (
          <div
            className="h-[35px] w-[35px] flex justify-center items-center cursor-pointer rounded-full "
            title="Delete Blog"
            onClick={() => {
              deleteBlog(blogId);
            }}
          >
            <FiTrash size={18} className="text-red-300" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
