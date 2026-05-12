import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const projects = getAllProjects();
  return (
    <div className="card-columns m-3 mt-5">
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
