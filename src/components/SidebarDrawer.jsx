// SidebarDrawer.jsx
import React, { useState } from 'react';
import { Home, Puzzle, LogIn, UserPlus } from 'lucide-react';

export default function SidebarDrawer({ setView }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const handleNavClick = (section) => {
    setView(section);
    setIsOpen(false);
  };

  const features = [
    { name: 'Drift Detection', description: 'Detect infrastructure drift between AWS and Terraform code.' },
    { name: 'Cloud Dependency Graph', description: 'Visualize resource relationships across your cloud.' },
    { name: 'Cost Estimation', description: 'Get estimated spend for your resources in real time.' },
    { name: 'Security Posture', description: 'Audit and improve your security configuration.' }
  ];

  return (
    <>
      {!isOpen && (
        <button
          onClick={toggleDrawer}
          className="fixed bottom-6 right-6 z-40 text-white bg-[#0d0f24] hover:bg-[#1c2236] p-3 rounded-full shadow"
          aria-label="Open Sidebar"
        >
          ◀
        </button>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0d0f24] text-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            {/* <img src="/qloudseek-q-icon.png" alt="QloudSeek Logo" className="w-8 h-8" /> */}
            <span className="font-semibold text-lg">QloudSeek</span>
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
        <div className="flex flex-col justify-between h-[calc(100%-64px)]">
          {/* Top Nav */}
          <div className="p-4 space-y-6">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <Home size={18} />
              <span>Home</span>
            </button>

            <div>
              <div className="flex items-center space-x-3 text-blue-300 font-semibold mb-2">
                <Puzzle size={18} />
                <span>Features</span>
              </div>
              <div className="pl-6 space-y-3">
                {features.map((feature) => (
                  <button
                    key={feature.name}
                    onClick={() => setActiveFeature(feature)}
                    className="block text-left hover:text-blue-400"
                  >
                    {feature.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="p-4 space-y-3 border-t border-gray-700">
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
        </div>
      </div>

      {/* Feature Modal */}
      {activeFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-[#0d0f24] text-white p-6 rounded-lg w-96 relative shadow-xl">
            <button
              onClick={() => setActiveFeature(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-2">{activeFeature.name}</h3>
            <p className="text-sm text-gray-300">{activeFeature.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
