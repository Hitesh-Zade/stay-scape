"use client";

import { useState } from "react";

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-black text-white rounded-md"
      >
        Open Drawer
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <a href="#" className="block hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block hover:text-blue-500">
            About
          </a>
          <a href="#" className="block hover:text-blue-500">
            Services
          </a>
          <a href="#" className="block hover:text-blue-500">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}