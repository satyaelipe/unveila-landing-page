// src/LandingPage.jsx

import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white flex flex-col items-center justify-center px-6">
      <img
        src="/unveila-logo.png"
        alt="Unveila Logo"
        className="w-40 h-40 mb-6 drop-shadow-lg"
      />
      <h1 className="text-5xl font-bold tracking-widest text-white">UNVEILA</h1>
      <h2 className="text-xl text-blue-300 mt-2 uppercase tracking-wider font-medium">
        Illuminating What Matters
      </h2>
      <p className="text-md text-gray-400 mt-1 mb-6 uppercase tracking-wide">
        Next-Gen AI Platform
      </p>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="w-full max-w-sm"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email to stay updated"
          className="w-full px-4 py-3 text-black rounded-md mb-4"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold w-full transition duration-200"
        >
          Notify Me
        </button>
      </form>
    </div>
  );
}
