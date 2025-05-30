import React, { useState } from "react";
import Loading from "./Loading";

export default function Verifyemail() {
  const [code, setCode] = useState("");
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-black rounded-2xl gap-[40px]">
      {/* <Loading></Loading> */}
      <div className="flex flex-col items-center">
        <h1 className="text-white font-play text-[45px] max-sm:text-[40px] font-extralight">
          Verify Your Email !
        </h1>
        <h4 className="font-mont text-white text-[11px]">
          Enter the 6-digit code sent to your inbox to continue.
        </h4>
      </div>

      <div className="flex flex-col gap-[15px]">
        <div className="email box flex flex-col gap-1">
          <h4 className="font-mont font-medium text-[10px] text-white">Code</h4>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="text"
            className="outline-none bg-[#212121] h-[40px] w-[300px] rounded-[10px] text-white font-mont pl-2 text-[13px]"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-[20px]">
        <div className="bg-[#FDE36D] text-black font-mont py-2 px-[20px] rounded-[10px] text-[13px] font-semibold cursor-pointer">
          verify
        </div>
        <h2 className="text-[12px] font-mont text-white font-medium">
          Didn't get the mail ?{" "}
          <span className="text-[#FDE36D] font-medium cursor-pointer">
            Resend.
          </span>{" "}
        </h2>
      </div>
    </div>
  );
}
