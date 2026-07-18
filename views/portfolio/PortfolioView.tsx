import React, { useState } from "react";

interface Project {
  title: string;
  category: string;
  tech: string[];
  image: string;
}

export const PortfolioView: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Web Apps", "Corporate", "E-Commerce"];

  const projects: Project[] = [
    {
      title: "Masa Toys Platform",
      category: "Web Apps",
      tech: ["React", "Vite", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "GKL Corporate Site",
      category: "Corporate",
      tech: ["Next.js", "Tailwind CSS", "Framer"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "NextGen Retail Center",
      category: "E-Commerce",
      tech: ["React", "Node.js", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-primary bg-primary/10 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wider uppercase">
            Our Portfolio
          </span>
          <h1 className="mt-4 mb-8 text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Showcase of Our Best Work
          </h1>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-xl px-5 py-2 text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? "bg-primary text-white shadow-sm"
                    : "border border-slate-100 bg-white text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-700/50 dark:bg-slate-800"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-primary mb-2 block text-xs font-semibold tracking-wider uppercase">
                  {project.category}
                </span>
                <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
