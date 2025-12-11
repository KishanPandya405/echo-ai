// src/components/PromptEditor.tsx
"use client";

import { useSession } from "@/app/context/SessionContext";

export const PromptEditor = () => {
  const {
    templates,
    currentPrompt,
    setCurrentPrompt,
    sendMessage,
  } = useSession();

  const loadTemplate = (id: string) => {
    const tpl = templates.find((t) => t.id === id);
    if (tpl) setCurrentPrompt(tpl.prompt);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="rounded-xl border p-3 space-y-2 bg-white/60 dark:bg-slate-900/60 flex-1 flex flex-col">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h2 className="text-sm font-medium">Prompt</h2>
          <p className="text-xs text-slate-500">Ctrl / Cmd + Enter to send</p>
        </div>
        {templates.length > 0 && (
          <select
            aria-label="Load a prompt template"
            className="rounded-md border px-2 py-1 text-xs"
            defaultValue=""
            onChange={(e) => loadTemplate(e.target.value)}
          >
            <option value="" disabled>
              Load template…
            </option>
            {templates.map((t) => (
              <option key={t.id} value={t.id}>
                {t.title}
              </option>
            ))}
          </select>
        )}
      </div>

      <textarea
        value={currentPrompt}
        onChange={(e) => setCurrentPrompt(e.target.value)}
        onKeyDown={handleKeyDown}
        className="mt-1 min-h-[120px] flex-1 w-full resize-y rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent"
        placeholder="Ask something..."
      />

      <div className="flex justify-end">
        <button
          type="button"
          onClick={sendMessage}
          className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};
