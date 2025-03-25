import React, { useState } from 'react';

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = (e) => {
    setToast(null);
    setTimeout(() => setToast(null), 4000); // Reset after 4s
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#0f172a] to-[#1e293b] text-white flex flex-col">
      
      {/* Header with logo */}
      <header className="flex items-center px-6 py-4 bg-[#0f172a] shadow-md">
        <img src="/unveila-logo.png" alt="Unveila Logo" className="w-16 sm:w-20 h-auto" />
      </header>

      {/* Centered Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-widest mb-2">UNVEILA</h1>
        <h2 className="text-xl text-cyan-400 uppercase font-medium mb-1">
          Illuminating What Matters
        </h2>
        <p className="text-sm text-gray-300 mb-8 tracking-wider">Next-Gen AI Platform</p>

        {/* Form Container */}
        <div className="bg-white bg-opacity-5 backdrop-blur-lg p-6 rounded-xl shadow-lg w-full max-w-sm">
          {submitted ? (
            <p className="text-green-400 text-lg font-medium">Thanks! You're on the waitlist ✨</p>
          ) : (
            <form
              action="https://formspree.io/f/mgvazoaz"
              method="POST"
              onSubmit={(e) => {
                setSubmitted(true);
                handleSubmit(e);
              }}
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
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md font-semibold w-full transition duration-200"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>

        {/* Toasts */}
        {toast && (
          <div
            className={`mt-4 px-4 py-2 rounded text-sm ${
              toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {toast.message}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} Unveila. All rights reserved.
      </footer>
    </div>
  );
}
