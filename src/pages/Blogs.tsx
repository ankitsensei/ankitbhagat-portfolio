import React, { useState } from "react";
import DockNavbar from "../components/DockNavbar";
import { blogPosts } from "../assets/BlogsData";

const SearchBlogs: React.FC = () => {
  const [query, setQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto px-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search blogs..."
        className="w-full px-4 py-3 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-colors"
        aria-label="Search blogs"
      />
      <div className="mt-6 space-y-4">
        {filteredPosts.length === 0 && query.length > 0 ? (
          <p className="text-[var(--text-muted)] text-sm">
            No blogs found matching "{query}"
          </p>
        ) : (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              className="p-4 sm:p-6 rounded-lg border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--text-primary)] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[var(--text-muted)]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11 8a3 3 0 0 1-3 3v2a2 2 0 0 1-2-2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.28l1.56-1.56a3 3 0 1 1 2.12 2.12L7.28 9H15a2 2 0 0 1 2 2v2a3 3 0 0 1-3 3Z" />
                  </svg>
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="jetbrains-mono text-lg font-medium text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[var(--text-muted)] text-xs">
                  <span>{post.date}</span>
                  <span>{post.readingTime}</span>
                </div>
                <a
                  href={post.hashnodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary-color)] font-medium hover:underline transition-colors"
                >
                  Read on Hashnode
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export const Blogs: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] antialiased">
      <main className="page">
        <SearchBlogs />
      </main>

      {/* Floating Bottom Dock Navigation */}
      <DockNavbar />

      {/* Bottom Progressive Blur Gradient Overlay */}
      <div className="bottom-progressive-blur" />
    </div>
  );
};

export default Blogs;