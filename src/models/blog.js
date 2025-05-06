import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [100, "Title must be at most 100 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      minlength: [10, "Content must be at least 10 characters"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model that will be the author
      required: [true, "Author is required"],
    },
    image: {
      type: String, // URL to an image (optional, but useful for blog post images)
      required: false,
    },
    tags: {
      type: [String], // Array of tags for the blog post (e.g., ["Technology", "Travel"])
      required: false,
    },
    publishedDate: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft", // Default status of the blog post
    },
  },
  { timestamps: true } // This will automatically add createdAt and updatedAt fields
);

// Middleware to update the `updatedAt` field whenever the document is modified
BlogSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the model
const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
