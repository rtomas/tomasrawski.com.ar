import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function TextsPage() {
  const posts = getAllPosts();
  return (
    <div className="card-group mt-2">
      {posts.map(post => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
