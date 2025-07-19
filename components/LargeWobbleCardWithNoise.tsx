/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import React from "react";
import Image from "next/image";

export const LargeWobbleCardWithNoise: React.FC<{
  title: string;
  content: string;
  image: string;
  cta?: string;
}> = ({ title, content, image, cta }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-full min-h-[300px] md:min-h-[280px] gap-6">
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            {title}
        </h2>
        <p className="text-base md:text-lg text-neutral-200 leading-relaxed max-w-2xl">{content}</p>
        {/* {cta && (
            <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-transform">
            {cta}
            </button>
        )} */}
      </div>
      <div className="flex-shrink-0 w-full md:w-auto">
        <Image
          src={image}
          alt={title}
          width={450}
          height={280}
          className="object-cover rounded-lg shadow-lg w-full md:w-[450px] h-[220px] md:h-[280px]"
        />
      </div>
    </div>
  );
};
