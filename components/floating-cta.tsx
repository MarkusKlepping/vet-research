"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FloatingCTA() {
  return (
    <Button
      asChild
      size="lg"
      className={`
        fixed bottom-4 right-4 z-50 flex items-center gap-2
        bg-blue-600 hover:bg-blue-700 text-white group
        transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5
        px-4 py-2 text-sm md:px-6 md:py-3 md:text-base
      `}
    >
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSeEyVlx1JGJfxlYctz2D0MmIErmre5k3m8TvnJ9W7bjkKacvA/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Survey
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}
