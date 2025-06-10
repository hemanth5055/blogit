import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validator from "validator";

import { useLocation } from "react-router-dom";
export const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const backend = import.meta.env.VITE_BACKEND;

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();

  const Signup = async (name, email, password, profileImage, navigate) => {
    setLoading(true);
    try {
      if (!name || !email || !password || !profileImage) {
        throw new Error("All fields are required");
      }
      if (!validator.isEmail(email)) {
        throw new Error("Use a valid email");
      }
      if (password.length < 8) {
        throw new Error("Password should have at least 8 characters");
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("profileImage", profileImage); // profileImage should be a File object

      const result = await axios.post(`${backend}/auth/signup`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(result);
      if (!result) {
        throw new Error("Backend Error");
      }

      if (result.data.success) {
        setUser(result.data.user);
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
  const Login = async (email, password, navigate) => {
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
      console.log(data);
      // Check success
      if (data.success) {
        setUser(data.user);
        navigate("/");
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

  const CheckAuth = async (navigate) => {
    setLoading(true);
    try {
      const result = await axios.get(`${backend}/auth/check-auth`, {
        withCredentials: true,
      });
      if (!result) {
        throw new Error("Backend Error");
      }
      if (result.data.success) {
        setUser(result.data.user);
        navigate("/");
      }
    } catch (error) {
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };
  const Logout = async (navigate) => {
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
        backend,
        location,
        setLoading,
        ToastContainer,
        Signup,
        Login,
        Logout,
        CheckAuth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
