import type { ReactNode } from "react";

type BoxProps = {
  children?: ReactNode; // the title text written between <Box> and </Box>
  label?: string;       // small text shown under the title, e.g. ".jpg<100kb"
  url?: string;         // optional; if empty, the box is not clickable
};

// Accepts "ilovepdf.com" or "https://ilovepdf.com" and only allows http/https
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

// Sharp corners (rounded-none), grey box, dark-mode aware, shrinks to fit its text
const baseClasses =
  "my-4 flex w-fit max-w-full min-w-[12rem] flex-col gap-1 rounded-none border " +
  "border-zinc-400 bg-zinc-200 px-4 py-3 text-left text-zinc-900 transition-colors " +
  "dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100";

export default function Box({ children, label, url }: BoxProps) {
  const href = normalizeUrl(url);

  const content = (
    <>
      <span className="break-words font-medium">{children}</span>
      {label && (
        <span className="break-words text-xs text-zinc-600 dark:text-zinc-400">
          {label}
        </span>
      )}
    </>
  );

  // URL given: the whole box is a link that opens in a new tab
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

  // No URL: plain box, clicking does nothing
  return <div className={baseClasses}>{content}</div>;
}

