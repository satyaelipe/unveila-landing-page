
import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center">
        <img
          src="/unveila-logo.png"
          alt="Unveila Logo"
          className="w-32 h-32 mb-6"
        />
        <h1 className="text-4xl font-bold tracking-wide">UNVEILA</h1>
        <h2 className="text-lg text-blue-300 mt-2 uppercase tracking-widest">
          Illuminating What Matters
        </h2>
        <p className="text-sm text-gray-400 mt-1 mb-8 uppercase tracking-wider">
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
            className="w-full px-4 py-2 text-black rounded-md mb-4"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium w-full"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}
