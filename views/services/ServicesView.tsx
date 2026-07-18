import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon
}) => (
  <div className="group flex flex-col items-start rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-700/50 dark:bg-slate-800">
    <div className="bg-primary/10 text-primary group-hover:bg-primary mb-6 rounded-xl p-4 transition-all duration-300 group-hover:text-white">
      <span className="material-icons-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
      {title}
    </h3>
    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
      {description}
    </p>
  </div>
);

export const ServicesView: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "High-performance web applications built with React and Next.js.",
      icon: "code"
    },
    {
      title: "Mobile Solutions",
      description:
        "Cross-platform mobile applications with smooth UX and high native performance.",
      icon: "devices"
    },
    {
      title: "UI/UX Design",
      description:
        "Modern, user-centric interface designs tailored to match your brand identity.",
      icon: "palette"
    },
    {
      title: "Cloud Integration",
      description:
        "Scalable cloud infrastructure setup and seamless API integrations.",
      icon: "cloud_queue"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-primary bg-primary/10 rounded-full px-4 py-1.5 text-sm font-semibold tracking-wider uppercase">
            Our Services
          </span>
          <h1 className="mt-4 mb-6 text-4xl font-black tracking-tight text-slate-900 md:text-5xl dark:text-white">
            Solutions Tailored to Your Business
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We deliver high-end digital products focusing on performance, clean
            code, and scalable architecture.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};
