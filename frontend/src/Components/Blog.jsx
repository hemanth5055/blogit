import React, { useEffect, useState } from "react";

import Loading from "./Loading";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../Context/Blogcontext";
import { UserContext } from "../Context/Usercontext";

export default function Blog() {
  const [content, setContent] = useState(null);
  const { loading } = useContext(UserContext);
  const { getspecificBlog } = useContext(BlogContext);
  const { blogId } = useParams();

  const data = `
    <p><strong style="font-size: 30px;"><em>Sleep</em></strong> is often overlooked in our fast-paced world, yet it plays a crucial role in maintaining both mental and physical health. Adults typically need between<span style="background-color: rgb(255, 255, 0); color: rgb(0, 0, 0);"> 7 to 9 hours</span> repair processes. Muscles grow, tissues regenerate, and the immune system strengthens. On the mental side, sleep helps consolidate memories, regulate emotions, and improve cognitive performance. A well-rested mind is more focused, creative, and emotionally resilient.</p><p><br></p><p><br></p>
  `;

  useEffect(() => {
    getspecificBlog(blogId, setContent);
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="relative w-full h-full dark:bg-black rounded-2xl flex flex-col gap-[15px] p-2">
      <Navbar></Navbar>
      <div className="w-full flex flex-col items-center gap-[10px]">
        <h4 className="font-mont max-sm:font-medium dark:text-white text-[15px] max-sm:text-[15px]">
          {content?.dateString}
        </h4>
        <h1 className="text-center font-play font-extralight dark:text-white text-[60px] max-sm:text-[40px]">
          {content ? content.title : "Blog not found"}
        </h1>
        <div className="flex gap-[10px] items-center">
          <div className="w-[30px] h-[30px]  rounded-full">
            <img
              src={content?.createdBy.profileUrl}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="dark:text-white max-sm:font-medium font-mont text-[15px] max-sm:text-[15px]">
            {content?.createdBy.name}
          </h1>
        </div>
      </div>

      <div
        className="dark:text-gray-100 text-[19px] pt-[20px] w-full px-5 font-mont leading-7 mb-5"
        dangerouslySetInnerHTML={{ __html: content?.content }}
      />
    </div>
  );
}
