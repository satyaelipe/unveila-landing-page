import React, { useState, useEffect } from 'react';

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (submitted || error) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
        setSubmitted(false);
        setError(false);
      }, 4000); // auto-clear after 4s
      return () => clearTimeout(timer);
    }
  }, [submitted, error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mgvazoaz', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white flex flex-col items-center justify-center px-6 relative">
      {/* Logo and Titles */}
      <img src="/unveila-logo.png" alt="Unveila Logo" className="w-40 h-40 mb-6 drop-shadow-lg" />
      <h1 className="text-5xl font-bold tracking-widest text-white">UNVEILA</h1>
      <h2 className="text-xl text-blue-300 mt-2 uppercase tracking-wider font-medium">
        Illuminating What Matters
      </h2>
      <p className="text-md text-gray-400 mt-1 mb-6 uppercase tracking-wide">Next-Gen AI Platform</p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
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

      {/* Toast Message */}
      {showToast && (
        <div
          className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-md shadow-lg transition-all duration-300
            ${submitted ? 'bg-green-600' : 'bg-red-600'}
          `}
        >
          <p className="text-white font-medium">
            {submitted ? "Thanks! You're on the waitlist ✨" : 'Oops! Something went wrong ❌'}
          </p>
        </div>
      )}
    </div>
  );
}
