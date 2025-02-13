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
      className={cn(
        "pt-40 pb-100 bg-center bg-cover bg-no-repeat relative mb-35",
        className
      )}
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <h1 className="font-bold font-phil text-8xl w-full text-center text-primary fadeInAnimation">
        Welcome to Cocktail
      </h1>

      <Search />
    </div>
  );
};
