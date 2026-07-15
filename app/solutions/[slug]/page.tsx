import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOLUTIONS_DATA } from "@/data/solutions";
import SolutionDetailsView from "@/views/solutions/SolutionDetailsView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SOLUTIONS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS_DATA[slug];

  if (!solution) {
    return {
      title: "Page Not Found | NexVio"
    };
  }

  const titleText = `${solution.badge} | NexVio Solutions`;
  return {
    title: titleText,
    description: solution.description,
    openGraph: {
      title: titleText,
      description: solution.ogDescription,
      url: `https://nexvio.ae/solutions/${slug}`,
      siteName: "NexVio",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: titleText,
      description: solution.ogDescription
    },
    alternates: {
      canonical: `/solutions/${slug}`
    }
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = SOLUTIONS_DATA[slug];

  if (!solution) {
    notFound();
  }

  return <SolutionDetailsView data={solution} />;
}
