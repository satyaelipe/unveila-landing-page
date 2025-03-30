// Updated SidebarDrawer.jsx with Home modal items
import React, { useState } from 'react';
import { Home, Puzzle, LogIn, UserPlus } from 'lucide-react';

export default function SidebarDrawer({ setView }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDialog, setActiveDialog] = useState(null);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const handleNavClick = (section) => {
    setView(section);
    setIsOpen(false);
  };

  const homeContent = {
    "What’s QloudSeek": `QloudSeek is a next-generation AI-driven cloud intelligence platform that helps teams understand, monitor, and optimize their multi-cloud environments.\nIt provides deep insights, visualizations, and proactive automation to detect drift, optimize cost, and enhance security — across AWS, Azure, GCP, and more.`,

    "What We Solve": `QloudSeek addresses the biggest pain points in cloud operations:\n\n• Drift & Configuration Chaos — Prevent and fix untracked infra changes.\n• Cross-Cloud Cost Inefficiency — Optimize resource placement for best savings.\n• On-Call Fatigue — Faster root cause analysis, alert insights, and runbook automation.\n• Security Blind Spots — Surface IAM misconfigurations, open ports, and compliance issues.\n• Dependency Complexity — Map and visualize how your resources talk across clouds.\n• Scattered Threat Detection — Correlate and respond to threats across AWS, Azure, and GCP.`
  };

  const features = {
    "Drift Detection": "Detect infrastructure drift between AWS and Terraform code.",
    "Cloud Dependency Graph": "Visualize how resources depend on each other across cloud environments.",
    "Cost Estimation": "Get a quick view of estimated monthly spend across your infrastructure.",
    "Security Posture": "Analyze and improve your cloud security posture using real-time signals."
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
        className={`fixed top-0 right-0 h-full w-64 bg-[#0c0c0c] text-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
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
                    onClick={() => setActiveDialog({ title: item, content: homeContent[item] })}
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
                    onClick={() => setActiveDialog({ title: feature, content: features[feature] })}
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

        {/* Dialog */}
        {activeDialog && (
          <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0c0c0c] text-white border border-gray-700 rounded-lg shadow-lg p-6 w-[90%] max-w-xl z-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">{activeDialog.title}</h2>
              <button onClick={() => setActiveDialog(null)} className="text-gray-400 hover:text-white">✕</button>
            </div>
            <pre className="text-sm whitespace-pre-wrap text-gray-300">{activeDialog.content}</pre>
          </div>
        )}
      </div>
    </>
  );
}
