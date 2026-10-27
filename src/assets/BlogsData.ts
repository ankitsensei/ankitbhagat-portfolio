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
    title: "Getting Started with React",
    excerpt: "A comprehensive guide to learning React fundamentals and building your first components.",
    hashnodeUrl: "https://ankitbhagat.hashnode.dev/getting-started-with-react",
    date: "Mar 15, 2024",
    readingTime: "8 min read",
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    id: "2",
    title: "TypeScript Best Practices",
    excerpt: "Essential TypeScript patterns and types to make your code more robust and maintainable.",
    hashnodeUrl: "https://ankitbhagat.hashnode.dev/typescript-best-practices",
    date: "Feb 20, 2024",
    readingTime: "6 min read",
    tags: ["TypeScript", "Best Practices", "Programming"],
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox",
    excerpt: "When to use CSS Grid vs Flexbox for layout design, with practical examples.",
    hashnodeUrl: "https://ankitbhagat.hashnode.dev/css-grid-vs-flexbox",
    date: "Jan 10, 2024",
    readingTime: "5 min read",
    tags: ["CSS", "Layout", "Frontend"],
  },
];