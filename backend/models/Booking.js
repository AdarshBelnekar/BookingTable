const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  guests: { type: Number, required: true },
  contact: { type: String, required: true },
  selectedSlot: { type: String, required: true }, // Fixed typo here
}, {
  timestamps: true
});

module.exports = mongoose.model("Booking", BookingSchema);
