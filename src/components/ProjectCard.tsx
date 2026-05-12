import type { Project } from '@/lib/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="wow animated fadeIn" data-wow-delay=".15s">
      <a href={`/projects/${project.slug}`} className="project card text-dark">
        {project.image && (
          <img className="card-img-top" src={project.image} alt={project.title} />
        )}
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <p className="card-text">
            {project.tools.map(tool => (
              <span key={tool} className="badge badge-pill text-primary border border-primary ml-1">
                {tool}
              </span>
            ))}
          </p>
        </div>
      </a>
    </div>
  );
}
