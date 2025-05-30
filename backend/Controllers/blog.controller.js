import { Blog } from "../Models/blog.model.js";

export async function add(req, res) {
  const { title, description, content, createdId, createdName, dateString } =
    req.body;

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

    const post = new Blog({
      title,
      description,
      content,
      createdId,
      createdName,
      dateString,
    });

    const result = await post.save();
    console.log(result);

    return res.status(200).json({ success: true, blog: result });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}

export async function all(req, res) {
  const { id, count } = req.body;

  try {
    if (!id || !count) {
      throw new Error("All fields are required");
    }

    const result = await Blog.find({ createdId: { $ne: id } })
      .limit(Number(count) || 20)
      .sort({ createdAt: 1 });

    return res.status(200).json({ success: true, blogs: result });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}

export async function userBlogs(req, res) {
  const { id } = req.body;

  try {
    if (!id) {
      throw new Error("All fields are required");
    }

    const result = await Blog.find({ createdId: id }).sort({ createdAt: 1 });

    return res.status(200).json({ success: true, blogs: result });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}
