export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  hashnodeUrl: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Docker Notes - From Basics to Advanced",
    excerpt:
      "A practical guide to learning Docker, from running your first container to networking, persistent storage, Compose, and multi-stage builds.",
    hashnodeUrl:
      "https://webdevankit.hashnode.dev/docker-notes-from-basics-to-advanced?utm_source=hashnode&utm_medium=feed",
    date: "Oct 27, 2026",
    readingTime: "21 min read",
    tags: ["docker", "nodejs"],
  },
  {
    id: "2",
    title: "L1-Introduction to System Design (LLD & HLD)",
    excerpt:
      "Welcome to the notes for Lecture 1: Introduction to System Design from the Low-Level Design (LLD).",
    hashnodeUrl:
      "https://webdevankit.hashnode.dev/l1-introduction-to-system-design-lld-hld",
    date: "Oct 27, 2026",
    readingTime: "3 min read",
    tags: ["lld", "hld", "System Design"],
  },
];
