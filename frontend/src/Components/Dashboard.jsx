import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { UserContext } from "../Context/Usercontext";
import Loading from "./Loading";

export default function Dashboard() {
  const { loading, user } = useContext(UserContext);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="font-mont w-full h-full bg-black p-2">
      <Navbar></Navbar>
      <div className="w-full py-4 px-5">
        <h1 className="font-play text-4xl font-extralight text-white">
          What do you wanna READ ?
        </h1>
      </div>
    </div>
  );
}
