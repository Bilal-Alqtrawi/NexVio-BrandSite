import React from "react";

interface PostCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  excerpt,
  category,
  date,
  image
}) => (
  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-700/50 dark:bg-slate-800">
    <div className="relative aspect-video overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <span className="bg-primary absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm">
        {category}
      </span>
    </div>
    <div className="flex flex-grow flex-col p-6">
      <span className="mb-2 block text-xs text-slate-400 dark:text-slate-500">
        {date}
      </span>
      <h3 className="hover:text-primary mb-3 line-clamp-2 cursor-pointer text-lg font-bold text-slate-900 transition-colors dark:text-white">
        {title}
      </h3>
      <p className="mb-6 line-clamp-3 flex-grow text-sm text-slate-600 dark:text-slate-400">
        {excerpt}
      </p>
      <div className="text-primary group flex cursor-pointer items-center text-sm font-semibold">
        Read Full Article
        <span className="material-icons-outlined ml-1 transform text-sm transition-transform group-hover:translate-x-1">
          arrow_forward
        </span>
      </div>
    </div>
  </article>
);

export const BlogView: React.FC = () => {
  const posts = [
    {
      title: "Optimizing React Performance in 2026",
      excerpt:
        "Deep dive into standard performance patterns, state management optimizations, and rendering profiles.",
      category: "Engineering",
      date: "July 15, 2026",
      image:
        "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "The Future of Tailwind CSS and Modern UI Architecture",
      excerpt:
        "How utility-first frameworks are evolving to support enterprise-grade design tokens dynamically.",
      category: "Design Systems",
      date: "July 10, 2026",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Building Scalable Next.js Platforms",
      excerpt:
        "Architectural blueprints for handling continuous integration and highly volatile web traffic safely.",
      category: "DevOps",
      date: "June 28, 2026",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <span className="text-primary bg-primary/10 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wider uppercase">
              Our Blog
            </span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Latest Insights & Articles
            </h1>
          </div>
          <p className="mt-4 max-w-md text-slate-600 md:mt-0 dark:text-slate-400">
            Stay up to date with the latest technical breakdowns, industry
            insights, and engineering updates.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};
