"use client" // Only needed in Next.js App Router if this page is a client component

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function myEduExperienc() {
  // Sample data for Work Experience
  const experiences = [
    {
      id: 1,
      title: "Junior Web Developer",
      company: "Dr. Rajkumar's Learning App",
      location: "Bengaluru",
      from: "Sep 2022",
      to: "Present",
      badge: "Full time",
    },
    {
      id: 2,
      title: "Web Development Intern",
      company: "IonIntel Web Solutions",
      location: "Bengaluru",
      from: "Sep 2021",
      to: "Dec 2021",
      badge: "Internship",
    },
    {
      id: 3,
      title: "SEO / SEM Specialist",
      company: "HALYS",
      location: "Bengaluru",
      from: "Dec 2020",
      to: "Aug 2021",
      badge: "Full time",
    },
  ]

  // Sample data for Education
  const education = [
    {
      id: 1,
      degree: "Bachelor in Electronics & Communication",
      institution: "Bangalore Institute of Technology",
      from: "Aug 2015",
      to: "Dec 2019",
      badge: "Full time",
    },
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      {/* About Me Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-blue-900">About Me</h2>
        <p className="leading-relaxed text-gray-600">
          The Generator App is an online tool that helps you to export ready-made
          templates ready to work as your future website. It helps you to combine
          slides, panels, and other components and export it as a set of static files:
          HTML/CSS/JS.
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Work Experience</h3>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <Card key={exp.id} className="shadow-sm border border-gray-200">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">
                    {exp.title}
                  </CardTitle>
                  <Badge variant="outline">{exp.badge}</Badge>
                </div>
                <CardDescription>
                  {exp.company} @ {exp.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                {exp.from} - {exp.to}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="mt-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Education</h3>
        <div className="space-y-4">
          {education.map((edu) => (
            <Card key={edu.id} className="shadow-sm border border-gray-200">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">
                    {edu.degree}
                  </CardTitle>
                  <Badge variant="outline">{edu.badge}</Badge>
                </div>
                <CardDescription>{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                {edu.from} - {edu.to}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
