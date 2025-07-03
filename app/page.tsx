import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import { FloatingCTA } from "@/components/floating-cta";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <div
        className="h-screen overflow-y-auto overflow-x-hidden scroll-smooth"
        style={{ scrollSnapType: "y mandatory" }}
      >
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
              <span className="text-blue-600 block">Veterinary Clinics</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              A dedicated team of Stanford students researching problems that
              modern veterinary clinics face.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg group shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeEyVlx1JGJfxlYctz2D0MmIErmre5k3m8TvnJ9W7bjkKacvA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Take Our Research Survey
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          data-section="team"
          className="bg-gradient-to-br from-blue-50 to-blue-100 px-4 border-b-4 border-blue-300 shadow-lg relative pb-[20vh]"
          style={{
            scrollSnapAlign: "start",
            minHeight: "100vh",
            paddingTop: "2rem",
          }}
        >
          <div className="max-w-6xl mx-auto w-full ">
            <div className="text-center pt-8 pb-6 md:pt-12 md:pb-8">
              <div className="inline-block p-3 bg-blue-200 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-700" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Meet Our Team
              </h2>
              <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
                Passionate Stanford students from diverse academic backgrounds
                united by our commitment to support vets to focus on their patients - not tedious tasks.
              </p>
            </div>

            <div className="w-full pb-24">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 auto-rows-fr">
                {[
                  {
                    name: "Lavinia Ceva",
                    role: "Student Researcher",
                    major: "Business & Finance",
                    image: "/lavinia.jpg?height=300&width=300",
                    mail: "laviniac@stanford.edu",
                  },
                  {
                    name: "Ottavia Minucci",
                    role: "Student Researcher",
                    major: "Business & Finance",
                    image: "/ottavia.jpg?height=300&width=300",
                    mail: "ominucci@stanford.edu",
                  },
                  {
                    name: "Yuren Hao",
                    role: "Student Researcher",
                    major: "Computer Science & Art",
                    image: "/yuren.JPG?height=300&width=300",
                    mail: "yurenh@stanford.edu",
                  },
                  {
                    name: "Noah Elia",
                    role: "Student Researcher",
                    major: "Business Management",
                    image: "/noah.jpg?height=300&width=300",
                    mail: "noahelia@stanford.edu",
                  },
                  {
                    name: "Dan Seiler",
                    role: "Student Researcher",
                    major: "Management",
                    image: "/dan.jpg?height=300&width=300",
                    mail: "dseiler@stanford.edu",
                  },
                  {
                    name: "Markus Klepping",
                    role: "Student Researcher",
                    major: "Software Engineering",
                    image: "/markus.jpg?height=300&width=300",
                    mail: "markuskl@stanford.edu",
                  },
                ].map((member, index) => (
                  <Card
                    key={index}
                    className="border-2 border-blue-200 bg-white shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 w-full"
                  >
                    <CardContent className="p-4 md:p-6 text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4">
                          <Image
                            loading="eager"
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="rounded-full object-cover border-4 border-blue-200 shadow-lg"
                          />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-blue-600 font-medium mb-1 md:mb-2 text-sm md:text-base">
                          {member.role}
                        </p>
                        <p className="text-sm md:text-base text-gray-600">
                          {member.major}
                        </p>
                        <p className="text-sm md:text-base text-gray-600">
                          {member.mail}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

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
              Help Shape the Veterinary Clinic of the future.
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-md">
              Your insights matter. Participate in our research survey and help
              us understand what problems you are facing!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 md:pt-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className={`
          flex items-center gap-2
          bg-white text-blue-600 hover:bg-blue-50
          px-6 md:px-8 py-4 md:py-6
          text-base md:text-lg
          group shadow-2xl hover:shadow-white/25
          transition-all duration-300 border-2 border-white/20
        `}
              >
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeEyVlx1JGJfxlYctz2D0MmIErmre5k3m8TvnJ9W7bjkKacvA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 md:h-5 md:w-5" />
                  Complete Survey Now
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="pt-8 md:pt-12 border-t border-blue-400/50 mt-8 md:mt-16">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 text-blue-100 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Mail className="h-4 w-4 md:h-5 md:w-5" />
                  <Link
                    href={`mailto:${"markuskl@stanford.edu"}?subject=Veterinarian%20research`}
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
      </div>

      <FloatingCTA />
    </>
  );
}
