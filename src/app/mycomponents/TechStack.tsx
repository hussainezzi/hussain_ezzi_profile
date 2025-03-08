// "use client"

// import Image from "next/image"
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip"

// export default function TechStack() {
// import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa"

// const techs = [
//     { name: "HTML5", icon: <FaHtml5 size={60} /> },
//     { name: "CSS3", icon: <FaCss3Alt size={60} /> },
//     { name: "JavaScript", icon: <FaJsSquare size={60} /> },
//     { name: "React", icon: <FaReact size={60} /> },
// ]
//     // ... and so on
  

//   return (
//     <TooltipProvider>
//       <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
//         <h2 className="text-3xl font-bold text-blue-900">My Tech Stack</h2>
//         <p className="mt-2 text-gray-600">
//           Technologies I’ve been working with recently
//         </p>

//         {/* Icon Grid */}
//         <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
//           {techs.map((tech) => (
//             <div key={tech.name} className="flex flex-col items-center text-center">
//               <Tooltip>
//                 <TooltipTrigger>
//                   {/* 1. Provide width & height for Next.js <Image> */}
//                   <Image
//                     src={tech.icon}
//                     alt={tech.name}
//                     width={60}
//                     height={60}
//                     className="object-contain"
//                   />
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   {tech.name}
//                 </TooltipContent>
//               </Tooltip>

//               <span className="mt-2 text-sm text-gray-700">{tech.name}</span>
//             </div>
//           ))}
//         </div>
//       </section>
//     </TooltipProvider>
//   )
// }
