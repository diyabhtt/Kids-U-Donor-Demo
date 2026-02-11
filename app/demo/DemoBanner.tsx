"use client";

import React from "react";

export default function DemoBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-amber-400 text-slate-900 text-sm font-semibold px-4 py-2 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
        <span aria-hidden>⚠️</span>
        <span>Demo Mode – Sample data only. Changes are not saved.</span>
      </div>
    </div>
  );
}
