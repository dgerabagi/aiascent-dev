'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { FaChevronDown, FaProjectDiagram } from 'react-icons/fa';

interface ProjectSelectorProps {
  currentSlug: string;
}

const projects = [
  { id: 'report', label: 'The Ascent Report' },
  { id: 'anguilla', label: 'Anguilla Project' },
  { id: 'game', label: 'AI Ascent Game' },
];

const ProjectSelector: React.FC<ProjectSelectorProps> = ({ currentSlug }) => {
  const router = useRouter();
  const currentProject = projects.find(p => p.id === currentSlug) || projects[0];

  return (
    <div className="absolute top-2 left-2 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2 bg-background/80 backdrop-blur-sm border-primary/50 hover:bg-accent shadow-md">
            <FaProjectDiagram className="text-primary" />
            <span className="font-semibold hidden sm:inline">{currentProject.label}</span>
            <span className="font-semibold sm:hidden">Projects</span>
            <FaChevronDown className="text-xs opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          {projects.map((project) => (
            <DropdownMenuItem 
              key={project.id} 
              onClick={() => router.push(`/showcase/${project.id}`)}
              className={currentSlug === project.id ? 'bg-accent' : ''}
            >
              {project.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProjectSelector;