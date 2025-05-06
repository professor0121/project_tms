import { connectDB } from "../../../lib/mongodb"; // Ensure you have this helper to connect to DB
import Blog from "../../../models/blog"; // Adjust the path if necessary

// Create a new blog post
async function createBlog(req, res) {
  const { title, content, author, image, tags, status } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ error: "Please provide all required fields" });
  }

  try {
    const newBlog = new Blog({
      title,
      content,
      author,
      image,
      tags,
      status: status || "draft", // Default status is "draft" if not provided
    });

    await newBlog.save();
    return res.status(201).json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    console.error("❌ Blog Create Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get all blog posts
async function getBlogs(req, res) {
  try {
    const blogs = await Blog.find().populate("author");
    return res.status(200).json({ blogs });
  } catch (error) {
    console.error("❌ Get Blogs Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get a single blog post by ID
async function getBlogById(req, res) {
  const { id } = req.query;

  try {
    const blog = await Blog.findById(id).populate("author");
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    return res.status(200).json({ blog });
  } catch (error) {
    console.error("❌ Get Blog by ID Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Update an existing blog post
async function updateBlog(req, res) {
  const { id } = req.query;
  const { title, content, image, tags, status } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Please provide all required fields" });
  }

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, image, tags, status },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    return res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    console.error("❌ Blog Update Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Delete a blog post
async function deleteBlog(req, res) {
  const { id } = req.query;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    return res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("❌ Blog Delete Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case "POST":
      return createBlog(req, res); // Create Blog
    case "GET":
      if (req.query.id) {
        return getBlogById(req, res); // Get Single Blog
      } else {
        return getBlogs(req, res); // Get All Blogs
      }
    case "PUT":
      return updateBlog(req, res); // Update Blog
    case "DELETE":
      return deleteBlog(req, res); // Delete Blog
    default:
      return res.status(405).json({ error: "Method Not Allowed" });
  }
}
