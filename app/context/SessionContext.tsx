// src/context/SessionContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface Model {
  id: string;
  name: string;
  description: string;
}

export interface Template {
  id: string;
  title: string;
  prompt: string;
}

export interface Parameters {
  temperature: number;
  maxTokens: number;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface SessionContextValue {
  models: Model[];
  templates: Template[];
  loading: boolean;
  error: string | null;

  selectedModelId: string | null;
  setSelectedModelId: (id: string) => void;

  parameters: Parameters;
  setParameters: (p: Parameters) => void;

  currentPrompt: string;
  setCurrentPrompt: (v: string) => void;

  messages: Message[];
  sendMessage: () => void;
}

const SessionContext = createContext<SessionContextValue | undefined>(undefined);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [models, setModels] = useState<Model[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);
  const [parameters, setParameters] = useState<Parameters>({ temperature: 0.7, maxTokens: 512 });
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  // Fetch from mock API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [modelsRes, templatesRes] = await Promise.all([
          fetch("/api/models"),
          fetch("/api/templates"),
        ]);

        if (!modelsRes.ok || !templatesRes.ok) {
          throw new Error("Failed to load data");
        }

        const modelsJson = await modelsRes.json();
        const templatesJson = await templatesRes.json();

        setModels(modelsJson.models);
        setTemplates(templatesJson.templates);
        setSelectedModelId(modelsJson.models[0]?.id ?? null);
      } catch (err: any) {
        setError(err.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 const sendMessage = async () => {
  if (!currentPrompt.trim()) return;

  const userMsg: Message = {
    id: crypto.randomUUID(),
    role: "user",
    content: currentPrompt,
  };

  setMessages((prev) => [...prev, userMsg]); // show user msg immediately

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: currentPrompt,
        model: selectedModelId,
        parameters,
      }),
    });

    const data = await res.json();

    const assistantMsg: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: data.reply,
    };

    setMessages((prev) => [...prev, assistantMsg]);
  } catch (err) {
    // optional: show error message bubble
  } finally {
    setCurrentPrompt("");
  }
};



  return (
    <SessionContext.Provider
      value={{
        models,
        templates,
        loading,
        error,
        selectedModelId,
        setSelectedModelId,
        parameters,
        setParameters,
        currentPrompt,
        setCurrentPrompt,
        messages,
        sendMessage,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used inside SessionProvider");
  return ctx;
};
