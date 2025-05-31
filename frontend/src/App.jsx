import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Verifyemail from "./Components/Verifyemail";
import Blog from "./Components/Blog";
import Create from "./Components/Create";
import { UserContext } from "./Context/Usercontext";
import Dashboard from "./Components/Dashboard";
import Myblogs from "./Components/Myblogs";
import Notfound from "./Components/Notfound";

export default function App() {
  const { ToastContainer } = useContext(UserContext);
  return (
    <div className="w-full min-h-screen dark:bg-black p-2 relative max-sm:px-1">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition={Bounce}
      />
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/verify" element={<Verifyemail></Verifyemail>}></Route>
        <Route path="/myblogs" element={<Myblogs></Myblogs>}></Route>
        <Route path="/blog/:blogId" element={<Blog></Blog>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}
