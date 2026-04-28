import { ReactNode } from "react";
import { Check } from "lucide-react";

export function StepProgress({ step, total, labels }: { step: number; total: number; labels: string[] }) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between gap-2">
        {Array.from({ length: total }).map((_, i) => {
          const n = i + 1;
          const done = n < step;
          const active = n === step;
          return (
            <div key={n} className="flex flex-1 items-center gap-2">
              <div
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 text-sm font-bold transition ${
                  done ? "border-lime-deep bg-lime-deep text-cream" : active ? "border-ink bg-ink text-cream" : "border-border bg-card text-muted-foreground"
                }`}
              >
                {done ? <Check className="h-4 w-4" /> : n}
              </div>
              {n < total && <div className={`h-0.5 flex-1 rounded ${done ? "bg-lime-deep" : "bg-border"}`} />}
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {labels.map((l, i) => (
          <span key={l} className={i + 1 === step ? "text-ink" : ""}>{l}</span>
        ))}
      </div>
    </div>
  );
}

export function StepNav({
  step,
  total,
  onPrev,
  onNext,
  nextLabel = "Continue",
  submitLabel = "Submit",
  canNext = true,
}: {
  step: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  nextLabel?: string;
  submitLabel?: string;
  canNext?: boolean;
}) {
  const isLast = step === total;
  return (
    <div className="mt-8 flex items-center justify-between gap-3">
      <button
        type="button"
        onClick={onPrev}
        disabled={step === 1}
        className="rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-cream disabled:cursor-not-allowed disabled:opacity-30"
      >
        Back
      </button>
      <button
        type={isLast ? "submit" : "button"}
        onClick={isLast ? undefined : onNext}
        disabled={!canNext}
        className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-cream transition hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLast ? submitLabel : nextLabel}
      </button>
    </div>
  );
}

export function FormCard({ children }: { children: ReactNode }) {
  return <div className="rounded-3xl border-2 border-ink bg-card p-8 shadow-card md:p-10">{children}</div>;
}

export function Field({ label, hint, ...props }: { label: string; hint?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-ink"
      />
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

export function Select({
  label,
  options,
  value,
  onChange,
  ...rest
}: {
  label: string;
  options: string[];
  value?: string;
  onChange?: (v: string) => void;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "value">) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        {...rest}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-ink"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

export function Textarea({ label, ...props }: { label: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <textarea
        rows={4}
        {...props}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-ink"
      />
    </div>
  );
}

export function ChoiceGrid<T extends string>({
  options,
  value,
  onChange,
  cols = 3,
}: {
  options: { id: T; label: string; desc?: string; icon?: React.ComponentType<{ className?: string }> }[];
  value: T;
  onChange: (v: T) => void;
  cols?: 2 | 3 | 4;
}) {
  const colCls = cols === 2 ? "sm:grid-cols-2" : cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3";
  return (
    <div className={`grid gap-3 ${colCls}`}>
      {options.map((o) => {
        const active = o.id === value;
        const Icon = o.icon;
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            className={`rounded-2xl border-2 p-4 text-left transition ${
              active ? "border-ink bg-lime/40 shadow-card" : "border-border bg-card hover:border-ink"
            }`}
          >
            {Icon && <Icon className="mb-2 h-5 w-5 text-ink" />}
            <div className="font-semibold">{o.label}</div>
            {o.desc && <div className="mt-0.5 text-xs text-muted-foreground">{o.desc}</div>}
          </button>
        );
      })}
    </div>
  );
}

export function SuccessCard({
  emoji,
  title,
  message,
  children,
}: {
  emoji: string;
  title: string;
  message: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-3xl border-2 border-lime bg-lime/10 p-10 text-center md:p-14">
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-lime text-4xl shadow-card">{emoji}</div>
      <h2 className="mt-6 text-3xl font-bold md:text-4xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-lg text-muted-foreground">{message}</p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}
