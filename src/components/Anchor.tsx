interface AnchorProps {
  content: string;
  href: string;
  openInNewTab?: boolean;
  title?: string;
}

/**
 * @param {string} content - The content of the anchor
 * @param {string} href - The href of the anchor
 * @param {boolean} openInNewTab (optional) - Whether to open the anchor in a new tab
 * @param {string} title (optional) - The title of the anchor (when hovered)
 */
export default function Anchor({
  content,
  href,
  openInNewTab = false,
  title,
}: AnchorProps) {
  return (
    <a
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
