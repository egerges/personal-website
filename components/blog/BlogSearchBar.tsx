"use client";

import React from "react";

export const BlogSearchBar: React.FC = () => {
  return (
    <div className="my-6 max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search blog posts..."
        aria-label="Search blog posts"
        className="w-full rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow"
      />
    </div>
  );
};
