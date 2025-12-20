import Link from "next/link";
import { Github, Star, GitFork, ExternalLink, Users } from "lucide-react";
import Card from "./Card";
import { Project } from "@/lib/type";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hover className="p-6 h-full flex flex-col">
      {/* Project Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 flex items-center justify-center">
        <div className="text-4xl font-bold text-primary-600">
          {project.title.split(' ').map(w => w[0]).join('')}
        </div>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900 flex-1">
          {project.title}
        </h3>
        {project.featured && (
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 flex-grow">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="bg-primary-50 text-primary-700 text-xs font-medium px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="text-xs text-gray-500 px-2 py-1">
            +{project.tags.length - 3} more
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          {project.stars && (
            <span className="flex items-center">
              <Star size={16} className="mr-1" />
              {project.stars}
            </span>
          )}
          {project.forks && (
            <span className="flex items-center">
              <GitFork size={16} className="mr-1" />
              {project.forks}
            </span>
          )}
          {project.contributors && (
            <span className="flex items-center">
              <Users size={16} className="mr-1" />
              {project.contributors}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary-600 transition-colors"
            title="View on GitHub"
          >
            <Github size={20} />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}