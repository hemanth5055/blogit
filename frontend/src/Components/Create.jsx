import React, { useContext, useEffect, useMemo, useRef, useState } from "react";

import JoditEditor from "jodit-react";
import Loading from "./Loading";
import Navbar from "./Navbar";
import { BlogContext } from "../Context/Blogcontext";
import { UserContext } from "../Context/Usercontext";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { sendBlog } = useContext(BlogContext);
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
      Height: 550,
      maxHeight: 550,
      minHeight: 550,
      contentStyle: "body { color: black; }", // <-- Sets the text color inside the editor
    }),
    []
  );
  function getFormattedDate() {
    const today = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString("en-US", options);
  }
  const handlePost = () => {
    const todayDate = getFormattedDate();
    sendBlog(title, desc, content, todayDate);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-full  h-full p-2 flex flex-col gap-[10px]">
      <Navbar></Navbar>
      <div className="w-full flex h-full justify-between px-5 items-center gap-2 flex-wrap ">
        <div className="w-[400px] flex h-full flex-col gap-4 ">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-[100%] max-sm:w-[100%] font-medium dark:bg-[#F9F9F9] bg-[rgb(239,238,238)] h-[50px] rounded-[5px] outline-none text-[17px] font-mont pl-2"
          />
          <textarea
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Small Description"
            className="w-[100%] resize-none max-sm:w-[100%] font-medium dark:bg-[#F9F9F9] bg-[rgb(239,238,238)] h-[100px] rounded-[5px] outline-none text-[15px] font-mont p-2"
          ></textarea>
          <div
            className="bg-[#FDE36D] text-black font-mont py-2 h-[50px] flex justify-center items-center rounded-[10px] text-[13px] font-semibold cursor-pointer"
            onClick={handlePost}
          >
            Post
          </div>
        </div>

        <div className="w-[calc(100%-450px)] max-sm:w-full h-full ">
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            className="font-mont"
            tabIndex={1} // tabIndex of textarea
            onChange={(newContent) => {
              setContent(newContent);
            }}
          />
        </div>
      </div>
    </div>
  );
}
