import mongoose from "mongoose";

const TourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Tour title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Tour description is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price can't be negative"],
    },
    duration: {
      type: String, // e.g. "3 days", "1 week"
      required: true,
    },
    image: {
      type: String, // URL or image path
      default: "",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // or "Planner" if you have separate roles
      required: true,
    },
    availableDates: [
      {
        type: Date,
      },
    ],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

 

const Tour = mongoose.models.Tour || mongoose.model("Tour", TourSchema);
export default Tour;
