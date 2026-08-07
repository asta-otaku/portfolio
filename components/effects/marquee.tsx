"use client";

export default function Marquee({ items }: { items: readonly string[] }) {
  const track = [...items, ...items];

  return (
    <div className="marquee relative overflow-hidden border-y border-border py-3">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent"
      />
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:text-xs"
          >
            {item}
            <span className="ml-8 text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
