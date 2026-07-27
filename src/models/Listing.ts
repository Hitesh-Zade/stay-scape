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
    listingId: {
      type: String,
      default: "",
    },

    // Property
    propertyType: {
      type: String,
      default: "",
    },

    placeType: {
      type: String,
     default: "",
    },

    // Address
    address: {
      address: {
        type: String,
       default: "",
      },
      street: {
        type: String,
        default: "",
      },
      city: {
        type: String,
         default: "",
      },
      state: {
        type: String,
       default: "",
      },
      country: {
        type: String,
         default: "",
      },
      pincode: {
        type: String,
        default: "",
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
     // Listing Info
  coverImage: {
    type: String,
  },
    images: [
      {
        type: String,
      },
    ],

    // Listing Info
    title: {
      type: String,
      default: "",
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    // Pricing
    price: {
      type: Number,
     default: "",
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