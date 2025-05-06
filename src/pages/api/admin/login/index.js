import { connectDB } from "../../../../lib/mongodb";
import Admin from "../../../../models/admin";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await connectDB();
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Fetch admin with password field explicitly
    const admin = await Admin.findOne({ email }).select("+password");
    if (!admin) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate JWT
    const token = admin.generateAuthToken();

    // Remove password before sending response
    const { password: _, ...adminData } = admin.toObject();

    return res.status(200).json({
      message: "Admin login successful",
      token,
      admin: adminData
    });

  } catch (error) {
    console.error("❌ Admin Login Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
