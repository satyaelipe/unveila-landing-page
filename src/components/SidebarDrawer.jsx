// src/components/SidebarDrawer.jsx
import React, { useState } from 'react';
import { Home, Puzzle, LogIn, UserPlus } from 'lucide-react';

export default function SidebarDrawer({ setView }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleNavClick = (view) => {
    setView(view);
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button */}
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
        className={`fixed top-0 right-0 h-screen w-64 bg-[#0d0f24] text-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <img src="/unveila-logo.png" alt="Unveila Logo" className="w-8 h-8" />
            <span className="font-semibold text-lg">Unveila</span>
          </div>
          <button
            onClick={toggleDrawer}
            className="text-gray-400 hover:text-white text-lg"
            aria-label="Close Sidebar"
          >
            ▶
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col justify-between h-full pb-6">
          <div className="p-4 space-y-6">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <Home size={18} />
              <span>Home</span>
            </button>

            <button
              onClick={() => handleNavClick('features')}
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <Puzzle size={18} />
              <span>Features</span>
            </button>
          </div>

          {/* Footer buttons */}
          <div className="p-4 border-t border-gray-700 space-y-2">
            <button
              onClick={() => handleNavClick('login')}
              className="flex items-center space-x-2 hover:text-blue-400"
            >
              <LogIn size={18} />
              <span>Login</span>
            </button>
            <button
              onClick={() => handleNavClick('signup')}
              className="flex items-center space-x-2 hover:text-blue-400"
            >
              <UserPlus size={18} />
              <span>Sign Up</span>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
