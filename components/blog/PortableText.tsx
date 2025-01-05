"use client";

import React from "react";
import { PortableText } from "@portabletext/react";

export const PortableTextRenderer: React.FC<{ value: any }> = ({ value }) => {
  return (
    <PortableText
      value={value}
      components={{
        block: {
          h1: ({ children }) => <h1 className="text-3xl font-bold mt-8">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6">{children}</h2>,
          p: ({ children }) => <p className="mt-4">{children}</p>,
        },
        list: {
          bullet: ({ children }) => <ul className="list-disc ml-5 mt-2">{children}</ul>,
          number: ({ children }) => <ol className="list-decimal ml-5 mt-2">{children}</ol>,
        },
      }}
    />
  );
};
