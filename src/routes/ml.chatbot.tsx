import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero, Section, Eyebrow } from "@/components/site/Section";
import { useState } from "react";
import { Bot, Send, Sparkles } from "lucide-react";

export const Route = createFileRoute("/ml/chatbot")({
  head: () => ({
    meta: [
      { title: "AI Chatbot, The Pets Club" },
      { name: "description", content: "24/7 pet care Q&A powered by AI. Get instant answers about food, behaviour, health and more." },
    ],
  }),
  component: ChatbotPage,
});

const sampleConversation = [
  { from: "user", text: "My dog refuses to eat kibble. What should I do?" },
  { from: "bot", text: "Hi! There are a few common reasons. Has anything changed recently, the brand, environment, or routine? Also, when did this start?" },
  { from: "user", text: "Started 3 days ago. Same brand." },
  { from: "bot", text: "Got it. Try (1) warming the kibble slightly, (2) adding a spoon of plain pumpkin or low-sodium broth, (3) ensuring fresh water nearby. If it persists past 48 more hours, or you notice lethargy/vomiting, book a telemedicine consult, I can connect you. 🐾" },
];

function ChatbotPage() {
  const [input, setInput] = useState("");
  return (
    <PageLayout>
      <PageHero
        eyebrow="AI Chatbot"
        title="Your 24/7 pet care assistant."
        subtitle="Ask anything, food, behaviour, training, health. Powered by veterinary-trained AI."
      />
      <Section>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Eyebrow>Why it's smart</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold">Trained on real veterinary knowledge.</h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              {[
                "Trained on 1M+ vet consultations",
                "Escalates to human vets when needed",
                "Available 24/7 in 11 languages",
                "Personalized to your registered pets",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 text-lime-deep" /> {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border-2 border-ink bg-card shadow-card">
              <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-lime text-ink">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">Pets Club AI</div>
                  <div className="text-xs text-muted-foreground">● Online</div>
                </div>
              </div>
              <div className="space-y-3 p-5 max-h-[420px] overflow-auto">
                {sampleConversation.map((m, i) => (
                  <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${m.from === "user" ? "bg-ink text-cream" : "bg-muted"}`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
              <form
                onSubmit={(e) => { e.preventDefault(); setInput(""); }}
                className="flex items-center gap-2 border-t border-border p-3"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about food, behaviour, training…"
                  className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-ink"
                />
                <button type="submit" className="grid h-10 w-10 place-items-center rounded-full bg-lime text-ink hover:bg-lime-deep">
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
