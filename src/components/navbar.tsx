import React from "react";
import { LinkItem } from "../types/type";

interface Props {
  items: LinkItem[];
}

export const Navbar: React.FC<Props> = ({ items }) => {
  return (
    <div className="flex gap-4 items-center">
      {items.map((item) => (
        <a
          key={item.id}
          href={`/#${item.link}`}
          className="py-4 font-medium relative text-black group hover:text-red-500"
        >
          <span className="absolute left-0 bottom-[10px] w-0 h-[2px] bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></span>
          {item.label}
        </a>
      ))}
    </div>
  );
};
