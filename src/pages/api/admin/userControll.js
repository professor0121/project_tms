import { connectDB } from "../../../lib/mongodb"; // Make sure this helper is available
import User from "../../../models/User"; // Path to your User model

// Get all users (Admin)
async function getUsers(req, res) {
  try {
    const users = await User.find(); // Optionally, you can filter by role if you need only certain users
    return res.status(200).json({ users });
  } catch (error) {
    console.error("❌ Get Users Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get a single user by ID (Admin)
async function getUserById(req, res) {
  const { id } = req.query;

  try {
    const user = await User.findById(id); // Fetch user by ID
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.error("❌ Get User by ID Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Update a user (Admin)
async function updateUser(req, res) {
  const { id } = req.query;
  const { name, email, bio, role, image } = req.body; // Fields that can be updated

  if (!name || !email) {
    return res.status(400).json({ error: "Please provide all required fields" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, bio, role, image },
      { new: true } // Return the updated document
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("❌ User Update Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Export API handler
export default async function handler(req, res) {
  await connectDB(); // Ensure DB connection before handling requests

  switch (req.method) {
    case "GET":
      if (req.query.id) {
        return getUserById(req, res); // Get user by ID
      } else {
        return getUsers(req, res); // Get all users
      }
    case "PUT":
      return updateUser(req, res); // Update user
    default:
      return res.status(405).json({ error: "Method Not Allowed" });
  }
}
