"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookingPage() {
  const router = useRouter();

  // State for form data, error messages, and success status
  const [formData, setFormData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Fetch data from localStorage
    const storedBookingData = localStorage.getItem("bookingData");
    const storedSlotData = localStorage.getItem("selectedSlot");

    const mergedData = {
      ...JSON.parse(storedBookingData || "{}"),
      selectedSlot: storedSlotData || null,
    };

    setFormData(mergedData);
  }, []);

  if (!formData) return <div>Loading...</div>;

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://bookingtable-g9lx.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Booking saved:", data);

        // Mark submission as successful
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      setErrorMessage("Failed to connect to the server.");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-400">
          <i className="text-black px-4 fa-solid fa-receipt"></i>
          Booking Receipt
        </h1>
        <div className="space-y-4">
          <p className="text-lg">
            <strong>Name:</strong> {formData.name}
          </p>
          <p className="text-lg">
            <strong>Date:</strong> {formData.date}
          </p>
          <p className="text-lg">
            <strong>Guests:</strong> {formData.guests}
          </p>
          <p className="text-lg">
            <strong>Contact Number:</strong> {formData.contact}
          </p>
          <p className="text-lg">
            <strong>Time:</strong>  {formData.selectedSlot || "Not Selected"}
          </p>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          {!isSubmitted && (
            <button
              onClick={handleSubmit} // Use onClick for the button
              type="button"
              className="w-full bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Confirm Booking
            </button>
          )}
          {isSubmitted && (
            <div className="text-center mt-4">
              <div className="bg-green-100 text-green-700 p-4 rounded-md mb-4">
                Booking successfully completed!
              </div>
              <button
                onClick={() => router.push("/")}
                type="button"
                className="bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-green-700"
              >
                 Go To Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
