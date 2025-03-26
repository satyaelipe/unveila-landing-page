import React, { useState, useEffect } from 'react';
import ResponsiveNavbar from './ResponsiveNavbar';

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSubmit = (e) => {
    setSubmitted(true);
    setShowToast('success');
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
            offset: el.getBoundingClientRect().top - 100
          };
        }
        return null;
      }).filter(Boolean);

      const current = offsets.find(s => s.offset >= 0) || offsets[offsets.length - 1];
      if (current) setActiveSection(current.id);

      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] to-[#0d0f24] text-white flex flex-col scroll-smooth">
      <ResponsiveNavbar activeSection={activeSection} />

      <main id="home" className="flex-grow flex flex-col items-center justify-center px-6 fade-in-section text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest">UNVEILA</h1>
        <h2 className="text-xl text-blue-400 mt-2 uppercase tracking-wide font-medium">
          Illuminating What Matters
        </h2>
        <p className="text-sm text-gray-400 mt-1 mb-8 uppercase tracking-wider font-light">
          Next-Gen AI Platform
        </p>

        <div className="bg-white/5 backdrop-blur-lg rounded-lg shadow-xl p-6 w-full max-w-md">
          {submitted ? (
            <p className="text-green-400 text-center text-lg">
              Thanks! You're on the waitlist ✨
            </p>
          ) : (
            <form
              action="https://formspree.io/f/mgvazoaz"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4"
            >
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
        </div>

        {showToast === 'success' && (
          <div className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg transition-opacity">
            ✅ Successfully submitted!
          </div>
        )}
      </main>

      <div className="h-8 bg-gradient-to-b from-[#0d0f24] to-gray-100"></div>

      <section id="why-unveila" className="scroll-mt-24 bg-gray-100 text-gray-800 py-16 px-4 sm:px-8 fade-in-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Unveila?</h2>
          <p className="text-lg mb-12">
            Unveila helps DevOps and SecOps teams stay ahead of drift, cost, and cloud chaos. Built for AWS, Azure, and GCP — one AI-powered platform for all.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 text-left">
            <div>
              <h3 className="font-semibold text-xl mb-2">🚨 Stop Infrastructure Drift</h3>
              <p>Detect and auto-remediate changes before they lead to outages or compliance issues.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">💰 Cross-Cloud Cost Optimization</h3>
              <p>Get real-time savings recommendations across AWS, GCP, and Azure.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">🛡️ Unified Security Visibility</h3>
              <p>One dashboard for misconfigurations, IAM, security groups, and compliance automation.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">🤖 AI-Powered SRE Copilot</h3>
              <p>Reduce alert fatigue with smart root cause analysis, ChatOps integration, and runbook automation.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-4 bg-gradient-to-b from-gray-100 to-white" />

      <section id="what-we-solve" className="scroll-mt-24 bg-white text-gray-800 py-16 px-4 sm:px-8 fade-in-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">What We Solve</h2>
          <p className="text-lg mb-12 text-gray-700">
            Cloud environments are dynamic — and complexity grows fast. Unveila is built to tame that complexity.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 text-left">
            <div>
              <h3 className="font-semibold text-xl mb-2">😵‍💫 Uncontrolled Resource Sprawl</h3>
              <p className="text-gray-600">
                Struggling to track what’s deployed across accounts, regions, and clouds? You’re not alone. We help you map and manage your infra in minutes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">🌀 Config Drift + Misalignment</h3>
              <p className="text-gray-600">
                Teams apply hotfixes, Terraform gets skipped, and compliance drifts silently. We detect and auto-correct it before it causes issues.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">🧾 Ballooning Cloud Bills</h3>
              <p className="text-gray-600">
                Unused EBS volumes? Orphaned snapshots? Forgotten ELBs? We continuously surface idle resources and give deletion-safe insights.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2">🛑 Security Fatigue</h3>
              <p className="text-gray-600">
                Noisy alerts. IAM misconfigurations. Zero-day scramble. Unveila brings unified SecOps visibility and intelligent prioritization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-4">
        <span role="img" aria-label="lightbulb">💡</span> © {new Date().getFullYear()} Unveila. All rights reserved.
      </footer>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300"
          aria-label="Back to Top"
        >
          ↑
        </button>
      )}

      <style>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                }
              });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in-section').forEach(section => {
              observer.observe(section);
            });
          });
        `
      }} />
    </div>
  );
}
