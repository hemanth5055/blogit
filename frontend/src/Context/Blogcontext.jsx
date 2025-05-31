import { useContext } from "react";
import { createContext } from "react";
import { UserContext } from "./Usercontext";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const { user, loading, toast, backend, setLoading, verified, location } =
    useContext(UserContext);
  const [blogs, setBlogs] = useState(null);
  const [myblogs, setmyBlogs] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user || loading) return;
  //   if (!user.isVerified && location.pathname !== "/verify") {
  //     navigate("/verify");
  //   }
  // }, [user, verified, loading, location.pathname]);

  const getBlogs = async (id, count) => {
    setLoading(true);
    try {
      if (!id || !count) {
        throw new Error("Missind Id and Count");
      }
      const result = await axios.post(
        `${backend}/blog/all`,
        { id, count },
        { withCredentials: true }
      );
      setBlogs(result.data.blogs);
      console.log(result);
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getmyBlogs = async (id) => {
    setLoading(true);
    try {
      if (!id) {
        throw new Error("Missing Id");
      }
      const result = await axios.post(
        `${backend}/blog/userSpecific`,
        {
          id,
        },
        { withCredentials: true }
      );
      setmyBlogs(result.data.blogs);
      console.log(result);
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getspecificBlog = async (id, setterFn) => {
    setLoading(true);
    try {
      if (!id) {
        throw new Error("Missing Id");
      }
      const result = await axios.post(
        `${backend}/blog/blogSpecific`,
        {
          id,
        },
        { withCredentials: true }
      );
      console.log(result);
      if (result.data.success) {
        setterFn(result.data.blog);
        console.log(result.data.blog);
      } else {
        toast("No Blog Found");
        setterFn(null);
        navigate("/");
      }
    } catch (error) {
      toast("Blog Not Found");
    } finally {
      setLoading(false);
    }
  };

  const sendBlog = async (
    title,
    description,
    content,
    createdName,
    createdId,
    dateString
  ) => {
    setLoading(true);
    try {
      if (
        !title ||
        !description ||
        !content ||
        !createdId ||
        !createdName ||
        !dateString
      ) {
        throw new Error("All fields are required.");
      }
      const result = await axios.post(
        `${backend}/blog/add`,
        {
          title,
          description,
          content,
          createdId,
          createdName,
          dateString,
        },
        { withCredentials: true }
      );
      console.log(result);
      if (result.data.success) {
        navigate(`/blog/${result.data.blog._id}`);
      } else {
        toast("Cannot Post The Blog");
      }
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        getmyBlogs,
        myblogs,
        getBlogs,
        getspecificBlog,
        sendBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
