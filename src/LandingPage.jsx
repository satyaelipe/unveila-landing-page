import React, { useState, useEffect, useRef } from 'react';
import SidebarDrawer from './components/SidebarDrawer';

export default function LandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState('home');
  const observerRef = useRef(null);
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

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
          <main id="home" className="flex-grow flex flex-col items-center justify-center px-6 text-center fade-section">
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
        return <div className="p-8 text-center text-lg fade-section">🔍 Explore Unveila’s Features — from Drift Detection to Dependency Graphs, all in one place.</div>;
      case 'login':
        return <div className="p-8 text-center text-lg fade-section">🔐 Log in securely to access your cloud insights.</div>;
      case 'signup':
        return <div className="p-8 text-center text-lg fade-section">📬 Create your Unveila account and stay notified.</div>;
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

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-16 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

      <SidebarDrawer isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} setView={setView} />

      <footer className="text-center text-sm text-gray-500 py-4">
        <span role="img" aria-label="lightbulb">💡</span> © {new Date().getFullYear()} Unveila. All rights reserved.
      </footer>

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
