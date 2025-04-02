interface ButtonProps {
  content: string;
  onClick: () => void;
  title?: string;
}

/**
 * @param {string} content - The content of the button
 * @param {function} onClick - The function to be called when the button is clicked
 * @param {string} title (optional) - The title of the button (when hovered)
 */
export default function Button({ title, content, onClick }: ButtonProps) {
  return (
    <button title={title || content} onClick={onClick}>
      {content}
    </button>
  );
}
