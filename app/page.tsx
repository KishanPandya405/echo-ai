// src/app/page.tsx
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { ModelSelector } from "@/app/components/ModelSelector";
import { PromptEditor } from "@/app/components/PromptEditor";
import { ParametersPanel } from "@/app/components/ParametersPanel";
import { ChatOutput } from "@/app/components/ChatOutput";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[rgb(var(--bg))] text-[rgb(var(--text))]">
      <header className="border-b px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">AI Workspace</h1>
          <p className="text-xs text-slate-500">
            Experiment with prompts, models and parameters
          </p>
        </div>
        <ThemeToggle />
      </header>

      {/* Responsive layout */}
      <section className="flex-1 grid gap-4 p-4 md:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="space-y-4">
          <ModelSelector />
          <ParametersPanel />
        </aside>
        <section className="flex flex-col gap-4">
          <PromptEditor />
          <ChatOutput />
        </section>
      </section>
    </main>
  );
}
