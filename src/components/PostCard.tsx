import type { Post } from '@/lib/types';

const darkColors = new Set(['secondary', 'primary', 'danger', 'dark', 'warning']);

function bodyTextColor(color: string): string {
  return darkColors.has(color) ? 'white' : 'dark';
}

function badgeClass(color: string): string {
  if (color === 'light') return 'badge-dark';
  return `badge-light text-${color}`;
}

export default function PostCard({ post }: { post: Post }) {
  const textColor = bodyTextColor(post.color);
  const year = new Date(post.date).getFullYear();

  return (
    <div className="col-lg-6 my-3 wow animated fadeIn" data-wow-delay=".15s">
      <a href={`/textos/${post.slug}`} className={`post card bg-${post.color}`}>
        <div className={`card-body text-${textColor}`}>
          <h3 className="card-title">{post.title}</h3>
          <p className="card-text">
            {post.tags.map(tag => (
              <span key={tag} className={`badge ${badgeClass(post.color)} mr-1`}>{tag}</span>
            ))}
          </p>
          <p className="card-text">{post.description}</p>
        </div>
        <div className={`card-footer text-${textColor}`}>{year}</div>
      </a>
    </div>
  );
}
