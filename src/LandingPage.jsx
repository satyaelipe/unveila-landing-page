// src/LandingPage.jsx
import React, { useState } from 'react';
import SidebarDrawer from './components/SidebarDrawer';

const sampleQuestions = [
  "drift of all Lambdas in prod",
  "unused EIPs in GCP",
  "cost of CloudWatch in AWS",
  "dependency graph for Azure VMs",
  "show me idle RDS instances"
];

export default function LandingPage() {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleQuerySelect = (value) => {
    setQuery(value);
    setShowDropdown(false);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("Query submitted:", query);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#020617] text-white">
      <SidebarDrawer />

      <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8">
          What do you want to know about your cloud?
        </h1>

        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-3xl"
        >
          <div className="bg-gray-900 border border-gray-700 rounded-md px-4 py-3 flex flex-wrap items-center">
            <input
              type="text"
              className="flex-grow bg-transparent outline-none text-white text-sm sm:text-base placeholder-gray-400"
              placeholder="Ask anything..."
              value={query}
              onChange={handleInputChange}
              onFocus={() => setShowDropdown(true)}
            />
            <span className="text-xs sm:text-sm text-gray-400 italic ml-auto hidden sm:inline-block">
              across AWS | GCP | Azure
            </span>
            <button
              type="submit"
              className="ml-3 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
              aria-label="Submit query"
            >
              ➔
            </button>
          </div>

          {showDropdown && (
            <ul className="absolute z-20 mt-1 w-full bg-black border border-gray-700 rounded-md text-left">
              {sampleQuestions.map((item, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                  onClick={() => handleQuerySelect(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>

      <footer className="absolute bottom-4 w-full text-center text-xs text-gray-400">
        <span className="inline-block align-middle">💡</span> © 2025 Unveila. All rights reserved.
      </footer>
    </div>
  );
}
