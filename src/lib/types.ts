export interface Project {
  slug: string;
  title: string;
  tools: string[];
  date: string;
  description: string;
  image: string;
  content: string;
}

export interface Post {
  slug: string;
  title: string;
  tags: string[];
  style: string;
  color: string;
  description: string;
  date: string;
  wordCount: number;
  content: string;
}
