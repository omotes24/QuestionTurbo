export function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold tracking-tight text-neutral-900">
      <span>{label}</span>
      {children}
    </label>
  );
}

export const inputClassName =
  "min-h-11 rounded-2xl border border-neutral-950/15 bg-white px-4 py-2.5 text-sm text-neutral-950 outline-none shadow-sm transition placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-4 focus:ring-red-500/10";

export const textareaClassName =
  "min-h-36 rounded-2xl border border-neutral-950/15 bg-white px-4 py-3 text-sm leading-7 text-neutral-950 outline-none shadow-sm transition placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-4 focus:ring-red-500/10";
