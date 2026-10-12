import type { ReactNode } from "react";

type BoxProps = {
  children?: ReactNode;
  label?: string;
  url?: string;
};

// Accepts https:
function normalizeUrl(raw?: string): string | null {
  if (!raw || !raw.trim()) return null;
  const trimmed = raw.trim();
  const withScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  try {
    const parsed = new URL(withScheme);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

// Small, sharp-cornered, grey box that is only as big as its text
const baseClasses =
  "mx-0.5 my-0.5 inline-flex max-w-full flex-col rounded-none border px-2 py-0.5 " +
  "align-middle text-left leading-tight transition-colors " +
  "border-zinc-400 bg-zinc-200 text-zinc-900 " +
  "dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100";

export default function Box({ children, label, url }: BoxProps) {
  const href = normalizeUrl(url);

  const content = (
    <>
      <span className="break-words text-sm font-medium">{children}</span>
      {label && (
        <span className="break-words text-[11px] text-zinc-600 dark:text-zinc-400">
          {label}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-700`}
      >
        {content}
      </a>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
