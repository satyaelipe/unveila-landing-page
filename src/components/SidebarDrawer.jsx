import React from 'react';

export default function SidebarDrawer({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-white text-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b bg-gray-100">
        <h3 className="text-lg font-semibold">Explore Features</h3>
        <button
          onClick={onClose}
          aria-label="Close Sidebar"
          className="text-gray-700 hover:text-gray-900 text-xl font-bold"
        >
          →
        </button>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <h4 className="font-medium">🔍 Drift Detection</h4>
          <p className="text-sm text-gray-600">Detect infra drift across AWS, GCP, Azure in real-time.</p>
        </div>
        <div>
          <h4 className="font-medium">🌐 Dependency Graph</h4>
          <p className="text-sm text-gray-600">Visualize cross-cloud resource relationships.</p>
        </div>
        <div>
          <h4 className="font-medium">⚡ Unused Resources</h4>
          <p className="text-sm text-gray-600">Instantly find cost-saving opportunities.</p>
        </div>
        <div>
          <h4 className="font-medium">📩 Notify Me</h4>
          <p className="text-sm text-gray-600">Stay updated with early access + product news.</p>
        </div>
      </div>
    </div>
  );
}
