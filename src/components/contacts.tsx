import React from "react";
import { cn } from "../utils/utils";
import { Phone } from "lucide-react";

interface Props {
  className?: string;
}

export const Contacts: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-7", className)}>
      <a
        href="#"
        className="py-4 font-medium relative text-black group hover:text-red-500"
      >
        <span className="absolute left-0 bottom-[10px] w-0 h-[2px] bg-red-500 transition-all duration-300 ease-out group-hover:w-full"></span>
        Where To Find Us
      </a>
      <Phone
        size={30}
        className="rounded-full border-2 border-red-500 px-1 box-border"
      />
    </div>
  );
};
