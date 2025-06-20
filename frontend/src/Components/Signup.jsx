import React, { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { UserContext } from "../Context/Usercontext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const { loading, Signup, user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center dark:bg-black rounded-2xl gap-[40px]">
      {loading ? <Loading></Loading> : ""}
      <div className="mt-[100px] flex flex-col items-center">
        <h1 className="dark:text-white font-play text-[65px] font-extralight text-black max-sm:text-[45px] ">
          Welcome Dev !
        </h1>
        <h4 className="font-mont dark:text-white text-[15px] text-black max-sm:text-[14px] ">
          Enter your information to create your account.
        </h4>
      </div>

      <div className="flex flex-col gap-[15px]">
        <div className="name box flex flex-col gap-1">
          <h4 className="font-mont font-medium text-[15px] dark:text-white text-black">
            Name
          </h4>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="outline-none dark:bg-[#212121] text-black  bg-[rgb(239,238,238)] h-[40px] w-[350px]  max-sm:w-[300px] rounded-[10px] dark:text-white font-mont pl-2 text-[15px]"
          />
        </div>
        <div className="password box flex flex-col gap-1">
          <h4 className="font-mont font-medium text-[15px] dark:text-white text-black">
            Email
          </h4>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="outline-none dark:bg-[#212121] text-black  bg-[rgb(239,238,238)] h-[40px] w-[350px] max-sm:w-[300px]  rounded-[10px] dark:text-white font-mont pl-2 text-[15px]"
          />
        </div>

        <div className="email box flex flex-col gap-1">
          <h4 className="font-mont font-medium text-[15px] dark:text-white text-black">
            Password
          </h4>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="outline-none dark:bg-[#212121] text-black  bg-[rgb(239,238,238)] h-[40px] w-[350px] max-sm:w-[300px]  rounded-[10px] dark:text-white font-mont pl-2 text-[15px]"
          />
        </div>

        <div className="email box flex flex-col gap-1">
          <h4 className="font-mont font-medium text-[15px] dark:text-white text-black">
            Profile Pic
          </h4>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            className="outline-none dark:bg-[#212121] text-black  bg-[rgb(239,238,238)] h-[40px] w-[350px] max-sm:w-[300px]  rounded-[10px] dark:text-white font-mont pl-2 text-[15px]"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-[20px]">
        <div
          onClick={() => Signup(name, email, password, image, navigate)}
          className="bg-[#FDE36D] text-black font-mont py-2 px-[20px] rounded-[10px] text-[15px] font-semibold cursor-pointer"
        >
          Signup
        </div>
        <h2 className="text-[15px] font-mont text-black dark:text-white font-medium">
          Already a member?{" "}
          <span
            className="dark:text-[#FDE36D] text-[#eece42]  font-medium cursor-pointer"
            onClick={() => navigate("/login")}
          >
            login here.
          </span>
        </h2>
      </div>
    </div>
  );
}
