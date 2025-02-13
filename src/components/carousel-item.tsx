import { CarouselItemInterface } from "../types/type";
import { cn } from "../utils/utils";

interface Props {
  className?: string;
  item: CarouselItemInterface;
  isActive: boolean;
}

export const CarouselItem: React.FC<Props> = ({
  className,
  item,
  isActive,
}) => {
  return (
    <div className={cn("mx-auto text-center cursor-pointer", className)}>
      <img
        className="block mx-auto h-[500px] mb-5 "
        src={item.image}
        alt={item.image}
      />
      <div
        style={{
          opacity: isActive ? 1 : 0,
          transition: `opacity 500ms`,
        }}
      >
        <h3 className="font-bold uppercase text-2xl mb-6">{item.name}</h3>
        <p className="text-xl">{item.description}</p>
      </div>
    </div>
  );
};
