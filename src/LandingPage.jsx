import React, { useState, useEffect } from 'react';

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(null);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSubmit = (e) => {
    setSubmitted(true);
    setShowToast('success');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#0d0f24] text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6">
        <img src="/unveila-logo.png" alt="Unveila Logo" className="w-24 h-auto" />
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest">UNVEILA</h1>
        <h2 className="text-xl text-blue-400 mt-2 uppercase tracking-wide font-medium">
          Illuminating What Matters
        </h2>
        <p className="text-sm text-gray-400 mt-1 mb-8 uppercase tracking-wider font-light">
          Next-Gen AI Platform
        </p>

        {/* Form / Thank-you */}
        <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow-xl p-6 w-full max-w-md">
          {submitted ? (
            <p className="text-green-400 text-center text-lg">
              Thanks! You're on the waitlist ✨
            </p>
          ) : (
            <form
              action="https://formspree.io/f/mgvazoaz"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email to stay updated"
                className="w-full px-4 py-3 text-black rounded-md placeholder-gray-600"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold w-full transition duration-200"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>

        {/* Toast */}
        {showToast === 'success' && (
          <div className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg transition-opacity">
            ✅ Successfully submitted!
          </div>
        )}
      </main>

      {/* Why Unveila Section */}
      <section className="bg-gray-100 text-gray-800 py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Unveila?</h2>
          <p className="text-lg mb-12">
            Unveila helps DevOps and SecOps teams stay ahead of drift, cost, and cloud chaos. Built for AWS, Azure, and GCP — one AI-powered platform for all.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 text-left">
            <div>
              <h3 className="font-semibold text-xl mb-2">🚨 Stop Infrastructure Drift</h3>
              <p>Detect and auto-remediate changes before they lead to outages or compliance issues.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">💰 Cross-Cloud Cost Optimization</h3>
              <p>Get real-time savings recommendations across AWS, GCP, and Azure.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">🛡️ Unified Security Visibility</h3>
              <p>One dashboard for misconfigurations, IAM, security groups, and compliance automation.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">🤖 AI-Powered SRE Copilot</h3>
              <p>Reduce alert fatigue with smart root cause analysis, ChatOps integration, and runbook automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Unveila. All rights reserved.
      </footer>

      {/* Fade-in animation */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
