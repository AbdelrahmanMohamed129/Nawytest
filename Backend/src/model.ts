const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apartmentSchema = mongoose.Schema(
  {
    name: {
        type: String,
        default: ""
    },
    size: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    location: {
        type: String,
        default: ""
    },
    bedrooms: {
        type: Number,
        default: 0
    },
    bathrooms: {
        type: Number,
        default: 0
    },
    images: [{
        type: String,
    }]
    
  },
  { timestamps: { createdAt: "created_at" } }
);


const Group = mongoose.model("apartment", apartmentSchema);
module.exports = Group;
