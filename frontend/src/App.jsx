import React, { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import Verifyemail from "./Components/Verifyemail";
import Blog from "./Components/Blog";
import Create from "./Components/Create";
import { UserContext } from "./Context/Usercontext";
import Dashboard from "./Components/Dashboard";
import Myblogs from "./Components/Myblogs";
import Notfound from "./Components/Notfound";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import { useEffect } from "react";

export default function App() {
  const { ToastContainer } = useContext(UserContext);
  const { CheckAuth } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuthorization = async () => {
      await CheckAuth(navigate);
    };
    checkAuthorization();
  }, []);
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
        {/* <Route path="/verify" element={<Verifyemail></Verifyemail>}></Route> */}
        <Route
          path="/myblogs"
          element={
            <ProtectedRoutes>
              <Myblogs></Myblogs>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/blog/:blogId"
          element={
            <ProtectedRoutes>
              <Blog></Blog>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/create"
          element={
            <ProtectedRoutes>
              <Create></Create>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Dashboard></Dashboard>
            </ProtectedRoutes>
          }
        ></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}
