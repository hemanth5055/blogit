import React, { useState } from "react";
import Loading from "./Loading";
import { useContext } from "react";
import { UserContext } from "../Context/Usercontext";
import Navbar from "./Navbar";

export default function Verifyemail() {
  const [code, setCode] = useState("");
  const { loading } = useContext(UserContext);
  return (
    <>
      <Navbar></Navbar>
      <div className="relative w-full h-full flex b flex-col justify-center items-center dark:bg-black rounded-2xl gap-[40px]">
        {loading ? <Loading></Loading> : ""}
        <div className="mt-[150px] flex flex-col items-center">
          <h1 className="text-black dark:text-white font-play text-[45px] max-sm:text-[40px] font-extralight">
            Verify Your Email !
          </h1>
          <h4 className="font-mont dark:text-white text-[11px]">
            Enter the 6-digit code sent to your inbox to continue.
          </h4>
        </div>

        <div className="flex flex-col gap-[15px]">
          <div className="email box flex flex-col gap-1">
            <h4 className="font-mont font-medium text-[10px] dark:text-white">
              Code
            </h4>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type="text"
              className="outline-none dark:bg-[#212121] text-black  bg-[rgb(239,238,238)] h-[40px] w-[300px] rounded-[10px] dark:text-white font-mont pl-2 text-[13px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-[20px]">
          <div
            // onClick={(e) => Verify(code)}
            className="bg-[#FDE36D] text-black font-mont py-2 px-[20px] rounded-[10px] text-[13px] font-semibold cursor-pointer"
          >
            Verify
          </div>
          <h2 className="text-[12px] font-mont dark:text-white font-medium">
            Didn't get the mail ?{" "}
            <span className="dark:text-[#FDE36D] text-[#eece42] font-medium cursor-pointer">
              Resend.
            </span>{" "}
          </h2>
        </div>
      </div>
    </>
  );
}
