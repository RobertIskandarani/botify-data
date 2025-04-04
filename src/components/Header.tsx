import { useState } from "react";
import HamburguerIcon from "./icons/hamburguer/HamburguerIcon";
import Anchor from "./Anchor";
import sections from "../data/Sections.json";
import classNames from "classnames";
export default function Header() {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected((prevStatus) => !prevStatus);
  };

  return (
    <div
      className={classNames("fixed inset-0 overflow-hidden", {
        "h-dvh transition-none": isSelected,
        "h-0 transition-[height] delay-250": !isSelected,
      })}
    >
      <div
        className={classNames(
          "from-primary to-primary/20 before:border-white-50 fixed top-0 flex h-24 w-full flex-row justify-between bg-gradient-to-b px-2 py-4 backdrop-blur-sm before:absolute before:inset-0 before:h-full before:w-full before:border-b before:transition-transform before:duration-[250ms] before:ease-in-out before:content-['']",
          {
            "before:translate-x-0": isSelected,
            "before:-translate-x-full": !isSelected,
          },
        )}
      >
        <a href="/" className="flex h-full">
          <img
            src="/images/botify-data-logo.webp"
            alt="Botify Data Logo"
            height="100%"
            width="auto"
          />
        </a>
        <HamburguerIcon isSelected={isSelected} handleClick={handleClick} />
      </div>
      <div
        className={classNames(
          "from-primary to-primary/40 border-white-50 absolute bottom-0 flex w-full justify-center border-t bg-gradient-to-t px-6 py-4 backdrop-blur-sm transition-all duration-[250ms] ease-in-out",
          {
            "translate-y-0 opacity-100": isSelected,
            "translate-y-full opacity-0": !isSelected,
          },
        )}
      >
        <span className="flex w-full max-w-xl flex-col gap-2">
          {sections.map(({ title, content, id, filled }) => (
            <Anchor
              key={id}
              title={title}
              content={content}
              href={`#${id}`}
              filled={filled}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
