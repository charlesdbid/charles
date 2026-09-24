import React from 'react';

export interface Project {
  id: number;
  title: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="space-y-3">
      <div
        className={`w-8 h-8 rounded flex items-center justify-center ${project.badgeBg} ${project.badgeText}`}
      >
        {project.badge}
      </div>
      <h3 className="font-bold text-gray-900 text-lg">{project.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {project.description}
      </p>
    </div>
  );
};