// SidebarDrawer.jsx — now using GlobalModal and Vercel-safe syntax
import React, { useState } from 'react';
import { Home, Puzzle, LogIn, UserPlus } from 'lucide-react';

export default function SidebarDrawer({ setView }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const handleNavClick = (section) => {
    setView(section);
    setIsOpen(false);
  };

  const homeContent = {
    "What’s QloudSeek": `QloudSeek is a next-generation AI-driven cloud intelligence platform that helps teams understand, monitor, and optimize their multi-cloud environments.
It provides deep insights, visualizations, and proactive automation to detect drift, optimize cost, and enhance security — across AWS, Azure, GCP, and more.`,

    "What We Solve": `QloudSeek addresses the biggest pain points in cloud operations:

• Drift & Configuration Chaos — Prevent and fix untracked infra changes.
• Cross-Cloud Cost Inefficiency — Optimize resource placement for best savings.
• On-Call Fatigue — Faster root cause analysis, alert insights, and runbook automation.
• Security Blind Spots — Surface IAM misconfigurations, open ports, and compliance issues.
• Dependency Complexity — Map and visualize how your resources talk across clouds.
• Scattered Threat Detection — Correlate and respond to threats across AWS, Azure, and GCP.`
  };

  const features = {
    "Drift Detection": "Detect infrastructure drift between AWS and Terraform code.",
    "Cloud Dependency Graph": "Visualize how resources depend on each other across cloud environments.",
    "Cost Estimation": "Get a quick view of estimated monthly spend across your infrastructure.",
    "Security Posture": "Analyze and improve your cloud security posture using real-time signals."
  };

  const showGlobalModal = ({ title, content }) => {
    const event = new CustomEvent('showGlobalModal', {
      detail: { title, content },
    });
    window.dispatchEvent(event);
  };

  return (
    <>
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
        className={
          'fixed top-0 right-0 h-full w-64 bg-[#0c0c0c] text-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ' +
          (isOpen ? 'translate-x-0' : 'translate-x-full')
        }
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
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
          <div className="p-4 space-y-4">
            <div>
              <div className="flex items-center space-x-3 text-blue-300">
                <Home size={18} />
                <span>Home</span>
              </div>
              <div className="ml-6 space-y-2 mt-2">
                {Object.keys(homeContent).map((item) => (
                  <button
                    key={item}
                    onClick={() => showGlobalModal({ title: item, content: homeContent[item] })}
                    className="hover:text-blue-400"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-3 text-blue-300">
                <Puzzle size={18} />
                <span>Features</span>
              </div>
              <div className="ml-6 space-y-2 mt-2">
                {Object.keys(features).map((feature) => (
                  <button
                    key={feature}
                    onClick={() => showGlobalModal({ title: feature, content: features[feature] })}
                    className="hover:text-blue-400"
                  >
                    {feature}
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
    </>
  );
}
