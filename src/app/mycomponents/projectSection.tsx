"use client" // Needed only for Next.js App Router if this is a client component

import Image from "next/image"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProjectsSection() {
  // Dummy data for demonstration
  const projects = [
    {
      id: 1,
      title: "Project Title goes here",
      description:
        "This is sample project description. Random things here. This is sample project description for dummy text.",
      techStack: "HTML, CSS, JavaScript",
      image: "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture_1258-28312.jpg",
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Project Title goes here",
      description:
        "This is sample project description for another dummy text. Provide an interesting summary of your project.",
      techStack: "React, Redux, Tailwind",
      image: "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture_1258-28312.jpg",
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Project Title goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
      techStack: "Next.js, Node.js",
      image: "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture_1258-28312.jpg",
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Project Title goes here",
      description:
        "Another short project description. Feel free to highlight key features or challenges you solved.",
      techStack: "Vue, Vite",
      image: "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture_1258-28312.jpg",
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 5,
      title: "Project Title goes here",
      description:
        "This is sample project description. Random things here. This is sample project description for dummy text.",
      techStack: "Python, Django",
      image: "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture_1258-28312.jpg",
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 6,
      title: "Project Title goes here",
      description:
        "Short description about your project. Maybe mention the purpose or any achievements.",
      techStack: "Angular, TypeScript",
      image: "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture_1258-28312.jpg",
      liveLink: "#",
      codeLink: "#",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-gray-800">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-blue-900">Projects</h2>
      <p className="mt-2 text-gray-600">Things I’ve built so far</p>

      {/* Projects Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="shadow-md border border-gray-200 overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Card Content */}
            <CardContent className="space-y-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <p className="text-sm text-gray-500">
                <strong>Tech stack:</strong> {project.techStack}
              </p>
            </CardContent>

            {/* Card Footer (Buttons) */}
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="text-sm">
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  Live Preview
                </a>
              </Button>
              <Button variant="outline" className="text-sm">
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  View Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
