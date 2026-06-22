export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-6 border-b border-neutral-950 pb-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-red-600">
        Interview Console
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-neutral-600">
        {description}
      </p>
    </div>
  );
}
