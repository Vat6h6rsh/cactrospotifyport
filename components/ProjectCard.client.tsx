"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  tags: string[];
  codeLink: string;
  liveLink: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = "/projects/fallback.webp";
    target.onerror = null; // Prevent infinite loop if fallback also fails
  };

  return (
    <div className="relative w-full h-64 pixel-border overflow-hidden group transition-all duration-300">
      {/* Project Image with error handling */}
      <div className="relative w-full h-full">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          onError={handleImageError}
          unoptimized={true} // Remove this if you have proper image optimization setup
        />
      </div>

      {/* Project overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2 text-white">{project.name}</h3>
          <p className="text-sm text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-700 text-xs rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Link
            href={project.codeLink}
            className="flex items-center text-pink-500 hover:text-pink-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-1">Code</span>
            <FaCode className="w-4 h-4" />
          </Link>
          <Link
            href={project.liveLink}
            className="flex items-center text-red-500 hover:text-red-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mr-1">Live</span>
            <FaExternalLinkAlt className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
