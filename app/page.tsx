import {
  About,
  Blog,
  Features,
  Hero,
  Metrics,
  NewsLetter,
  OurExperts,
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
      <OurExperts />

      <div className="bg-secondary-950 p-4">
        <NewsLetter />
      </div>

      <Blog />
    </main>
  );
}
