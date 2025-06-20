import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { UserContext } from "../Context/Usercontext";
import Loading from "./Loading";
import Item from "./Item";
import { BlogContext } from "../Context/Blogcontext";

export default function Dashboard() {
  const { loading, user } = useContext(UserContext);
  const { blogs, getBlogs } = useContext(BlogContext);
  useEffect(() => {
    if (user) {
      getBlogs();
    }
  }, [user]);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="font-mont w-full h-full dark:bg-black p-2 bg-white">
      <Navbar></Navbar>
      <div className="w-full py-4 px-5 my-4">
        <h1 className="font-play select-none text-4xl font-extralight dark:text-white text-black">
          What do you wanna READ ?
        </h1>
      </div>
      <div className="w-full px-5 max-sm:px-2 py-2 gap-4 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-sm:grid-cols-1">
        {blogs &&
          blogs.map((item, index) => {
            return (
              <Item
                title={item.title}
                blogId={item._id}
                desc={item.description}
                createdName={item.createdBy.name}
                dateString={item.dateString}
                profileUrl={item.createdBy.profileUrl}
                key={index}
                canDelete={false}
              ></Item>
            );
          })}
        {blogs?.length == 0 ? (
          <h1 className="text-red-400 font-mont">*No blogs to view</h1>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
