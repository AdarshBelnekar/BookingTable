const express = require('express');
const Booking = require('../models/Booking'); // Import Booking model

const router = express.Router();

// POST: Create a new booking
router.post('/', async (req, res) => {
  const { date, guests, name, contact,selectedSlot } = req.body;

  if (!date || !guests || !name || !contact || !selectedSlot) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  try {
    const booking = new Booking({ date, guests, name, contact,selectedSlot });
    const savedBooking = await booking.save();
    res.status(201).json({ message: 'Booking saved successfully!', booking: savedBooking });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// GET: Fetch all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json({ bookings });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// DELETE: Remove a booking by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Booking.findByIdAndDelete(id);
    res.json({ message: 'Booking deleted successfully!' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// GET: Fetch booked slots
router.get('/selected-slots', async (req, res) => {
  try {
    // Fetch only the `selectedSlot` field from all bookings
    const selectedSlots = await Booking.find({}, 'selectedSlot');

    // If no slots found, return an empty array
    if (!selectedSlots || selectedSlots.length === 0) {
      return res.status(404).json({ message: 'No bookings found!' });
    }

    // Send the list of selected slots
    res.json({ selectedSlots });
  } catch (error) {
    console.error('Error fetching selected slots:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});



module.exports = router;
