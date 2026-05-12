import fs from 'fs';
import path from 'path';
import type { Post } from './types';

const postsDir = path.join(process.cwd(), 'content', 'posts');

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.json'));
  const posts = files.map(f => JSON.parse(fs.readFileSync(path.join(postsDir, f), 'utf8')) as Post);
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  const filePath = path.join(postsDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return undefined;
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as Post;
}

export function getAllPostSlugs(): string[] {
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.json'))
    .map(f => f.replace('.json', ''));
}

export function readingTime(wordCount: number): string {
  const minutes = Math.ceil(wordCount / 180);
  return minutes < 1 ? 'less than 1 min read time' : `${minutes} min read time`;
}
