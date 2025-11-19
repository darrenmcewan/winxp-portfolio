import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  color: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin panel for online stores with real-time sales tracking using Recharts.",
    tags: ["React", "TypeScript", "Tailwind"],
    color: "bg-blue-100"
  },
  {
    title: "AI Image Generator",
    description: "Integrated Gemini Imagen model to generate creative assets from text prompts.",
    tags: ["Gemini API", "Node.js", "Canvas"],
    color: "bg-green-100"
  },
  {
    title: "Retro OS Portfolio",
    description: "A Windows XP clone running entirely in the browser using React and Tailwind.",
    tags: ["UI/UX", "CSS3", "Retro"],
    color: "bg-yellow-100"
  },
  {
    title: "Task Manager App",
    description: "Drag and drop task management with local storage persistence.",
    tags: ["React DnD", "Redux"],
    color: "bg-red-100"
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="w-full h-full overflow-y-auto p-6 bg-white">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow p-4 bg-[#FAFAFA]">
                <div className={`w-full h-32 ${proj.color} mb-4 rounded flex items-center justify-center text-gray-400 border border-gray-100`}>
                    Project Preview
                </div>
                <h3 className="font-bold text-lg text-[#0054E3] mb-2">{proj.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs border border-gray-300 rounded-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-3">
                    <button className="text-xs flex items-center gap-1 text-blue-600 hover:underline">
                        <ExternalLink size={12} /> View Live
                    </button>
                    <button className="text-xs flex items-center gap-1 text-gray-700 hover:underline">
                        <Github size={12} /> Source Code
                    </button>
                </div>
            </div>
          ))}
       </div>
    </div>
  );
};