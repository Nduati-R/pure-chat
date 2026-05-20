import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PanelLeft, SquarePen, ArrowUp, Sparkles, Image as ImageIcon, GraduationCap, PencilLine, List, HelpCircle, Search, Code2, LogIn, UserPlus, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rudani — What can I help you with?" },
      { name: "description", content: "Rudani is a calm, focused AI assistant. Ask anything." },
    ],
  }),
  component: Index,
});

const suggestions = [
  { icon: GraduationCap, label: "Learn", color: "oklch(0.7 0.18 250)" },
  { icon: PencilLine, label: "Write", color: "oklch(0.72 0.17 160)" },
  { icon: List, label: "Summarize", color: "oklch(0.7 0.2 330)" },
  { icon: HelpCircle, label: "Get advice", color: "oklch(0.7 0.18 290)" },
  { icon: Search, label: "Analyze file", color: "oklch(0.75 0.17 75)" },
  { icon: Code2, label: "Code", color: "oklch(0.72 0.14 220)" },
];

function Index() {
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <button className="p-1.5 -ml-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground" aria-label="Toggle sidebar">
            <PanelLeft className="size-4" />
          </button>
          <span className="font-display text-[15px] tracking-tight">Rudani</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-md hover:bg-muted transition-colors">
            <LogIn className="size-3.5" /> Sign in
          </button>
          <button className="flex items-center gap-1.5 text-[13px] text-primary-foreground bg-primary hover:opacity-90 px-3 py-1.5 rounded-md transition-opacity">
            <UserPlus className="size-3.5" /> Sign up
          </button>
        </div>
      </header>

      {/* Center stage */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 -mt-16">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-[56px] leading-none font-medium tracking-tight">
              Hello there
            </h1>
            <p className="mt-4 text-[15px] text-muted-foreground">
              What can Rudani help you with today?
            </p>
          </div>

          {/* Composer */}
          <div className="rounded-2xl bg-card border border-border shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_20px_60px_-20px_rgba(0,0,0,0.5)]">
            <div className="px-5 pt-4">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Ask anything…"
                className="w-full bg-transparent outline-none text-[15px] placeholder:text-muted-foreground py-1"
              />
            </div>
            <div className="flex items-center justify-between px-3 pb-3 pt-2">
              <div className="flex items-center gap-1">
                <button className="flex items-center gap-1.5 text-[12.5px] text-muted-foreground hover:text-foreground px-2.5 py-1.5 rounded-md hover:bg-muted transition-colors">
                  <span className="size-3.5 rounded-full border border-muted-foreground/60 flex items-center justify-center">
                    <span className="size-1.5 rounded-full bg-muted-foreground/60" />
                  </span>
                  Auto
                  <ChevronDown className="size-3 opacity-60" />
                </button>
                <button className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" aria-label="Attach image">
                  <ImageIcon className="size-4" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 text-[12.5px] text-muted-foreground border border-border px-2.5 py-1.5 rounded-full hover:bg-muted transition-colors">
                  <Sparkles className="size-3" />
                  Thinking
                </button>
                <button
                  className="size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 disabled:opacity-40 transition-opacity"
                  disabled={!value.trim()}
                  aria-label="Send"
                >
                  <ArrowUp className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="mt-8 grid grid-cols-2 gap-2.5">
            {suggestions.map((s) => (
              <button
                key={s.label}
                className="flex items-center gap-3 text-left px-4 py-3 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-border/80 transition-colors"
              >
                <s.icon className="size-4 shrink-0" style={{ color: s.color }} />
                <span className="text-[13.5px]">{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Floating new chat */}
      <button
        className="fixed top-4 right-4 size-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
        aria-label="New chat"
      >
        <SquarePen className="size-4" />
      </button>
    </div>
  );
}
