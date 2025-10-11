// src/app/page.tsx
// C1 - Initial Scaffolding
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6">Welcome to AIAscent.dev</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The official home of the Data Curation Environment (DCE) VS Code Extension.
        </p>
        <Link href="/showcase">
          <Button size="lg">Explore the Interactive Showcase</Button>
        </Link>
        <p className="mt-10 text-sm text-muted-foreground">
          (Cycle 1: Project Scaffolding Complete)
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Features (Placeholder)</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-sm bg-card">
            <h3 className="text-xl font-bold mb-2">Context Curation</h3>
            <p className="text-muted-foreground">
              Effortlessly select and manage the exact files needed for your AI prompts.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-card">
            <h3 className="text-xl font-bold mb-2">Parallel Co-Pilot</h3>
            <p className="text-muted-foreground">
              Compare multiple AI responses side-by-side and rapidly test solutions.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-card">
            <h3 className="text-xl font-bold mb-2">Iterative Workflow</h3>
            <p className="text-muted-foreground">
              Streamline the human-AI collaboration loop for rapid iteration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}