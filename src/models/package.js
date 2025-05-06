// models/Package.js

import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Package name is required"],
      minlength: [3, "Package name must be at least 3 characters"],
      maxlength: [50, "Package name must be at most 50 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [10, "Description must be at least 10 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be less than 0"],
    },
    duration: {
      type: String, // E.g., "5 days", "1 week", etc.
      required: [true, "Duration is required"],
    },
    image: {
      type: String, // URL to an image
      required: [false], // Optional, but can be used to display images for the package
    },
    destination: {
      type: String,
      required: [true, "Destination is required"],
    },
    activities: {
      type: [String], // An array of strings for activities included in the package
      required: [false],
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model for the creator
      required: [true, "Creator is required"],
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date,
      required: [true, "End date is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Package = mongoose.models.Package || mongoose.model("Package", PackageSchema);

export default Package;
