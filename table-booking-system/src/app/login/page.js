"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPopup = ({ setShowlogin }) => {

const router =useRouter();

  const [currState, setCurrState] = useState("Login");
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = currState === "Login" ? "/api/login" : "/api/signup";
    
    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`${currState} successful:`, data);
        setShowlogin(false); // Close the popup on success
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "An error occurred.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Failed to connect to the server.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-8 w-96 shadow-lg space-y-4"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">{currState}</h2>
          <button
          type="button"
            onClick={() => router.push('/')}
           
            className="cursor-pointer w-6 h-6"
          >X</button>
        </div>

        <div className="space-y-4">
          {currState === "Sign Up" && (
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Type email here"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all"
        >
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className="flex items-center space-x-2">
          <input type="checkbox" required className="h-4 w-4" />
          <p className="text-sm">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>

        {currState === "Login" ? (
          <p className="text-sm text-center">
            Create a new account?{" "}
            <span
              onClick={() => setCurrState("Sign Up")}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-sm text-center">
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
