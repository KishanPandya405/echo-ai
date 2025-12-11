// src/components/ModelSelector.tsx
"use client";

import { useSession } from "@/app/context/SessionContext";

export const ModelSelector = () => {
  const { models, selectedModelId, setSelectedModelId, loading, error } = useSession();

  return (
    <div className="rounded-xl border p-3 space-y-2 bg-white/60 dark:bg-slate-900/60 shadow-lg">
      <h2 className="text-sm font-medium">Model</h2>
      {loading && <p className="text-xs text-slate-500">Loading models…</p>}
      {error && (
        <p className="text-xs text-red-500" role="alert">
          {error}
        </p>
      )}
      <label className="sr-only" htmlFor="model-select">
        Choose model
      </label>
      <select
        id="model-select"
        className="w-full rounded-md border px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={selectedModelId ?? ""}
        onChange={(e) => setSelectedModelId(e.target.value)}
      >
        {models.map((m) => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))}
      </select>
      <p className="text-xs text-slate-500">
        {models.find((m) => m.id === selectedModelId)?.description}
      </p>
    </div>
  );
};
