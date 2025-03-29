// src/components/SidebarDrawer.jsx
import React, { useState } from 'react';
import { Info, Puzzle, Wrench, User, NotebookPen } from 'lucide-react';

export default function SidebarDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0a0a1a] text-white shadow-xl transform transition-transform duration-300 ease-in-out z-30
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header with logo and close button */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/unveila-logo.png" alt="Unveila Logo" className="w-8 h-8" />
            <span className="font-semibold text-lg">Unveila</span>
          </div>
          <button
            onClick={onClose}
            className="text-white text-lg bg-[#2c3e50] hover:bg-[#3d5165] p-1 rounded-full"
            aria-label="Close Sidebar"
          >
            ▶
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-6">

          {/* About Section */}
          <div>
            <h3 className="text-sm uppercase text-gray-400 mb-2">About</h3>
            <a href="#why-unveila" className="flex items-center space-x-3 text-gray-300 hover:text-white">
              <Info size={18} />
              <span>Why Unveila?</span>
            </a>
            <a href="#what-we-solve" className="flex items-center space-x-3 mt-2 text-gray-300 hover:text-white">
              <Puzzle size={18} />
              <span>What We Solve</span>
            </a>
          </div>

          {/* Features Section */}
          <div>
            <h3 className="text-sm uppercase text-gray-400 mb-2">Features</h3>
            <a href="#drift-detection" className="flex items-center space-x-3 text-gray-300 hover:text-white">
              <Wrench size={18} />
              <span>Drift Detection</span>
            </a>
            <a href="#dependency-graph" className="flex items-center space-x-3 mt-2 text-gray-300 hover:text-white">
              <NotebookPen size={18} />
              <span>Dependency Graph</span>
            </a>
          </div>

          {/* Auth Section */}
          <div>
            <h3 className="text-sm uppercase text-gray-400 mb-2">Access</h3>
            <a href="#notify-me" className="flex items-center space-x-3 text-gray-300 hover:text-white">
              <User size={18} />
              <span>Sign In / Sign Up</span>
            </a>
          </div>

        </nav>
      </div>
    </>
  );
}
