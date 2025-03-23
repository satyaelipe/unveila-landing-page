import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e1a] to-[#1c2233] text-white flex flex-col items-center justify-center px-4 py-16 font-sans">
      <div className="flex flex-col items-center">
        <img
          src="/unveila-logo.png"
          alt="Unveila Logo"
          className="w-48 h-48 mb-6 drop-shadow-lg"
        />
        <h1 className="text-5xl font-extrabold tracking-wider text-white">UNVEILA</h1>
        <h2 className="text-xl text-blue-300 mt-3 uppercase tracking-widest">
          Illuminating What Matters
        </h2>
        <p className="text-sm text-gray-400 mt-2 mb-10 tracking-wider">
          Next-Gen AI Platform
        </p>

        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email to stay updated"
            className="w-full px-4 py-3 text-black rounded-md mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold w-full transition-all"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}
