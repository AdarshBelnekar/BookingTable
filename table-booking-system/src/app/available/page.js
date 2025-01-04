"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const AvailabilityPage = () => {
  const router = useRouter();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);

  // Fetch booked slots from the backend
  useEffect(() => {
    const fetchBookedSlots = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/book/selected-slots");
        const data = await response.json();
        if (data.selectedSlots) {
          setBookedSlots(data.selectedSlots.map((slot) => slot.selectedSlot));
        }
      } catch (error) {
        console.error("Error fetching booked slots:", error);
      }
    };

    fetchBookedSlots();
  }, []);

  const handleSlotClick = (slot) => {
    // Ignore clicks on booked slots
    if (bookedSlots.includes(slot)) return;

    // Toggle the slot between selected and unselected
    setSelectedSlot((prevSelected) => (prevSelected === slot ? null : slot));
  };

  const handleBook = () => {
    // Save selectedSlot to localStorage
    if (selectedSlot) {
      localStorage.setItem("selectedSlot", selectedSlot);
      // Navigate to /details with selectedSlot as a query parameter
      router.push(`/details?slot=${encodeURIComponent(selectedSlot)}`);
    }
  };

  return (
    <div className="min-h-screen bg-indigo-50 p-6 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-indigo-600 mb-6">Available Slots</h1>

        {/* Tags for Available, Selected, and Booked */}
        <div className="flex justify-center space-x-4 mb-4">
          <span className="px-4 py-2 text-white bg-green-500 rounded-full font-medium">Available</span>
          <span className="px-4 py-2 text-white bg-yellow-500 rounded-full font-medium">Selected</span>
          <span className="px-4 py-2 text-white bg-red-500 rounded-full font-medium">Booked</span>
        </div>

        {/* Time Slot Container */}
        <div className="border border-gray-300 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-center text-gray-800 mb-4">Select Your Slot</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM",
              "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
              "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
              "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM",
              "09:30 PM", "10:00 PM", "10:30 PM"
            ].map((slot, index) => (
              <div
                key={index}
                onClick={() => handleSlotClick(slot)}
                className={`cursor-pointer text-center py-2 rounded-md ${
                  bookedSlots.includes(slot)
                    ? "bg-red-500 text-white cursor-not-allowed"
                    : selectedSlot === slot
                    ? "bg-yellow-500 text-white"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
              >
                {slot}
              </div>
            ))}
          </div>
        </div>

        {/* Display selected slot */}
        {selectedSlot && (
          <div className="mt-6 text-center">
            <p className="text-xl font-semibold text-gray-800">
              You have selected: <span className="text-yellow-500">{selectedSlot}</span>
            </p>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => router.push("/book")}
            className="px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Back
          </button>
          <button
            onClick={handleBook}
            disabled={!selectedSlot}
            className={`px-4 py-2 rounded-lg text-white ${
              selectedSlot
                ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityPage;
