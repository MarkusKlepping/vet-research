"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Role = "vet" | "owner";

interface HeroSectionProps {
  role: Role;
  setRole: (r: Role) => void;
}

export default function HeroSection({ role, setRole }: HeroSectionProps) {
  const config: Record<
    Role,
    {
      headingSpan: string;
      description: string;
      ctaText: string;
      ctaLink: string;
      emailSubject: string;
    }
  > = {
    vet: {
      headingSpan: "Veterinary Clinics",
      description:
        "A dedicated team of Stanford students researching problems that modern veterinary clinics face.",
      ctaText: "Take Our Veterinarian Survey",
      ctaLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSeEyVlx1JGJfxlYctz2D0MmIErmre5k3m8TvnJ9W7bjkKacvA/viewform",
      emailSubject: "Veterinarian research",
    },
    owner: {
      headingSpan: "Pet Owner Experience",
      description:
        "A dedicated team of Stanford students researching challenges pet owners face in veterinary care.",
      ctaText: "Take Our Pet Owner Survey",
      ctaLink: "https://forms.gle/ciZR4Kb7XXLvUg3V6",
      emailSubject: "Pet Owner research",
    },
  };

  return (
    <section
      data-section="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-8 relative border-blue-200 shadow-lg"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        <Badge
          variant="outline"
          className="text-blue-600 border-blue-300 bg-blue-50 text-sm md:text-base shadow-sm"
        >
          Stanford University Research
        </Badge>

        <h1 className="text-6xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
          Research on
          <span className="text-blue-600 block">
            {config[role].headingSpan}
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          {config[role].description}
        </p>

        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() => setRole("vet")}
            className={`px-4 py-2 rounded-full border-2 transition-all duration-200 ${
              role === "vet"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50"
            }`}
          >
            Veterinarian
          </button>
          <button
            onClick={() => setRole("owner")}
            className={`px-4 py-2 rounded-full border-2 transition-all duration-200 ${
              role === "owner"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50"
            }`}
          >
            Pet Owner
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg group shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
          >
            <Link
              href={config[role].ctaLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {config[role].ctaText}
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
