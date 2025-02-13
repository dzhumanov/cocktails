import vodka1 from "../assets/vodka-1.png";
import vodka2 from "../assets/vodka-2.png";
import vodka3 from "../assets/vodka-3.png";
import { CarouselItemInterface } from "../types/type";
import { cn } from "../utils/utils";
import { CarouselItem } from "./carousel-item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/swiper-bundle.css";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

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
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const extendedItems = [
    ...items,
    ...items.map((item) => ({
      ...item,
      id: item.id + items.length,
    })),
  ];

  return (
    <div className={cn("block relative", className)}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        speed={300}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        watchSlidesProgress={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
      >
        {extendedItems.map((item) => (
          <SwiperSlide
            key={item.id}
            className="opacity-50 transition-all duration-300 ease-in-out py-10 pb-6"
          >
            {({ isActive }) => (
              <div
                className={cn(
                  "transition-all duration-500",
                  "transform",
                  isActive ? "opacity-100 scale-100" : "opacity-50 scale-70"
                )}
              >
                <CarouselItem item={item} isActive={isActive} />
              </div>
            )}
          </SwiperSlide>
        ))}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] z-10 flex justify-between pointer-events-none">
          <button
            ref={prevRef}
            className="p-5 rounded-full z-20 border border-black cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-red hover:text-white hover:border-white active:scale-95 hover:shadow-lg pointer-events-auto"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            ref={nextRef}
            className="p-5 rounded-full z-20 border border-black cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-red hover:text-white hover:border-white active:scale-95 hover:shadow-lg pointer-events-auto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};
