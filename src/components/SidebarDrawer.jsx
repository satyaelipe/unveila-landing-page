// src/components/SidebarDrawer.jsx
import React from 'react';
import { Home, Info, Puzzle } from 'lucide-react';

export default function SidebarDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0a0a1a] text-white shadow-xl transform transition-transform duration-300 ease-in-out z-30
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 border-b border-gray-700 flex items-center space-x-2">
          <img src="/unveila-logo.png" alt="Unveila Logo" className="w-8 h-8" />
          <span className="font-semibold text-lg">Unveila</span>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          <a
            href="#home"
            onClick={onClose}
            className="flex items-center space-x-3 text-gray-300 hover:text-white"
          >
            <Home size={18} />
            <span>Home</span>
          </a>
          <a
            href="#why-unveila"
            onClick={onClose}
            className="flex items-center space-x-3 text-gray-300 hover:text-white"
          >
            <Info size={18} />
            <span>Why Unveila?</span>
          </a>
          <a
            href="#what-we-solve"
            onClick={onClose}
            className="flex items-center space-x-3 text-gray-300 hover:text-white"
          >
            <Puzzle size={18} />
            <span>What We Solve</span>
          </a>
        </nav>
      </div>
    </>
  );
}
