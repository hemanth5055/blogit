import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { UserContext } from "../Context/Usercontext";
import Loading from "./Loading";
import Item from "./Item";

export default function Dashboard() {
  const { loading, user } = useContext(UserContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="font-mont w-full h-full bg-black p-2">
      <Navbar></Navbar>
      <div className="w-full py-4 px-5 my-4">
        <h1 className="font-play text-4xl font-extralight text-white">
          What do you wanna READ ?
        </h1>
      </div>
      <div className="w-full px-5 py-2 gap-4 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] max-sm:grid-cols-1">
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    </div>
  );
}
