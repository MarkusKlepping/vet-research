import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import Image from "next/image";

function TeamSection() {
  return (
    <section
      data-section="team"
      className="bg-gradient-to-br from-blue-50 to-blue-100 px-4 border-b-4 border-blue-300 shadow-lg relative pb-[20vh]"
      style={{
        scrollSnapAlign: "start",
        minHeight: "100vh",
        paddingTop: "2rem",
      }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center pt-8 pb-6 md:pt-12 md:pb-8">
          <div className="inline-block p-3 bg-blue-200 rounded-full mb-4">
            <Users className="h-8 w-8 text-blue-700" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Meet Our Team
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
            Passionate Stanford students from diverse academic backgrounds
            united by our commitment to support vets to focus on their patients
            - not tedious tasks.
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
  );
}

export default TeamSection;
