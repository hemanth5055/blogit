import React, { useEffect, useMemo, useRef, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import JoditEditor from "jodit-react";
import Loading from "./Loading";

export default function Create() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
      Height: 450,
      maxHeight: 450,
      minHeight: 450,
      contentStyle: "body { color: black; }", // <-- Sets the text color inside the editor
    }),
    []
  );

  useEffect(() => {
    console.log(content);
  }, [content]);
  return (
    <div className="w-full h-full p-2 flex flex-col gap-[10px]">
      {/* <Loading></Loading> */}
      <div className="w-full flex justify-between px-5">
        <h2 className="font-mont text-white font-semibold text-[20px]">
          Blogit.
        </h2>
        <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer">
          <HiOutlineMenuAlt4 className="text-white" size={20} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-[15px] px-5 items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-[40%] max-sm:w-[100%] font-medium bg-[#F9F9F9] h-[40px] rounded-[5px] outline-none text-[20px] font-mont pl-2"
        />
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
        <div className="bg-[#FDE36D] text-black font-mont py-2 px-[20px] rounded-[10px] text-[13px] font-semibold cursor-pointer">
          Post
        </div>
      </div>
    </div>
  );
}
