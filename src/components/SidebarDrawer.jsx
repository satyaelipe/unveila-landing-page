// src/components/SidebarDrawer.jsx
import React, { useState } from 'react';
import { Info, Puzzle, Lock, LogIn, UserPlus, Layers3 } from 'lucide-react';

export default function SidebarDrawer({ onSectionSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleNavClick = (section) => {
    onSectionSelect(section);
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
        className={`fixed top-0 right-0 h-full w-64 bg-[#0d0f24] text-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
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

        <nav className="flex flex-col justify-between h-full">
          <div className="p-4 space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-gray-400 uppercase text-xs mb-2">
                <Info size={16} />
                <span>About</span>
              </div>
              <div className="ml-5 space-y-2">
                <button onClick={() => handleNavClick('why-unveila')} className="block text-left hover:text-blue-400">
                  Why Unveila?
                </button>
                <button onClick={() => handleNavClick('what-we-solve')} className="block text-left hover:text-blue-400">
                  What We Solve
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 text-gray-400 uppercase text-xs mb-2">
                <Puzzle size={16} />
                <span>Features</span>
              </div>
              <div className="ml-5 space-y-2">
                <button onClick={() => handleNavClick('drift-detection')} className="block text-left hover:text-blue-400">
                  Drift Detection
                </button>
                <button onClick={() => handleNavClick('dependency-graph')} className="block text-left hover:text-blue-400">
                  Dependency Graph
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 text-gray-400 uppercase text-xs mb-2">
                <Lock size={16} />
                <span>Access</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-700 space-y-3">
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
