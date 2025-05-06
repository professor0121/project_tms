import { connectDB } from "../../../lib/mongodb"; // Helper to connect to DB
import Order from "../../../models/order"; // Adjust the path as necessary

// Create a new order
async function createOrder(req, res) {
  const { customer, package_p, tour, numberOfPeople, totalAmount, travelDates, paymentMethod, specialRequests } = req.body;

  if (!customer || !package_p || !numberOfPeople || !totalAmount || !travelDates || !paymentMethod) {
    return res.status(400).json({ error: "Please provide all required fields" });
  } 

  try {
    const newOrder = new Order({
      customer,
      package_p,
      tour,
      numberOfPeople,
      totalAmount,
      travelDates,
      paymentStatus: "pending",
      paymentMethod,
      bookingStatus: "pending",
      specialRequests,
    });

    await newOrder.save();
    return res.status(201).json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    console.error("❌ Order Create Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get all orders
async function getOrders(req, res) {
  try {
    const orders = await Order.find().populate("customer").populate("package").populate("tour");
    return res.status(200).json({ orders });
  } catch (error) {
    console.error("❌ Get Orders Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get a specific order by ID
async function getOrderById(req, res) {
  const { id } = req.query;

  try {
    const order = await Order.findById(id).populate("customer").populate("package").populate("tour");
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    return res.status(200).json({ order });
  } catch (error) {
    console.error("❌ Get Order by ID Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Update an existing order
async function updateOrder(req, res) {
  const { id } = req.query;
  const { bookingStatus, paymentStatus, specialRequests } = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { bookingStatus, paymentStatus, specialRequests, updatedAt: Date.now() },
      { new: true }
    );
    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }
    return res.status(200).json({ message: "Order updated successfully", order: updatedOrder });
  } catch (error) {
    console.error("❌ Order Update Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

// Delete an order
async function deleteOrder(req, res) {
  const { id } = req.query;

  try {
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }
    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error("❌ Order Delete Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export default async function handler(req, res) {
  await connectDB();

  switch (req.method) {
    case "POST":
      return createOrder(req, res); // Create
    case "GET":
      if (req.query.id) {
        return getOrderById(req, res); // Get by ID
      } else {
        return getOrders(req, res); // Get all
      }
    case "PUT":
      return updateOrder(req, res); // Update
    case "DELETE":
      return deleteOrder(req, res); // Delete
    default:
      return res.status(405).json({ error: "Method Not Allowed" });
  }
}
