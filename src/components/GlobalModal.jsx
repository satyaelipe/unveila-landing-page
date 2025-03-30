// GlobalModal.jsx
import React from 'react';

export default function GlobalModal({ title, content, onClose }) {
  if (!title || !content) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0c0c0c] text-white border border-gray-700 rounded-lg shadow-lg p-6 w-[90%] max-w-xl z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
      </div>
      <pre className="text-sm whitespace-pre-wrap text-gray-300">{content}</pre>
    </div>
  );
}
