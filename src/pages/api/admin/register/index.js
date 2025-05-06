import { connectDB } from "../../../../lib/mongodb";
import admin from "../../../../models/admin";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await connectDB();

    // Static admin details
    const name = "Super Admin";
    const email = "admin@example.com";
    const password = "admin123"; // You should hash this in real cases
  

    // Check if admin already exists
    const existingAdmin = await admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    // Create and save static admin user
    const newAdmin = new admin({ name, email, password});
    await newAdmin.save();

    return res.status(201).json({ message: "Static admin registered successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
