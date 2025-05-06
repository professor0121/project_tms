import {connectDB} from "../../../../lib/mongodb"; // Ensure you have this helper to connect to DB
import Tour from "../../../../models/Tour"; // Adjust the path as necessary

// Create a new tour
async function createTour(req, res) {
  const { title, description, location, price, duration, image, createdBy, availableDates } = req.body;

  if (!title || !description || !location || !price || !duration || !createdBy) {
    return res.status(400).json({ error: "Please provide all required fields" });
  }

  try {
    const newTour = new Tour({
      title,
      description,
      location,
      price,
      duration,
      image,
      createdBy,
      availableDates,
    });

    await newTour.save();
    return res.status(201).json({ message: "Tour created successfully", tour: newTour });
  } catch (error) {
    console.error("❌ Tour Create Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get all tours
async function getTours(req, res) {
  try {
    const tours = await Tour.find().populate("createdBy");
    return res.status(200).json({ tours });
  } catch (error) {
    console.error("❌ Get Tours Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get a specific tour by ID
async function getTourById(req, res) {
  const { id } = req.query;

  try {
    const tour = await Tour.findById(id).populate("createdBy");
    if (!tour) {
      return res.status(404).json({ error: "Tour not found" });
    }
    return res.status(200).json({ tour });
  } catch (error) {
    console.error("❌ Get Tour by ID Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Update an existing tour
async function updateTour(req, res) {
  const { id } = req.query;
  const { title, description, location, price, duration, image, availableDates } = req.body;

  if (!title || !description || !location || !price || !duration) {
    return res.status(400).json({ error: "Please provide all required fields" });
  }

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      { title, description, location, price, duration, image, availableDates },
      { new: true }
    );
    if (!updatedTour) {
      return res.status(404).json({ error: "Tour not found" });
    }
    return res.status(200).json({ message: "Tour updated successfully", tour: updatedTour });
  } catch (error) {
    console.error("❌ Tour Update Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Delete a tour
async function deleteTour(req, res) {
  const { id } = req.query;

  try {
    const deletedTour = await Tour.findByIdAndDelete(id);
    if (!deletedTour) {
      return res.status(404).json({ error: "Tour not found" });
    }
    return res.status(200).json({ message: "Tour deleted successfully" });
  } catch (error) {
    console.error("❌ Tour Delete Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case "POST":
      return createTour(req, res); // Create
    case "GET":
      if (req.query.id) {
        return getTourById(req, res); // Get by ID
      } else {
        return getTours(req, res); // Get all
      }
    case "PUT":
      return updateTour(req, res); // Update
    case "DELETE":
      return deleteTour(req, res); // Delete
    default:
      return res.status(405).json({ error: "Method Not Allowed" });
  }
}
