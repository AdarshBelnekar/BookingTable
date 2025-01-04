"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function BookingForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    date: "",
    time: "12:30 AM",
    guests: 1,
    name: "",
    contact: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Function to check if all required fields are filled
  const checkFormValidity = () => {
    const { date, time, guests, name, contact } = formData;
    setIsFormValid(date && time && guests && name && contact);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save data to localStorage
    localStorage.setItem("bookingData", JSON.stringify(formData));

    // Redirect to the booking page
    router.push("/available");

    if (!isFormValid) {
      setErrorMessage("Please fill all fields before submitting.");
      return;
    }
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGuestSelection = (guestCount) => {
    setFormData({ ...formData, guests: guestCount });
    setIsDropdownOpen(false);
  };

  // Effect to validate the form whenever formData changes
  useEffect(() => {
    checkFormValidity();
  }, [formData]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md space-y-4 md:space-y-0"
    >
      <div className="md:w-1/2 w-full mb-4 md:mb-0">
        <img
          src="./restaurant.avif"
          alt="Restaurant"
          className="w-full h-full object-cover px-4 rounded-sm"
        />
      </div>

      <div className="md:w-1/2 w-full space-y-4">
        <div>
          <p className="text-sm font-light text-black">Please fill all the details</p>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {["12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM"].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
            Guests
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={handleDropdownClick}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {formData.guests} {formData.guests === 1 ? "Guest" : "Guests"}
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-sm max-h-56 overflow-y-auto">
                {Array.from({ length: 40 }, (_, i) => i + 1).map((guestCount) => (
                  <label
                    key={guestCount}
                    className="block text-sm font-medium text-gray-700 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="guests"
                      value={guestCount}
                      checked={formData.guests === guestCount}
                      onChange={() => handleGuestSelection(guestCount)}
                      className="mr-2"
                    />
                    {guestCount} {guestCount === 1 ? "Guest" : "Guests"}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
            Contact
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="flex space-x-4 mt-6">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full ${isFormValid ? "bg-indigo-600" : "bg-gray-400"} text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            Save & Next
          </button>
        </div>
      </div>
    </form>
  );
}
