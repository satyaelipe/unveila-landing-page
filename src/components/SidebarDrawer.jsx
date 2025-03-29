// src/components/SidebarDrawer.jsx
import React, { useState } from 'react';
import { Home, Info, Puzzle } from 'lucide-react';

export default function SidebarDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleDrawer}
        className="fixed top-1/2 right-0 z-40 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-l shadow transition-all duration-300"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? '>|' : '|<'}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out z-30 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b flex items-center space-x-2">
          <img src="/unveila-logo.png" alt="Unveila Logo" className="w-8 h-8" />
          <span className="font-semibold text-lg">Unveila</span>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          <a href="#home" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600">
            <Home size={18} />
            <span>Home</span>
          </a>
          <a href="#why-unveila" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600">
            <Info size={18} />
            <span>Why Unveila?</span>
          </a>
          <a href="#what-we-solve" className="flex items-center space-x-3 text-gray-800 hover:text-blue-600">
            <Puzzle size={18} />
            <span>What We Solve</span>
          </a>
        </nav>
      </div>

      {/* Mini Sidebar when closed */}
      {!isOpen && (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-20 space-y-4 p-2 bg-transparent">
          <button
            onClick={toggleDrawer}
            className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-l shadow"
            aria-label="Open Sidebar"
          >
            {'|<'}
          </button>
        </div>
      )}
    </>
  );
}
