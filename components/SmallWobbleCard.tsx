/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import React from "react";

export const SmallWobbleCard: React.FC<{
  title: string;
  content: string;
  cta?: string;
}> = ({ title, content, cta }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-6 h-full min-h-[300px] p-6">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>
      <p className="text-sm md:text-base text-neutral-200 leading-relaxed max-w-sm">{content}</p>
      {/* {cta && (
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:scale-105 transition-transform">
          {cta}
        </button>
      )} */}
    </div>
  );
};
