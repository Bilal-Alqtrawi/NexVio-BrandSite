interface FlipCardProps {
  title: string;
  frontBg?: string;
  backBg?: string;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export default function FlipCard({
  title,
  frontBg = "bg-brand-cream/10 border border-brand-cream/15 text-brand-cream backdrop-blur-md",
  backBg = "bg-brand-cream text-brand-teal shadow-xl",
  frontContent,
  backContent
}: FlipCardProps) {
  return (
    <div className="group cursor-pointerperspective-[1800px] h-full min-h-112.5 w-full">
      <div className="relative h-full w-full rounded-[32px] shadow-sm transition-transform duration-2000 ease-[cubic-bezier(0.23,1,0.32,1)] transform-3d group-hover:transform-[rotateY(-180deg)]">
        {/* Front Face */}
        <div
          className={`absolute inset-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-[32px] p-8 backface-hidden ${frontBg}`}
        >
          <div className="flex h-full w-full flex-col">
            <h3 className="mb-4 text-2xl font-black tracking-tight">{title}</h3>
            <div className="relative flex h-full w-full flex-1 flex-col justify-between">
              {frontContent}
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className={`absolute inset-0 flex h-full w-full transform-[rotateY(-180deg)] flex-col justify-between overflow-hidden rounded-[32px] p-8 backface-hidden ${backBg}`}
        >
          <div className="flex h-full w-full flex-col justify-center">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}
