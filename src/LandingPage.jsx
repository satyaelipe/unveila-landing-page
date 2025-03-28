import React, { useState, useEffect, useRef } from 'react';
import ResponsiveNavbar from './ResponsiveNavbar';
import SidebarDrawer from './components/SidebarDrawer';

export default function LandingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          const yOffset = hash === '#home' ? -160 : -96;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home'];
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        if (el) {
          return {
            id,
            offset: el.getBoundingClientRect().top - 100,
          };
        }
        return null;
      }).filter(Boolean);
      const current = offsets.find((s) => s.offset >= 0) || offsets[offsets.length - 1];
      if (current) setActiveSection(current.id);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    if (e.key === 'Enter') {
      e.preventDefault();
      const query = e.target.value;
      console.log('Submitting query:', query);
      // TODO: Replace console.log with backend call
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#0d0f24] text-white flex flex-col scroll-smooth">
      <ResponsiveNavbar activeSection={activeSection} />

      {/* Toggle Button Bottom-Right */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed bottom-6 right-6 z-40 text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-l shadow"
          aria-label="Open Sidebar"
        >
          |&lt;-
        </button>
      )}

      <main id="home" className="flex-grow flex flex-col items-center justify-center px-6 text-center fade-section">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-4">What do you want to know about your cloud?</h1>

        {/* Central Search Box */}
        <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow-xl p-6 w-full max-w-xl">
          <input
            type="text"
            placeholder="Ask anything… e.g. 'drift of all Lambdas in prod'"
            className="w-full px-4 py-4 text-black rounded-md placeholder-gray-600 text-lg"
            onKeyDown={handleSearchSubmit}
          />
        </div>
      </main>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-16 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg"
          aria-label="Back to top"
        >↑</button>
      )}

      <SidebarDrawer isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

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
