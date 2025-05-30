import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Verifyemail from "./Components/Verifyemail";
import Blog from "./Components/Blog";
import Create from "./Components/Create";

export default function App() {
  return (
    <div className="w-full h-screen bg-black p-2 relative">
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/verify" element={<Verifyemail></Verifyemail>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
      </Routes>
    </div>
  );
}
