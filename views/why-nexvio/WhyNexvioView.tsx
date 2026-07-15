const stats = [
  { value: "ISO", label: "ISO-27001 enterprise-grade security compliant" },
  { value: "#1", label: "Visual Collaboration Platform on G2" },
  { value: "99%", label: "of the Fortune 100 are customers" },
  { value: "1,000+", label: "community- and expert-built templates" },
  { value: "45M+", label: "users around the world" },
  { value: "100+", label: "integrations with technology partners" }
];

export default function WhyNexvioView() {
  return (
    <main className="bg-[#FFFAF2] py-10 lg:py-16">
      <section className="container mx-auto px-4 sm:px-8">
        <div className="relative mx-auto mb-20 max-w-7xl rounded-[2.5rem] bg-[#FFD700] px-8 py-16 text-center shadow-lg">
          <h2 className="mx-auto max-w-md text-3xl font-bold text-neutral-950 sm:text-4xl">
            Why companies large and small trust Miro
          </h2>
          <p className="mt-4 cursor-pointer text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700">
            Contact Sales to request a demo
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-1.5 text-center"
            >
              <h3 className="text-4xl font-extrabold tracking-wide text-neutral-950 sm:text-5xl">
                {stat.value}
              </h3>
              <p className="mt-3 max-w-65.5 text-sm leading-relaxed font-medium text-neutral-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
