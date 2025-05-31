import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { UserContext } from "../Context/Usercontext";
import Loading from "./Loading";
import Item from "./Item";
import { BlogContext } from "../Context/Blogcontext";

export default function Myblogs() {
  const { loading, user } = useContext(UserContext);
  const { myblogs, getmyBlogs } = useContext(BlogContext);
  useEffect(() => {
    if (user) {
      getmyBlogs(user._id);
    }
  }, [user]);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="font-mont w-full h-full dark:bg-black p-2">
      <Navbar></Navbar>
      <div className="w-full py-4 px-5 my-4">
        <h1 className="font-play text-4xl font-extralight dark:text-white text-black">
          Your Blogs
        </h1>
      </div>
      <div className="w-full px-5 max-sm:px-2 py-2 gap-4 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-sm:grid-cols-1">
        {myblogs && myblogs.length == 0 ? (
          <h1 className="text-red-400 font-mont"> * No Blogs</h1>
        ) : (
          ""
        )}
        {myblogs &&
          myblogs.map((item, index) => {
            return (
              <Item
                title={item.title}
                blogId={item._id}
                desc={item.description}
                createdName={item.createdName}
                dateString={item.dateString}
                key={index}
              ></Item>
            );
          })}
      </div>
    </div>
  );
}
