import React, { useState, useEffect } from "react";

const TableComponent = () => {
  const [bookingData, setBookingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch bookings from API
    const fetchBookings = async () => {
      try {
        const response = await fetch("https://bookingtable-g9lx.onrender.com/api/book"); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch bookings.");
        }
        const data = await response.json();
        setBookingData(data.bookings); // Update state with fetched bookings
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Delete booking from backend and UI
  const deleteBooking = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/api/book/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete booking.");
      }

      // Update UI by removing the deleted booking
      setBookingData((prevData) => prevData.filter((booking) => booking._id !== id));
      alert("Booking deleted successfully.");
    } catch (err) {
      console.error(err);
      alert("Error deleting booking. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-4">Bookings</h1>

      {/* Table layout for desktop view */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg ">
          <thead>
            <tr className="bg-indigo-300 ">
              <th className="py-2 px-4 border-b">No.</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Contact</th>
              <th className="py-2 px-4 border-b">Guests</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Time</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking, index) => (
              <tr
                key={booking._id}
                className={index % 2 === 0 ? "bg-indigo-100" : ""}
              >
                <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                <td className="py-2 px-4 border-b">{booking.name}</td>
                <td className="py-2 px-4 border-b">{booking.contact}</td>
                <td className="py-2 px-4 border-b text-center">{booking.guests}</td>
                <td className="py-2 px-4 border-b">{booking.date}</td>
                <td className="py-2 px-4 border-b">
                  {booking.selectedSlot}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                    onClick={() => deleteBooking(booking._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stacked layout for mobile view */}
      <div className="block md:hidden mt-4">
        {bookingData.map((booking, index) => (
          <div
            key={booking._id}
            className="border rounded-lg shadow-md mb-4 p-4 bg-white"
          >
            <p className="mb-2">
              <strong>No:</strong> {index + 1}
            </p>
            <p className="mb-2">
              <strong>Name:</strong> {booking.name}
            </p>
            <p className="mb-2">
              <strong>Contact:</strong> {booking.contact}
            </p>
            <p className="mb-2">
              <strong>Guests:</strong> {booking.guests}
            </p>
            <p className="mb-2">
              <strong>Date:</strong> {booking.date}
            </p>
            <p className="mb-2">{booking.selectedSlot}
            </p>
            <button
              className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
              onClick={() => deleteBooking(booking._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableComponent;
