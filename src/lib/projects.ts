import fs from 'fs';
import path from 'path';
import type { Project } from './types';

const projectsDir = path.join(process.cwd(), 'content', 'projects');

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.json'));
  const projects = files.map(f => JSON.parse(fs.readFileSync(path.join(projectsDir, f), 'utf8')) as Project);
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProjectBySlug(slug: string): Project | undefined {
  const filePath = path.join(projectsDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return undefined;
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as Project;
}

export function getAllProjectSlugs(): string[] {
  return fs.readdirSync(projectsDir)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''));
}
