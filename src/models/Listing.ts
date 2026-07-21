import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
  {
    // Host
    hostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Property
    propertyType: {
      type: String,
      required: true,
    },

    placeType: {
      type: String,
      required: true,
    },

    // Address
    address: {
      address: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
    },

    // Basic Details
    basicDetails: {
      guests: {
        type: Number,
        default: 1,
      },
      bedrooms: {
        type: Number,
        default: 1,
      },
      beds: {
        type: Number,
        default: 1,
      },
      bathrooms: {
        type: Number,
        default: 1,
      },
    },

    // Amenities
    amenities: [
      {
        type: String,
      },
    ],

    // Photos (Cloudinary/S3 URLs)
    images: [
      {
        type: String,
      },
    ],

    // Listing Info
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    // Pricing
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    // Draft / Published
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Listing ||
  mongoose.model("Listing", ListingSchema);