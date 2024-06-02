import { About, Features, Hero } from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-2 sm:p-4 bg-secondary-950">
        <Features />
      </div>
      <About />
    </main>
  );
}
