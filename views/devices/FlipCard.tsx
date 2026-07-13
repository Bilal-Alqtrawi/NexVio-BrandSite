interface FlipCardProps {
  title: string;
  frontBg?: string;
  backBg?: string;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export default function FlipCard({
  title,
  frontBg = "bg-white border border-neutral-200/60 shadow-sm",
  backBg = "bg-neutral-950 text-white shadow-xl",
  frontContent,
  backContent
}: FlipCardProps) {
  return (
    <div className="group h-full min-h-[450px] w-full cursor-pointer [perspective:1800px]">
      <div className="relative h-full w-full rounded-[32px] shadow-sm transition-transform duration-2000 ease-[cubic-bezier(0.23,1,0.32,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
        <div
          className={`absolute inset-0 flex h-full w-full flex-col justify-between overflow-hidden rounded-[32px] p-8 [backface-visibility:hidden] ${frontBg}`}
        >
          <div className="flex h-full w-full flex-col">
            <h3 className="mb-4 text-2xl font-black tracking-tight text-neutral-950">
              {title}
            </h3>
            <div className="relative flex h-full w-full flex-1 flex-col justify-between">
              {frontContent}
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 flex h-full w-full [transform:rotateY(-180deg)] flex-col justify-between overflow-hidden rounded-[32px] p-8 [backface-visibility:hidden] ${backBg}`}
        >
          <div className="flex h-full w-full flex-col justify-center">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  );
}
