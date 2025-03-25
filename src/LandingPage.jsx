import React, { useState } from 'react';

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showMessage, setShowMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch('https://formspree.io/f/mgvazoaz', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true);
          setShowMessage({ type: 'success', text: "Thanks! You're on the waitlist ✨" });
          setTimeout(() => setShowMessage(null), 4000);
          form.reset();
        } else {
          throw new Error('Submission failed');
        }
      })
      .catch(() => {
        setShowMessage({ type: 'error', text: 'Oops! Something went wrong ❌' });
        setTimeout(() => setShowMessage(null), 4000);
      });
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white flex flex-col">
      {/* Top Bar with Logo */}
      <header className="flex justify-between items-center px-6 py-4">
        <img src="/unveila-logo.png" alt="Unveila Logo" className="w-12 h-12" />
        {/* Optionally add nav or login button here */}
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-widest mb-2">UNVEILA</h1>
        <h2 className="text-xl sm:text-2xl text-blue-300 uppercase tracking-wide mb-1">
          Illuminating What Matters
        </h2>
        <p className="text-md text-gray-400 uppercase tracking-wide mb-6">
          Next-Gen AI Platform
        </p>

        {/* Form */}
        {!submitted && (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm flex flex-col items-center"
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
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-semibold w-full transition duration-200"
            >
              Notify Me
            </button>
          </form>
        )}

        {/* Message Toast */}
        {showMessage && (
          <div
            className={`mt-4 px-6 py-3 rounded-md text-white text-sm font-medium ${
              showMessage.type === 'success' ? 'bg-green-500' : 'bg-red-600'
            }`}
          >
            {showMessage.text}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-6">
        © 2025 Unveila. All rights reserved.
      </footer>
    </div>
  );
}
