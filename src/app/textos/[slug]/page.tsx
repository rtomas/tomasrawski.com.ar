import { getPostBySlug, getAllPostSlugs, readingTime } from '@/lib/posts';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllPostSlugs().map(slug => ({ slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const year = new Date(post.date).getFullYear();
  const time = readingTime(post.wordCount);

  return (
    <div className="col-lg-10 mx-auto mt-5 post">
      <h1><b>{post.title}</b></h1>
      <p className="post-metadata text-muted">
        {year} - <b>{time}</b>
        <br />
        {'Tags: '}
        {post.tags.map(tag => (
          <a key={tag} className="text-decoration-none no-underline" href={`/blog/tags#${tag}`}>
            <span className="tag badge badge-pill text-primary border border-primary mr-1">{tag}</span>
          </a>
        ))}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
