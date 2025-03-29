// src/LandingPage.jsx
import React, { useState } from 'react';
import SidebarDrawer from './components/SidebarDrawer';

const suggestions = [
  "drift of all Lambdas in prod",
  "unused EIPs in GCP",
  "cost of CloudWatch in AWS",
  "dependency graph for Azure VMs",
  "show me idle RDS instances"
];

export default function LandingPage() {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (text) => {
    setQuery(text);
    setShowSuggestions(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Query submitted:", query);
    setShowSuggestions(false);
  };

  return (
    <div className="min-h-screen bg-[#0D0D1D] text-white flex flex-col items-center justify-center relative px-4">
      <SidebarDrawer />

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        What do you want to know about your cloud?
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl relative"
        autoComplete="off"
      >
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Ask anything..."
            className="w-full px-4 py-4 pr-20 rounded-md bg-white text-black placeholder-gray-500 text-base sm:text-lg shadow-md"
            style={{ minHeight: '56px' }}
          />

          {/* Animated cloud provider text */}
          <span className="absolute bottom-2 right-14 text-xs italic text-gray-400 animate-pulse pointer-events-none">
            across AWS | GCP | Azure
          </span>

          {/* Submit button */}
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded shadow"
          >
            →
          </button>
        </div>

        {/* Suggestions dropdown */}
        {showSuggestions && (
          <ul className="absolute z-10 mt-2 w-full bg-white text-black shadow-md rounded-md overflow-hidden">
            {suggestions.map((sugg, idx) => (
              <li
                key={idx}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => handleSuggestionClick(sugg)}
              >
                {sugg}
              </li>
            ))}
          </ul>
        )}
      </form>

      <footer className="absolute bottom-6 text-sm text-gray-400">
        <span role="img" aria-label="bulb">💡</span> © 2025 Unveila. All rights reserved.
      </footer>
    </div>
  );
}
