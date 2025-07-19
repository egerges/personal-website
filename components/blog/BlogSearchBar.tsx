"use client";

import React, { useState, useEffect, useRef } from "react";

interface BlogSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  suggestions: string[];
}

export const BlogSearchBar: React.FC<BlogSearchBarProps> = ({ 
  searchQuery, 
  onSearchChange,
  suggestions 
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  return (
    <div ref={searchRef} className="my-8 max-w-2xl mx-auto relative">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        placeholder="Search blog posts..."
        aria-label="Search blog posts"
        className="w-full rounded-2xl px-6 py-4 text-gray-800 bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-xl pr-12 placeholder-gray-600 transition-all duration-300"
      />
      {searchQuery && (
        <button
          onClick={() => {
            onSearchChange("");
            setShowSuggestions(false);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 transition-colors duration-300 bg-white/20 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/40"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
      
      {showSuggestions && searchQuery && filteredSuggestions.length > 0 && (
        <div className="absolute z-10 w-full bg-white/90 backdrop-blur-xl mt-2 rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              className="w-full text-left px-6 py-3 hover:bg-white/50 transition-all duration-300 text-gray-800 border-b border-gray-200/30 last:border-b-0 hover:text-blue-600 font-medium"
              onClick={() => {
                onSearchChange(suggestion);
                setShowSuggestions(false);
              }}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
