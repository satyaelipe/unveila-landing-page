// src/components/SidebarDrawer.jsx
import React, { useState } from 'react';
import { Info, Puzzle, Tool, Lock, BookOpen } from 'lucide-react';

export default function SidebarDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button - Only show when drawer is closed */}
      {!isOpen && (
        <button
          onClick={toggleDrawer}
          className="fixed bottom-6 right-6 z-40 text-white bg-[#3d5165] hover:bg-[#4e6175] p-3 rounded-full shadow"
          aria-label="Open Sidebar"
        >
          ◀
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0a0a1a] text-white shadow-xl transform transition-transform duration-300 ease-in-out z-30
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 border-b flex items-center space-x-2">
          <img src="/unveila-logo.png" alt="Unveila Logo" className="w-8 h-8" />
          <span className="font-semibold text-lg">Unveila</span>

          {/* Close Button - Only when open */}
          <button
            onClick={toggleDrawer}
            className="ml-auto text-white hover:text-gray-300 text-xl"
            aria-label="Close Sidebar"
          >
            ▶
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-6">
          {/* About Group */}
          <div>
            <div className="flex items-center space-x-2 mb-2 text-gray-400 uppercase text-xs tracking-wider">
              <BookOpen size={16} />
              <span>About</span>
            </div>
            <div className="flex flex-col space-y-2 ml-4">
              <a href="#why-unveila" className="hover:text-blue-500">Why Unveila?</a>
              <a href="#what-we-solve" className="hover:text-blue-500">What We Solve</a>
            </div>
          </div>

          {/* Features Group */}
          <div>
            <div className="flex items-center space-x-2 mb-2 text-gray-400 uppercase text-xs tracking-wider">
              <Tool size={16} />
              <span>Features</span>
            </div>
            <div className="flex flex-col space-y-2 ml-4">
              <a href="#drift-detection" className="hover:text-blue-500">Drift Detection</a>
              <a href="#dependency-graph" className="hover:text-blue-500">Dependency Graph</a>
              <a href="#cost-insights" className="hover:text-blue-500">Cost Insights</a>
              <a href="#cloud-inventory" className="hover:text-blue-500">Cloud Inventory</a>
            </div>
          </div>

          {/* Auth Group */}
          <div>
            <div className="flex items-center space-x-2 mb-2 text-gray-400 uppercase text-xs tracking-wider">
              <Lock size={16} />
              <span>Access</span>
            </div>
            <div className="ml-4">
              <a href="#sign-up" className="hover:text-blue-500">Sign Up / Sign In</a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
