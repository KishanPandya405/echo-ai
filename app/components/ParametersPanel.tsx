// src/components/ParametersPanel.tsx
"use client";

import { useSession } from "@/app/context/SessionContext";

export const ParametersPanel = () => {
  const { parameters, setParameters } = useSession();

  return (
    <div className="rounded-xl border p-3 space-y-4 bg-white/60 dark:bg-slate-900/60">
      <h2 className="text-sm font-medium">Parameters</h2>

      <div>
        <label htmlFor="temperature" className="flex justify-between text-xs mb-1">
          <span>Temperature</span>
          <span>{parameters.temperature.toFixed(2)}</span>
        </label>
        <input
          id="temperature"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={parameters.temperature}
          onChange={(e) =>
            setParameters({ ...parameters, temperature: Number(e.target.value) })
          }
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="maxTokens" className="flex justify-between text-xs mb-1">
          <span>Max tokens</span>
          <span>{parameters.maxTokens}</span>
        </label>
        <input
          id="maxTokens"
          type="number"
          min={16}
          max={4096}
          value={parameters.maxTokens}
          onChange={(e) =>
            setParameters({ ...parameters, maxTokens: Number(e.target.value) })
          }
          className="w-full rounded-md border px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
};
