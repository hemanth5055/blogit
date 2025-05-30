import React, { useEffect, useState } from "react";

import Loading from "./Loading";
import Navbar from "./Navbar";

export default function Blog() {
  const [content, setContent] = useState("");

  const data = `
    <p><strong style="font-size: 30px;"><em>Sleep</em></strong> is often overlooked in our fast-paced world, yet it plays a crucial role in maintaining both mental and physical health. Adults typically need between<span style="background-color: rgb(255, 255, 0); color: rgb(0, 0, 0);"> 7 to 9 hours</span> repair processes. Muscles grow, tissues regenerate, and the immune system strengthens. On the mental side, sleep helps consolidate memories, regulate emotions, and improve cognitive performance. A well-rested mind is more focused, creative, and emotionally resilient.</p><p><br></p><p><br></p>
  `;

  useEffect(() => {
    setContent(data);
  }, []);

  return (
    <div className="relative w-full h-full bg-black rounded-2xl flex flex-col gap-[15px] pt-4">
      {/* <Loading /> */}
      <Navbar></Navbar>
      <div className="w-full flex flex-col items-center gap-[10px]">
        <h4 className="font-mont max-sm:font-medium text-white text-[13px] max-sm:text-[10px]">
          May 29 , 2025
        </h4>
        <h1 className="text-center font-play font-extralight text-white text-[40px] max-sm:text-[25px]">
          Async and Await for Web Developers
        </h1>
        <div className="flex gap-[10px] items-center">
          <div className="w-[30px] h-[30px] bg-gray-600 rounded-full"></div>
          <h1 className="text-white max-sm:font-medium font-mont text-[13px] max-sm:text-[10px]">
            Hemanth Reddy
          </h1>
        </div>
      </div>

      <div
        className="text-gray-100 text-[15px] pt-[20px] w-full px-5 font-mont leading-7"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
