"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function CustomerDetails({ customer }) {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md space-y-4">
      <div className="text-lg font-bold text-indigo-600">Customer Details</div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <div className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700">
          Customer Name
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Contact</label>
        <div className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700">
          Contact
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Date</label>
        <div className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700">
          date
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">From Time</label>
        <div className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700">
          time
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">To Time</label>
        <div className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700">
          to time
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Guests</label>
        <div className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700">
          guests
        </div>
      </div>

      <div className="flex space-x-4 mt-6">
        <button
          type="button"
          onClick={() => router.push('/home')}
          className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => router.push('/edit')}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
