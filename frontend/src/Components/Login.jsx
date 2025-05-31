import React, { useContext, useState } from "react";
import Loading from "./Loading";
import { UserContext } from "../Context/Usercontext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login, loading } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="relative w-full h-full flex flex-col justify-center items-center dark:bg-black rounded-2xl gap-[40px]">
        {loading ? <Loading></Loading> : ""}
        <div className="mt-[150px]  flex flex-col items-center ">
          <h1 className="dark:text-white text-black font-play text-[45px] font-extralight">
            Welcome Back !
          </h1>
          <h4 className="font-mont dark:text-white text-[11px] text-black">
            Enter your credentials to access your account.
          </h4>
        </div>

        <div className="flex flex-col gap-[15px]">
          <div className="email box flex flex-col gap-1">
            <h4 className="font-mont font-medium text-[10px] dark:text-white text-black">
              Email
            </h4>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="outline-none dark:bg-[#212121] text-black bg-[rgb(239,238,238)] h-[40px] w-[300px] rounded-[10px] dark:text-white font-mont pl-2 text-[13px]"
            />
          </div>

          <div className="password box flex flex-col gap-1">
            <h4 className="font-mont font-medium text-[10px] dark:text-white text-black">
              Password
            </h4>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="outline-none dark:bg-[#212121] text-black  bg-[rgb(239,238,238)] h-[40px] w-[300px] rounded-[10px] dark:ext-white font-mont pl-2 text-[13px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-[20px]">
          <div
            onClick={() => Login(email, password)}
            className="bg-[#FDE36D] text-black font-mont py-2 px-[20px] rounded-[10px] text-[13px] font-semibold cursor-pointer"
          >
            Login
          </div>
          <h2 className="text-[12px] font-mont dark:text-white font-medium text-black">
            Not a Member ?{" "}
            <span
              className="dark:text-[#FDE36D] text-[#eece42] font-medium cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Create an account.
            </span>{" "}
          </h2>
        </div>
      </div>
    </>
  );
}
