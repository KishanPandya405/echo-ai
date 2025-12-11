// src/components/ChatOutput.tsx
"use client";

import { useSession } from "@/app/context/SessionContext";

export const ChatOutput = () => {
  const { messages } = useSession();

  const handleCopy = async () => {
    const text = messages.map((m) => `${m.role}: ${m.content}`).join("\n\n");
    await navigator.clipboard.writeText(text);
    alert("Copied chat to clipboard");
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(messages, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "chat-session.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="rounded-xl border p-3 bg-white/60 dark:bg-slate-900/60 flex flex-col min-h-[220px]">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-medium">Chat</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-md border px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Copy
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="rounded-md border px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Download JSON
          </button>
        </div>
      </div>

      <div
        className="flex-1 space-y-2 overflow-auto rounded-md bg-slate-50/80 dark:bg-slate-950/40 p-2"
        aria-label="Chat messages"
      >
        {messages.length === 0 && (
          <p className="text-xs text-slate-400">No messages yet. Start by sending a prompt.</p>
        )}
        {messages.map((m) => (
          <div
            key={m.id}
            className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
              m.role === "user"
                ? "ml-auto bg-indigo-600 text-white"
                : "mr-auto bg-slate-200 dark:bg-slate-800"
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>
    </section>
  );
};
