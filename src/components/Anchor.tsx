import classNames from "classnames";

interface AnchorProps {
  content: string;
  href: string;
  openInNewTab?: boolean;
  align?: "left" | "right" | "center";
  filled?: boolean;
  title?: string;
}

/**
 * @param {string} content - The content of the anchor
 * @param {string} href - The href of the anchor
 * @param {boolean} openInNewTab (optional) - Whether to open the anchor in a new tab
 * @param {string} align (optional) - The alignment of the anchor
 * @param {boolean} filled (optional) - Whether the anchor is filled with color
 * @param {string} title (optional) - The title of the anchor (when hovered)
 */
export default function Anchor({
  content,
  href,
  openInNewTab = false,
  align = "center",
  filled = false,
  title,
}: AnchorProps) {
  return (
    <a
      className={classNames("w-full rounded-xl px-4 py-4 text-2xl", {
        "bg-primary-light text-white": filled,
        "text-left": align === "left",
        "text-right": align === "right",
        "text-center": align === "center",
      })}
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      referrerPolicy={
        openInNewTab ? "no-referrer" : "strict-origin-when-cross-origin"
      }
      title={title || content}
    >
      {content}
    </a>
  );
}
