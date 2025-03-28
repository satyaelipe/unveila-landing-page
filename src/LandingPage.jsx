import React, { useState, useEffect, useRef } from 'react';
import ResponsiveNavbar from './ResponsiveNavbar';

export default function LandingPage() {
  const [showToast, setShowToast] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observerRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mgvazoaz', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setShowToast('success');
        form.reset();
        setTimeout(() => setShowToast(null), 4000);
      } else {
        setShowToast('error');
        setTimeout(() => setShowToast(null), 4000);
      }
    } catch (err) {
      setShowToast('error');
      setTimeout(() => setShowToast(null), 4000);
    }
  };

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          const yOffset = hash === "#home" ? -160 : -96;
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
      const sections = ['home', 'why-unveila', 'what-we-solve'];
      const offsets = sections.map(id => {
        const el = document.getElementById(id);
        if (el) {
          return {
            id,
            offset: el.getBoundingClientRect().top - 100,
          };
        }
        return null;
      }).filter(Boolean);
      const current = offsets.find(s => s.offset >= 0) || offsets[offsets.length - 1];
      if (current) setActiveSection(current.id);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.fade-section');
    sections.forEach(sec => observerRef.current.observe(sec));

    return () => observerRef.current.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#0d0f24] text-white flex flex-col scroll-smooth">
      <ResponsiveNavbar activeSection={activeSection} />

      <main id="home" className="flex-grow flex flex-col items-center justify-center px-6 text-center fade-section">
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest">UNVEILA</h1>
        <h2 className="text-xl text-blue-400 mt-2 uppercase tracking-wide font-medium">Illuminating What Matters</h2>
        <p className="text-sm text-gray-400 mt-1 mb-8 uppercase tracking-wider font-light">Next-Gen AI Platform</p>

        {showToast === 'success' ? (
          <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow-xl p-6 w-full max-w-md">
            <p className="text-green-400 text-center text-lg">Thanks! You're on the waitlist ✨</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg rounded-lg shadow-xl p-6 w-full max-w-md flex flex-col space-y-4">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email to stay updated"
              className="w-full px-4 py-3 text-black rounded-md placeholder-gray-600"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold w-full transition duration-200"
            >
              Notify Me
            </button>
          </form>
        )}

        {showToast === 'error' && (
          <div className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md shadow-lg transition-opacity">
            ❌ Something went wrong. Please try again.
          </div>
        )}
      </main>

      <div className="h-8 bg-gradient-to-b from-[#0d0f24] to-gray-100" />

      <section id="why-unveila" className="fade-section scroll-mt-24 bg-gray-100 text-gray-800 py-16 px-4 sm:px-8">...</section>
      <div className="h-4 bg-gradient-to-b from-gray-100 to-white" />
      <section id="what-we-solve" className="fade-section scroll-mt-24 bg-white text-gray-800 py-16 px-4 sm:px-8">...</section>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg"
          aria-label="Back to top"
        >↑</button>
      )}

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
