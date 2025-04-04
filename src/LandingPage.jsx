import React, { useState, useEffect, useRef } from 'react';
import SidebarDrawer from './components/SidebarDrawer';
import GlobalModal from './components/GlobalModal';

export default function LandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState('home');
  const [modalData, setModalData] = useState({ title: null, content: null });

  const observerRef = useRef(null);
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Listen for global modal events
  useEffect(() => {
    const handleShowModal = (event) => {
      setModalData(event.detail); // { title, content }
    };

    window.addEventListener('showGlobalModal', handleShowModal);
    return () => window.removeEventListener('showGlobalModal', handleShowModal);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.fade-section');
    sections.forEach((sec) => observerRef.current.observe(sec));
    return () => observerRef.current.disconnect();
  }, []);

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      e.preventDefault();
      console.log('Submitting query:', query);
      setShowSuggestions(false);
    }
  };

  const exampleQueries = [
    "drift of all Lambdas in prod",
    "unused EIPs in GCP",
    "cost of CloudWatch in AWS",
    "dependency graph for Azure VMs",
    "show me idle RDS instances"
  ];

  const renderView = () => {
    switch (view) {
      case 'home':
        return (
          <main className="flex-grow flex flex-col items-center justify-center px-6 text-center fade-section">
            <h1 className="text-4xl md:text-5xl font-normal tracking-wide mb-6">
              What do you want to know about your cloud?
            </h1>
            <div className="relative w-full max-w-3xl">
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onKeyDown={handleSearchSubmit}
                rows={2}
                placeholder="Ask anything..."
                className="w-full px-4 py-4 pr-14 text-white bg-[#2c3e50] rounded-md placeholder-gray-400 text-lg shadow-xl resize-none overflow-hidden"
              />
              <div className="absolute bottom-2 right-20 text-xs text-gray-400 italic animate-pulse">
                across AWS | GCP | Azure
              </div>
              <button
                onClick={handleSearchSubmit}
                className="absolute right-2 bottom-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                aria-label="Submit Query"
              >
                →
              </button>
              {showSuggestions && (
                <ul className="absolute mt-2 w-full bg-white text-gray-800 rounded-md shadow-lg z-10">
                  {exampleQueries.map((text, idx) => (
                    <li
                      key={idx}
                      onMouseDown={() => setQuery(text)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-left"
                    >
                      {text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </main>
        );
      case 'features':
        return <div className="p-8 text-center text-lg fade-section">🧩 Discover Unveila's features: Drift Detection, Dependency Graph, and more.</div>;
      case 'login':
        return <div className="p-8 text-center text-lg fade-section">🔐 Log in to your Unveila workspace.</div>;
      case 'signup':
        return <div className="p-8 text-center text-lg fade-section">✉️ Sign up to get early access to Unveila.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col scroll-smooth">
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed bottom-6 right-6 z-40 text-white bg-[#3d5165] hover:bg-[#4e6175] p-3 rounded-full shadow"
          aria-label="Open Sidebar"
        >
          ◀
        </button>
      )}

      {renderView()}

      <SidebarDrawer
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onSectionSelect={(section) => {
          setView(section);
          setSidebarOpen(false);
        }}
      />

      <footer className="text-center text-sm text-gray-500 py-4">
        <span role="img" aria-label="lightbulb">💡</span> © {new Date().getFullYear()} Unveila. All rights reserved.
      </footer>

      {/* Global Modal renderer */}
      <GlobalModal
        title={modalData.title}
        content={modalData.content}
        onClose={() => setModalData({ title: null, content: null })}
      />

      <style>{`
        .fade-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-section {
          opacity: 1 !important;
          transform: translateY(0px) !important;
        }
      `}</style>
    </div>
  );
}
