import { connectDB } from "../../../../lib/mongodb"; // Ensure DB connection
import Package from "../../../../models/package"; // Adjust the path as necessary

// Create a new package
async function createPackage(req, res) {
  const { name, description, price, duration, image, destination, activities, created_by, startDate, endDate } = req.body;

  if (!name || !description || !price || !duration || !destination || !created_by || !startDate || !endDate) {
    return res.status(400).json({ error: "Please provide all required fields" });
  }

  try {
    const newPackage = new Package({
      name,
      description,
      price,
      duration,
      image,
      destination,
      activities,
      created_by,
      startDate,
      endDate,
    });

    await newPackage.save();
    return res.status(201).json({ message: "Package created successfully", package: newPackage });
  } catch (error) {
    console.error("❌ Package Create Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get all packages
async function getPackages(req, res) {
  try {
    const packages = await Package.find().populate("created_by", "name email");
    return res.status(200).json({ packages });
  } catch (error) {
    console.error("❌ Get Packages Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get a specific package by ID
async function getPackageById(req, res) {
  const { id } = req.query;

  try {
    const package_p = await Package.findById(id).populate("created_by", "name email");
    if (!package_p) {
      return res.status(404).json({ error: "Package not found" });
    }
    return res.status(200).json({ package_p });
  } catch (error) {
    console.error("❌ Get Package by ID Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Update an existing package
async function updatePackage(req, res) {
  const { id } = req.query;
  const { name, description, price, duration, image, destination, activities, startDate, endDate } = req.body;

  if (!name || !description || !price || !duration || !destination || !startDate || !endDate) {
    return res.status(400).json({ error: "Please provide all required fields" });
  }

  try {
    const updatedPackage = await Package.findByIdAndUpdate(
      id,
      { name, description, price, duration, image, destination, activities, startDate, endDate },
      { new: true }
    );
    if (!updatedPackage) {
      return res.status(404).json({ error: "Package not found" });
    }
    return res.status(200).json({ message: "Package updated successfully", package: updatedPackage });
  } catch (error) {
    console.error("❌ Package Update Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Delete a package
async function deletePackage(req, res) {
  const { id } = req.query;

  try {
    const deletedPackage = await Package.findByIdAndDelete(id);
    if (!deletedPackage) {
      return res.status(404).json({ error: "Package not found" });
    }
    return res.status(200).json({ message: "Package deleted successfully" });
  } catch (error) {
    console.error("❌ Package Delete Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case "POST":
      return createPackage(req, res); // Create
    case "GET":
      if (req.query.id) {
        return getPackageById(req, res); // Get by ID
      } else {
        return getPackages(req, res); // Get all
      }
    case "PUT":
      return updatePackage(req, res); // Update
    case "DELETE":
      return deletePackage(req, res); // Delete
    default:
      return res.status(405).json({ error: "Method Not Allowed" });
  }
}
