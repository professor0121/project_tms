import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters'],
        maxlength: [30, 'Name must be at most 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must have at least 6 characters'],
        select: false // Hide password in queries
    },
  
}, { timestamps: true });
AdminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

/**
 * 🔑 Compare Password
 */
AdminSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

/**
 * 🔑 Generate JWT Token
 */
AdminSchema.methods.generateAuthToken = function () {
    return jwt.sign(
        { id: this._id, email: this.email, role: this.role, image: this.image },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
};

// Prevent multiple model registration
    const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);
export default Admin;
