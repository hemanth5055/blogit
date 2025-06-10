import { useContext } from "react";
import { createContext } from "react";
import { UserContext } from "./Usercontext";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const { toast, backend, setLoading } = useContext(UserContext);
  const [blogs, setBlogs] = useState(null);
  const [myblogs, setmyBlogs] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user || loading) return;
  //   if (!user.isVerified && location.pathname !== "/verify") {
  //     navigate("/verify");
  //   }
  // }, [user, verified, loading, location.pathname]);

  const getBlogs = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${backend}/blog/all`, {
        withCredentials: true,
      });
      console.log(result);
      setBlogs(result.data.blogs);
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getmyBlogs = async () => {
    setLoading(true);
    try {
      const result = await axios.get(`${backend}/blog/userSpecific`, {
        withCredentials: true,
      });
      console.log(result.data.blogs);
      setmyBlogs(result.data.blogs);
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
      const result = await axios.get(`${backend}/blog/blogSpecific/${id}`, {
        withCredentials: true,
      });
      console.log(result);
      if (result.data.success) {
        setterFn(result.data.blog);
      } else {
        toast("No Blog Found");
        setterFn(null);
      }
    } catch (error) {
      toast("Blog Not Found");
    } finally {
      setLoading(false);
    }
  };

  const sendBlog = async (title, description, content, dateString) => {
    setLoading(true);
    try {
      if (!title || !description || !content || !dateString) {
        throw new Error("All fields are required.");
      }
      const result = await axios.post(
        `${backend}/blog/add`,
        {
          title,
          description,
          content,
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
  const deleteBlog = async (id) => {
    setLoading(true);
    try {
      if (!id) {
        throw new Error("Missing Id");
      }
      const result = await axios.delete(`${backend}/blog/deleteBlog/${id}`, {
        withCredentials: true,
      });
      if (result.data.success) {
        toast("Blog deleted successfully!");
        if (getmyBlogs) {
          getmyBlogs((prev) => prev.filter((blog) => blog._id !== id));
        }
      } else {
        toast(result.data.message || "Failed to delete blog");
      }
    } catch (error) {
      toast(error.response?.data?.message || "Blog could not be deleted");
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
        deleteBlog,
        getspecificBlog,
        sendBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
