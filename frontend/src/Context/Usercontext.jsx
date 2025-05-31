import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";
export const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const backend = import.meta.env.VITE_BACKEND;
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [verified, setVerified] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      CheckAuth();
    }
  }, [user]);

  const Signup = async (name, email, password) => {
    setLoading(true);
    try {
      if (!name || !email || !password) {
        throw new Error("All fields are required");
      }
      const result = await axios.post(
        `${backend}/auth/signup`,
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );

      console.log(result);
      if (!result) {
        throw new Error("Backend Error");
      }

      if (result.data.success) {
        navigate("/");
      } else {
        toast(result.data.message || "Signup failed");
      }
    } catch (error) {
      toast(error.message || "Something went wrong during signup");
    } finally {
      setLoading(false);
    }
  };
  // const Verify = async (code) => {
  //   setLoading(true);
  //   try {
  //     if (!code) {
  //       throw new Error("Verification code is required");
  //     }

  //     const result = await axios.post(`${backend}/auth/verify-email`, { code });
  //     if (!result) {
  //       throw new Error("Backend Error");
  //     }

  //     console.log(result);

  //     if (result.data.success) {
  //       setUser(result.data.user);
  //       setVerified(true);
  //       navigate("/");
  //     } else {
  //       toast(result.data.message || "Verification failed");
  //     }
  //   } catch (error) {
  //     toast(error.message || "Something went wrong during verification");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const Login = async (email, password) => {
    setLoading(true); // show loading spinner
    try {
      // Validate input
      if (!email || !password) {
        toast("All fields are required");
        return;
      }

      // Send request to backend
      const { data } = await axios.post(
        `${backend}/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (!data) {
        throw new Error("No response from backend");
      }

      // Check success
      if (data.success) {
        setUser(data.user);

        if (data.user.isVerified) {
          setVerified(true);
          navigate("/");
        }
      } else {
        toast(data.message || "Login failed");
      }
    } catch (error) {
      console.error(error); // helpful for debugging
      toast(error.response?.data?.message || error.message || "Login error");
    } finally {
      setLoading(false); // always turn off loading
    }
  };

  const CheckAuth = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${backend}/auth/check-auth`, {
        withCredentials: true,
      });
      if (!result) {
        throw new Error("Backend Error");
      }
      const user = result.data.user;
      setUser(user);
      if (result.data.success) {
        if (!user.isVerified && location.pathname !== "/verify") {
          navigate("/verify");
        } else if (user.isVerified && location.pathname === "/verify") {
          setVerified(true);
          navigate("/");
        }
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };
  const Logout = async () => {
    setLoading(true);
    try {
      const result = await axios.post(`${backend}/auth/logout`, {
        withCredentials: true,
      });
      if (!result) {
        throw new Error("Backend Error");
      }

      if (result.data.success) {
        setUser(null);
        navigate("/login");
      } else {
        toast(result.data.message || "Logout failed");
      }
    } catch (error) {
      toast(error.message || "Something went wrong during logout");
    } finally {
      setLoading(false);
    }
  };
  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        toast,
        verified,
        backend,
        location,
        setLoading,
        ToastContainer,
        Signup,
        Login,
        Logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
