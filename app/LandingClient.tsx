"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import HeroSection from "@/components/sections/HeroSection";
import TeamSection from "@/components/sections/TeamSection";
import CTASection from "@/components/sections/CTASection";
import { FloatingCTA } from "@/components/floating-cta";

type Role = "vet" | "owner";

export default function LandingClient() {
  const params = useSearchParams();
  const router = useRouter();
  const paramRole = params.get("role");
  const initialRole: Role = paramRole === "owner" ? "owner" : "vet";

  const [role, setRole] = useState<Role>(initialRole);

  useEffect(() => {
    if (params.get("role") !== role) {
      router.replace(`/?role=${role}`, { scroll: false});
    }
  }, [role, params, router]);

  return (
    <>
      <div
        className="h-screen overflow-y-auto overflow-x-hidden scroll-smooth"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <HeroSection role={role} setRole={setRole} />
        <TeamSection/>
        <CTASection role={role} />
      </div>
      <FloatingCTA />
    </>
  );
}
