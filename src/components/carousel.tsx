import vodka1 from "../assets/vodka-1.png";
import vodka2 from "../assets/vodka-2.png";
import vodka3 from "../assets/vodka-3.png";
import { CarouselItemInterface } from "../types/type";
import { cn } from "../utils/utils";
import { CarouselItem } from "./carousel-item";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items: CarouselItemInterface[] = [
  {
    id: 1,
    name: "Ketel One 1",
    image: vodka1,
    description:
      "A crisp, smooth taste with a splash of citrus and long finish",
  },
  {
    id: 2,
    name: "Ketel One 2",
    image: vodka2,
    description:
      "A crisp, smooth taste with a splash of citrus and long finish",
  },
  {
    id: 3,
    name: "Ketel One 3",
    image: vodka3,
    description:
      "A crisp, smooth taste with a splash of citrus and long finish",
  },
];

interface Props {
  className?: string;
}

export const Carousel: React.FC<Props> = ({ className }) => {
  return (
    <div className="">
      <CarouselItem item={items[0]} />
    </div>
  );
};
