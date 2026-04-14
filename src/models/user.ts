import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    // Basic Info
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    // Auth
    password: {
      type: String,
      default: null, // null for Google users
    },

    provider: {
      type: String,
      enum: ["credentials", "google"],
      default: "credentials",
    },

    // Profile
    image: {
      type: String, // Google profile image
      default: null,
    },

    // Role (future use)
    role: {
      type: String,
      enum: ["user", "host", "admin"],
      default: "user",
    },

    // Airbnb-like fields
    isVerified: {
      type: Boolean,
      default: false,
    },

    // Activity tracking
    lastLogin: {
      type: Date,
    },

    // Optional profile details
    phone: {
      type: String,
      default: null,
    },

    bio: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);