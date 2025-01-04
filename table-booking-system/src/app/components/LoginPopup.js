
"use client";
import  { useState } from 'react'

const LoginPopup = ({ setShowlogin }) => {
  const [currState, setCurrState] = useState("Login")

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form className="bg-white rounded-lg p-8 w-96 shadow-lg space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">{currState}</h2>
          <img
            onClick={() => setShowlogin(false)}
            src="https://via.placeholder.com/16" // Replace with your close icon
            alt="close"
            className="cursor-pointer w-6 h-6"
          />
        </div>
        
        <div className="space-y-4">
          {currState === "Login" ? <></> :
            <input
              name='name'
              type='text'
              placeholder='Your Name'
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          }
          <input
            name='email'
            type='email'
            placeholder='Type email here'
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            name='password'
            type="password"
            placeholder='Password'
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type='submit'
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all"
        >
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className="flex items-center space-x-2">
          <input type="checkbox" required className="h-4 w-4" />
          <p className="text-sm">By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ?
          <p className="text-sm text-center">
            Create a new account? 
            <span
              onClick={() => setCurrState("Sign Up")}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Click here
            </span>
          </p>
          :
          <p className="text-sm text-center">
            Already have an account? 
            <span
              onClick={() => setCurrState("Login")}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        }
      </form>
    </div>
  )
}

export default LoginPopup
