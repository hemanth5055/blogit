import { Blog } from "../Models/blog.model.js";

export async function add(req, res) {
  const { title, description, content, dateString } = req.body;
  const user = req.user;

  try {
    if (!title || !description || !content || !dateString) {
      throw new Error("All fields are required.");
    }

    const post = new Blog({
      title,
      description,
      content,
      createdBy: user,
      dateString,
    });
    const result = await post.save();
    return res.status(200).json({ success: true, blog: result });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}

export async function all(req, res) {
  const user = req.user;
  try {
    const result = await Blog.find({ createdBy: { $ne: user } })
      .populate("createdBy", "name profileUrl")
      .sort({ createdAt: 1 });
    return res.status(200).json({ success: true, blogs: result });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}

export async function userBlogs(req, res) {
  const user = req.user;
  try {
    const result = await Blog.find({ createdBy: user }).sort({
      createdAt: 1,
    });
    return res.status(200).json({ success: true, blogs: result });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}
export async function reqBlog(req, res) {
  const blogId = req.params.blogId;
  console.log(blogId);
  try {
    const result = await Blog.findById(blogId).populate(
      "createdBy",
      "name profileUrl"
    );
    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: "Blog Not Found" });
    }
    return res.status(200).json({ success: true, blog: result });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}

export async function deleteBlog(req, res) {
  const blogId = req.params.blogId;
  const user = req.user;
  try {
    const blog = await Blog.findOneAndDelete({
      _id: blogId,
      createdBy: user._id,
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found or you are not authorized to delete it.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Blog deleted successfully.",
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}
