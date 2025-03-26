import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Ensure `lucide-react` is installed or switch to another icon lib

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a1a]/80 backdrop-blur-md px-6 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/unveila-logo.png" alt="Unveila Logo" className="w-24 h-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#why-unveila" className="hover:text-white transition">Why Unveila?</a>
          <a href="#what-we-solve" className="hover:text-white transition">What We Solve</a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button onClick={handleToggle} className="text-gray-300 hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden mt-4 px-4 space-y-3 text-sm text-gray-300">
          <a href="#home" className="block hover:text-white" onClick={handleNavClick}>Home</a>
          <a href="#why-unveila" className="block hover:text-white" onClick={handleNavClick}>Why Unveila?</a>
          <a href="#what-we-solve" className="block hover:text-white" onClick={handleNavClick}>What We Solve</a>
        </div>
      )}
    </header>
  );
}
