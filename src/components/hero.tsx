import React from "react";
import { cn } from "../utils/utils";
import HeroImg from "../assets/hero.jpeg";
import { Search } from "./search";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("pt-40 pb-100 bg-center bg-cover relative mb-20", className)}
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <h1 className="font-bold text-7xl w-full text-center text-primary">
        Welcome to Cocktail
      </h1>

      <Search/>


    </div>
  );
};
