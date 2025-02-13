import React from "react";
import { LinkItem } from "../types/type";

interface Props {
  items: LinkItem[];
}

export const Navbar: React.FC<Props> = ({ items }) => {
  return (
    <div className="flex gap-4 items-center">
      {items.map((item) => (
        <a key={item.id} href="#" className="py-4">
          {item.label}
        </a>
      ))}
    </div>
  );
};
