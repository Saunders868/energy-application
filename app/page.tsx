import {
  About,
  Blog,
  Features,
  Hero,
  Metrics,
  NewsLetter,
  OurExperts,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-2 sm:p-4 bg-secondary-950">
        <Features />
      </div>
      <About />
      <Metrics />
      <div className="p-2 sm:p-4">
        <Testimonials />
      </div>
      <OurExperts />

      <div className="p-2 sm:p-4 bg-secondary-950">
        <NewsLetter />
      </div>

      <Blog />
    </main>
  );
}
