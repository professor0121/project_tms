import mongoose from "mongoose";

// Order Schema for Tourism Booking (e.g., Tour or Package Booking)
const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming User model is available for customers
      required: true,
    },
    package: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package", // Assuming Package model is available
      required: true,
    },
    tour: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour", // Assuming Tour model is available
      required: false,
    },
    numberOfPeople: {
      type: Number,
      required: true,
      min: 1,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    bookingDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    travelDates: {
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["credit_card", "paypal", "bank_transfer"],
      required: true,
    },
    bookingStatus: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    specialRequests: {
      type: String,
      required: false,
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

// Create Order model
const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;
