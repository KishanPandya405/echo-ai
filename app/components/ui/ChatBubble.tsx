"use client";

import React from "react";
import clsx from "clsx";

type Role = "user" | "assistant";

interface ChatBubbleProps {
  role: Role;
  content: string;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ role, content }) => {
  const isUser = role === "user";

  return (
    <div
      className={clsx(
        "mb-2 max-w-[80%] rounded-lg px-3 py-2 text-sm",
        isUser
          ? "ml-auto bg-indigo-600 text-white"
          : "mr-auto bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-50"
      )}
    >
      {content}
    </div>
  );
};
