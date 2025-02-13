import React from "react";
import { cn } from "../utils/utils";
import { Phone } from "lucide-react";

interface Props {
  className?: string;
}

export const Contacts: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-7", className)}>
      <a href="#" className="">
        Where To Find Us
      </a>
      <Phone
        size={30}
        className="rounded-full border-2 border-red-500 px-1 box-border"
      />
    </div>
  );
};
