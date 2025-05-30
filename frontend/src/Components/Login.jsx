import React, { useState } from "react";
import Loading from "./Loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="relative w-full h-full flex flex-col justify-center items-center bg-black rounded-2xl gap-[40px]">
        {/* <Loading></Loading> */}
        <div className="flex flex-col items-center">
          <h1 className="text-white font-play text-[45px] font-extralight">
            Welcome Back !
          </h1>
          <h4 className="font-mont text-white text-[11px]">
            Enter your credentials to access your account.
          </h4>
        </div>

        <div className="flex flex-col gap-[15px]">
          <div className="email box flex flex-col gap-1">
            <h4 className="font-mont font-medium text-[10px] text-white">
              Email
            </h4>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="outline-none bg-[#212121] h-[40px] w-[300px] rounded-[10px] text-white font-mont pl-2 text-[13px]"
            />
          </div>

          <div className="password box flex flex-col gap-1">
            <h4 className="font-mont font-medium text-[10px] text-white">
              Password
            </h4>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="outline-none bg-[#212121] h-[40px] w-[300px] rounded-[10px] text-white font-mont pl-2 text-[13px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-[20px]">
          <div className="bg-[#FDE36D] text-black font-mont py-2 px-[20px] rounded-[10px] text-[13px] font-semibold cursor-pointer">
            Login
          </div>
          <h2 className="text-[12px] font-mont text-white font-medium">
            Not a Member ?{" "}
            <span className="text-[#FDE36D] font-medium cursor-pointer">
              Create an account.
            </span>{" "}
          </h2>
        </div>
      </div>
    </>
  );
}
