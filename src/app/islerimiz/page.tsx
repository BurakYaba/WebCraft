import { lazy, Suspense } from "react";
import Header from "../../components/Header";
import ProjectsHero from "../../components/ProjectsHero";

// Lazy load below-the-fold components
const ProjectsGallery = lazy(() => import("../../components/ProjectsGallery"));
const ProjectsStats = lazy(() => import("../../components/ProjectsStats"));
const Footer = lazy(() => import("../../components/Footer"));

// Loading component for better UX
const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div
    className={`${height} bg-gray-800 animate-pulse flex items-center justify-center`}
  >
    <div className="w-8 h-8 border-4 border-red-500/20 border-t-red-500 rounded-full animate-spin" />
  </div>
);

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#181716]">
      <Header />
      <ProjectsHero />

      <Suspense fallback={<SectionSkeleton height="h-screen" />}>
        <ProjectsGallery />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <ProjectsStats />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <Footer />
      </Suspense>
    </main>
  );
}
