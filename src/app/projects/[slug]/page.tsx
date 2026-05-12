import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllProjectSlugs().map(slug => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="col-lg-10 mx-auto mt-5 post">
      <div dangerouslySetInnerHTML={{ __html: project.content }} />
    </div>
  );
}
