"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Role = "vet" | "owner";

interface CTASectionProps {
  role: Role;
}

export default function CTASection({ role }: CTASectionProps) {
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
      id="cta-section"
      data-section="cta"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 px-4 py-12 md:py-20 shadow-2xl relative"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="max-w-4xl mx-auto text-center text-white space-y-6 md:space-y-8 relative z-10">
        <div className="inline-block p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
          <ExternalLink className="h-10 w-10 text-white" />
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 drop-shadow-lg">
          Help Shape the Future of{" "}
          {role === "vet" ? "Veterinary Clinics" : "Pet Owner Care"}.
        </h2>

        <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-md">
          Your insights matter.{" "}
          {role === "vet"
            ? "Tell us about the challenges you face in running a clinic"
            : "Share your experience navigating pet care"}{" "}
          by participating in our survey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 md:pt-8">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg group shadow-2xl hover:shadow-white/25 transition-all duration-300 border-2 border-white/20"
          >
            <Link
              href={config[role].ctaLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
              {config[role].ctaText}
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="pt-8 md:pt-12 border-t border-blue-400/50 mt-8 md:mt-16">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 text-blue-100 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Mail className="h-4 w-4 md:h-5 md:w-5" />
              <Link
                href={`mailto:markuskl@stanford.edu?subject=${encodeURIComponent(
                  config[role].emailSubject,
                )}`}
              >
                <span>markuskl@stanford.edu</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Users className="h-4 w-4 md:h-5 md:w-5" />
              <span>Stanford University Research</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
