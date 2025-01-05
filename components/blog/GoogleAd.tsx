"use client";

import React from "react";

export const GoogleAd: React.FC<{ adSlot: string }> = ({ adSlot }) => {
  return (
    <div
      className="my-4 mx-auto max-w-screen-lg"
      role="complementary"
      aria-label="Advertisement"
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1234567890123456"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};
